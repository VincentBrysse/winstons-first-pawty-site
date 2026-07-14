import { useRef, useState } from "react";

import type { MediaItem } from "@/lib/media";

export function VideoReel({ videos }: { videos: MediaItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const [playing, setPlaying] = useState<string | null>(null);

  if (videos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/70 py-16 text-center text-sm text-muted-foreground">
        No videos yet — drop some into{" "}
        <code className="rounded bg-card px-1.5 py-0.5">src/content/videos/</code> on GitHub and
        they'll appear here.
      </div>
    );
  }

  const toggle = (url: string) => {
    const el = videoRefs.current.get(url);
    if (!el) return;
    if (el.paused) {
      // pause all others
      videoRefs.current.forEach((v, key) => {
        if (key !== url) v.pause();
      });
      void el.play();
      setPlaying(url);
    } else {
      el.pause();
      setPlaying(null);
    }
  };

  const fullscreen = (url: string) => {
    const el = videoRefs.current.get(url);
    if (!el) return;
    type FsVideo = HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };
    const v = el as FsVideo;
    if (el.requestFullscreen) void el.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iOS Safari
  };

  const scrollBy = (dir: 1 | -1) => {
    containerRef.current?.scrollBy({
      left: dir * (containerRef.current.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <div
            key={v.url}
            className="relative w-64 shrink-0 snap-center overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_30px_60px_-30px_rgba(70,50,30,0.35)] sm:w-72"
          >
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(v.url, el);
                else videoRefs.current.delete(v.url);
              }}
              src={v.url}
              className="aspect-[9/16] w-full cursor-pointer object-cover"
              playsInline
              loop
              preload="metadata"
              onClick={() => toggle(v.url)}
              onPlay={() => setPlaying(v.url)}
              onPause={() => setPlaying((p) => (p === v.url ? null : p))}
            />

            {/* Play overlay */}
            {playing !== v.url && (
              <button
                onClick={() => toggle(v.url)}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 pl-1 text-2xl text-primary shadow-lg">
                  ▶
                </span>
              </button>
            )}

            {/* Fullscreen */}
            <button
              onClick={() => fullscreen(v.url)}
              aria-label="Fullscreen"
              className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1.5 text-xs text-white backdrop-blur transition hover:bg-black/65"
            >
              ⛶
            </button>

            {v.caption && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
                <p className="font-serif italic text-white">{v.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop arrows */}
      {videos.length > 3 && (
        <>
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-md transition hover:shadow-lg md:flex"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-md transition hover:shadow-lg md:flex"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
