import { useEffect, useMemo, useState } from "react";

import type { MediaItem } from "@/lib/media";
import { dateFromFilename, readExifDate } from "@/lib/exif-date";

type DatedPhoto = MediaItem & { date: Date | null };

const CACHE_KEY = "winston-exif-dates-v1";

function loadCache(): Record<string, string | null> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
  } catch {
    return {};
  }
}

function overrideToDate(iso: string): Date | null {
  const d = new Date(`${iso}T12:00:00`);
  return isNaN(d.getTime()) ? null : d;
}

async function resolveDate(
  photo: MediaItem,
  cache: Record<string, string | null>,
): Promise<Date | null> {
  if (photo.dateOverride) return overrideToDate(photo.dateOverride);
  if (photo.filename in cache) {
    const c = cache[photo.filename];
    return c ? new Date(c) : null;
  }
  const exif = await readExifDate(photo.url);
  const date = exif ?? dateFromFilename(photo.filename);
  cache[photo.filename] = date ? date.toISOString() : null;
  return date;
}

export function Timeline({
  photos,
  onOpen,
}: {
  photos: MediaItem[];
  onOpen: (src: string) => void;
}) {
  const [dated, setDated] = useState<DatedPhoto[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    const cache = loadCache();
    Promise.all(photos.map(async (p) => ({ ...p, date: await resolveDate(p, cache) }))).then(
      (result) => {
        if (cancelled) return;
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        } catch {
          /* ignore */
        }
        setDated(result);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [photos]);

  const groups = useMemo(() => {
    if (!dated) return [];
    const withDate = dated
      .filter((p): p is DatedPhoto & { date: Date } => p.date !== null)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    const undated = dated.filter((p) => p.date === null);

    const byMonth = new Map<string, { label: string; photos: DatedPhoto[] }>();
    for (const p of withDate) {
      const key = `${p.date.getFullYear()}-${String(p.date.getMonth() + 1).padStart(2, "0")}`;
      if (!byMonth.has(key)) {
        byMonth.set(key, {
          label: p.date.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }),
          photos: [],
        });
      }
      byMonth.get(key)!.photos.push(p);
    }
    const result = [...byMonth.values()];
    if (undated.length > 0) {
      result.push({ label: "Date unknown", photos: undated });
    }
    return result;
  }, [dated]);

  if (!dated) {
    return (
      <div className="py-16 text-center text-sm uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
        Sorting memories by month…
      </div>
    );
  }

  return (
    <div className="space-y-20">
      {groups.map((group) => (
        <div key={group.label}>
          {/* Month header */}
          <div className="mb-8 flex items-center gap-6">
            <h3 className="shrink-0 font-serif text-3xl italic text-primary sm:text-4xl">
              {group.label}
            </h3>
            <div className="h-px flex-1 bg-border/70" />
            <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {group.photos.length} {group.photos.length === 1 ? "moment" : "moments"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {group.photos.map((p) => (
              <button
                key={p.url}
                onClick={() => onOpen(p.url)}
                className="group relative overflow-hidden rounded-2xl border border-border/60 shadow-sm transition hover:shadow-xl"
              >
                <img
                  src={p.url}
                  alt={p.caption ?? "Winston"}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-left">
                  {p.caption && (
                    <p className="font-serif italic leading-snug text-white">{p.caption}</p>
                  )}
                  {p.date && (
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-white/70">
                      {p.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
