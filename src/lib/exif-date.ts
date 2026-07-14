/**
 * Minimal, dependency-free EXIF capture-date reader for JPEG files.
 *
 * Reads only the first chunk of the image (via HTTP Range request when the
 * server supports it) and extracts DateTimeOriginal (tag 0x9003), falling
 * back to DateTime (tag 0x0132). Returns null when the image has no usable
 * EXIF date (e.g. photos that went through WhatsApp, which strips metadata).
 */

const CHUNK_BYTES = 256 * 1024; // EXIF lives at the start of the file

export async function readExifDate(url: string): Promise<Date | null> {
  try {
    const res = await fetch(url, {
      headers: { Range: `bytes=0-${CHUNK_BYTES - 1}` },
    });
    if (!res.ok && res.status !== 206) return null;
    const buf = await res.arrayBuffer();
    return parseJpegExifDate(new DataView(buf));
  } catch {
    return null;
  }
}

export function parseJpegExifDate(view: DataView): Date | null {
  try {
    if (view.byteLength < 12 || view.getUint16(0) !== 0xffd8) return null; // not a JPEG

    // Walk JPEG segments looking for APP1/EXIF
    let offset = 2;
    while (offset + 4 <= view.byteLength) {
      const marker = view.getUint16(offset);
      if ((marker & 0xff00) !== 0xff00) return null;
      const size = view.getUint16(offset + 2); // includes the 2 size bytes
      if (marker === 0xffe1 && offset + 10 <= view.byteLength) {
        // "Exif\0\0" signature
        if (view.getUint32(offset + 4) === 0x45786966 && view.getUint16(offset + 8) === 0x0000) {
          return parseTiffForDate(view, offset + 10);
        }
      }
      if (marker === 0xffda) return null; // start of image data — no EXIF found
      offset += 2 + size;
    }
    return null;
  } catch {
    return null;
  }
}

function parseTiffForDate(view: DataView, tiff: number): Date | null {
  const byteOrder = view.getUint16(tiff);
  const little = byteOrder === 0x4949; // "II"
  if (!little && byteOrder !== 0x4d4d) return null; // "MM"

  const u16 = (o: number) => view.getUint16(tiff + o, little);
  const u32 = (o: number) => view.getUint32(tiff + o, little);
  if (u16(2) !== 0x002a) return null;

  const inBounds = (o: number, len: number) => tiff + o + len <= view.byteLength;

  const readAscii = (valueOffset: number, count: number): string | null => {
    // ASCII values longer than 4 bytes are stored at a pointed-to offset
    const dataOffset = count <= 4 ? valueOffset : u32(valueOffset);
    const start = count <= 4 ? valueOffset : dataOffset;
    if (!inBounds(start, count)) return null;
    let s = "";
    for (let i = 0; i < count; i++) {
      const c = view.getUint8(tiff + start + i);
      if (c === 0) break;
      s += String.fromCharCode(c);
    }
    return s;
  };

  let exifIfd = 0;
  let fallbackDate: string | null = null;
  let originalDate: string | null = null;

  const scanIfd = (ifdOffset: number, isExifIfd: boolean) => {
    if (!inBounds(ifdOffset, 2)) return;
    const entries = u16(ifdOffset);
    for (let i = 0; i < entries; i++) {
      const e = ifdOffset + 2 + i * 12;
      if (!inBounds(e, 12)) return;
      const tag = u16(e);
      const type = u16(e + 2);
      const count = u32(e + 4);
      if (tag === 0x8769 && !isExifIfd) exifIfd = u32(e + 8); // ExifIFD pointer
      if (tag === 0x0132 && type === 2) fallbackDate = readAscii(e + 8, count); // DateTime
      if (tag === 0x9003 && type === 2) originalDate = readAscii(e + 8, count); // DateTimeOriginal
    }
  };

  scanIfd(u32(4), false); // IFD0
  if (exifIfd) scanIfd(exifIfd, true);

  return exifStringToDate(originalDate ?? fallbackDate);
}

function exifStringToDate(s: string | null): Date | null {
  if (!s) return null;
  // Format: "YYYY:MM:DD HH:MM:SS"
  const m = /^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(s.trim());
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
  return isNaN(d.getTime()) || +m[1] < 1990 ? null : d;
}

/** Fallback: a date embedded in the filename, e.g. "2025-08-14_beach-day.jpg" */
export function dateFromFilename(name: string): Date | null {
  const m = /(\d{4})-(\d{2})-(\d{2})/.exec(name);
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3], 12, 0, 0);
  return isNaN(d.getTime()) ? null : d;
}
