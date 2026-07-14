/**
 * Auto-discovery of all site media. No lists to maintain:
 *
 *  1. Every Lovable CDN asset (`src/assets/*.asset.json`) is picked up
 *     automatically — including any new ones added later.
 *  2. Every file dropped into `src/content/photos/` or `src/content/videos/`
 *     (e.g. uploaded through the GitHub web interface) is picked up too.
 *
 * Photos are dated from their EXIF metadata at view time (see Timeline),
 * with filename dates ("2025-08-14_beach.jpg") and manual overrides as
 * fallbacks.
 */

import { MEDIA_OVERRIDES } from "./media-overrides";

export type MediaItem = {
  /** URL to load the file from */
  url: string;
  /** Original filename, used as the key for captions/date overrides */
  filename: string;
  caption?: string;
  /** Manual date override (from media-overrides.ts), ISO "YYYY-MM-DD" */
  dateOverride?: string;
  hidden?: boolean;
};

type AssetJson = {
  url: string;
  original_filename: string;
  content_type: string;
};

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

// --- Source 1: Lovable CDN assets ------------------------------------------
const assetModules = import.meta.glob("/src/assets/*.asset.json", {
  eager: true,
}) as Record<string, { default?: AssetJson } & AssetJson>;

// --- Source 2: files dropped into the content folders ----------------------
const droppedPhotos = import.meta.glob(
  "/src/content/photos/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const droppedVideos = import.meta.glob(
  "/src/content/videos/*.{mp4,webm,mov,m4v,MP4,WEBM,MOV,M4V}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

// ----------------------------------------------------------------------------

function decorate(item: MediaItem): MediaItem {
  const o = MEDIA_OVERRIDES[item.filename];
  return o ? { ...item, ...o } : item;
}

function collect() {
  const photos: MediaItem[] = [];
  const videos: MediaItem[] = [];

  for (const mod of Object.values(assetModules)) {
    const a: AssetJson = (mod.default ?? mod) as AssetJson;
    if (!a?.url) continue;
    const item = decorate({ url: a.url, filename: a.original_filename });
    if (item.hidden) continue;
    const type = a.content_type ?? "";
    if (type.startsWith("image/") || IMAGE_EXT.test(a.original_filename)) {
      photos.push(item);
    } else if (type.startsWith("video/") || VIDEO_EXT.test(a.original_filename)) {
      videos.push(item);
    }
  }

  for (const [path, url] of Object.entries(droppedPhotos)) {
    const item = decorate({ url, filename: path.split("/").pop() ?? path });
    if (!item.hidden) photos.push(item);
  }
  for (const [path, url] of Object.entries(droppedVideos)) {
    const item = decorate({ url, filename: path.split("/").pop() ?? path });
    if (!item.hidden) videos.push(item);
  }

  // De-duplicate by filename (an asset re-uploaded twice, etc.)
  const seen = new Set<string>();
  const dedupe = (list: MediaItem[]) =>
    list.filter((m) => (seen.has(m.url) ? false : (seen.add(m.url), true)));

  return { photos: dedupe(photos), videos: dedupe(videos) };
}

const collected = collect();

export const photoItems: MediaItem[] = collected.photos;
export const videoItems: MediaItem[] = collected.videos.sort((a, b) =>
  a.filename.localeCompare(b.filename),
);

/** Look up a specific photo (for the hero/story image) by filename. */
export function photoByName(filename: string): MediaItem | undefined {
  return photoItems.find((p) => p.filename === filename);
}
