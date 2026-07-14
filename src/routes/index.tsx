import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

import balloon from "@/assets/winston-balloon.jpeg.asset.json";
import hatSit from "@/assets/winston-hat-sit.jpeg.asset.json";
import hatSmile from "@/assets/winston-hat-smile.jpeg.asset.json";
import raincoat from "@/assets/winston-raincoat.jpeg.asset.json";
import shark from "@/assets/winston-shark.jpeg.asset.json";
import hatBack from "@/assets/winston-hat-back.jpeg.asset.json";
import tongue from "@/assets/winston-tongue.jpeg.asset.json";
import profile from "@/assets/winston-profile.jpeg.asset.json";
import grin from "@/assets/winston-grin.jpeg.asset.json";
import lookup from "@/assets/winston-lookup.jpeg.asset.json";
import jump from "@/assets/winston-jump.jpeg.asset.json";
import antler1 from "@/assets/winston-antler-1.jpeg.asset.json";
import antler2 from "@/assets/winston-antler-2.jpeg.asset.json";
import couchSide from "@/assets/winston-couch-side.jpeg.asset.json";
import sunbathing from "@/assets/winston-sunbathing.jpeg.asset.json";
import sausageNap from "@/assets/winston-sausage-nap.jpeg.asset.json";
import sausageToys from "@/assets/winston-sausage-toys.jpeg.asset.json";
import cozyProfile from "@/assets/winston-cozy-profile.jpeg.asset.json";
import swing from "@/assets/winston-swing.jpeg.asset.json";
import video1 from "@/assets/winston-video-1.mp4.asset.json";
import video2 from "@/assets/winston-video-2.mp4.asset.json";
import video3 from "@/assets/winston-video-3.mp4.asset.json";
import video4 from "@/assets/winston-video-4.mp4.asset.json";
import video5 from "@/assets/winston_5ACDA576.mp4.asset.json";
import video6 from "@/assets/winston_94D0FDF7.mp4.asset.json";
import video7 from "@/assets/winston_23BE0D40.mp4.asset.json";
import video8 from "@/assets/winston_1CD934CB.mp4.asset.json";
import workDog from "@/assets/winston_B6F4B376.jpg.asset.json";
import beerDad from "@/assets/winston_7CBFDB42.jpg.asset.json";
import tongueOut from "@/assets/winston_77851332.jpg.asset.json";
import donutBed from "@/assets/winston_A8B4BDC1.jpg.asset.json";
import muddyPaws from "@/assets/winston_1E117168.jpg.asset.json";
import soccerBall from "@/assets/winston_53F2953B.jpg.asset.json";
import toyTime from "@/assets/winston_CCCD2D58.jpg.asset.json";
import lanternGaze from "@/assets/winston_21CC33C4.jpg.asset.json";
import crateCozy from "@/assets/winston_6857E528.jpg.asset.json";
import couchPose from "@/assets/winston_B7C0F4A9.jpg.asset.json";
import beeSuit from "@/assets/winston_79407E9A.jpg.asset.json";
import snowNose from "@/assets/winston_7366641E.jpg.asset.json";
import withOma from "@/assets/winston_DA7AD943.jpg.asset.json";
import bowTie from "@/assets/winston_AD55EB3E.jpg.asset.json";
import familySelfie from "@/assets/winston_878922A8.jpg.asset.json";
import sideEye from "@/assets/winston_E201976C.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const photos = [
  { src: hatSmile.url, caption: "The birthday grin", span: "md:col-span-2 md:row-span-2" },
  { src: tongue.url, caption: "Tongue out, living best life", span: "" },
  { src: balloon.url, caption: "One whole year", span: "" },
  { src: jump.url, caption: "Pure joy in motion", span: "md:col-span-2" },
  { src: sunbathing.url, caption: "Sunbathing champion", span: "" },
  { src: couchSide.url, caption: "Beard game strong", span: "" },
  { src: antler1.url, caption: "Antler, obtained", span: "md:col-span-2" },
  { src: hatSit.url, caption: "Dignified party guest", span: "" },
  { src: grin.url, caption: "Say cheese!", span: "" },
  { src: sausageNap.url, caption: "Napping with sausage friends", span: "md:col-span-2" },
  { src: cozyProfile.url, caption: "Cozy profile study", span: "" },
  { src: antler2.url, caption: "Serious antler business", span: "" },
  { src: swing.url, caption: "Swing-set snuggles", span: "md:col-span-2" },
  { src: sausageToys.url, caption: "Guarding the squad", span: "" },
  { src: shark.url, caption: "Shark-attack Sunday", span: "" },
  { src: lookup.url, caption: "Is that cake?", span: "" },
  { src: profile.url, caption: "Regal profile", span: "" },
  { src: hatBack.url, caption: "Contemplating the balloon", span: "" },
  { src: raincoat.url, caption: "Rainy-day yellow", span: "" },
  { src: workDog.url, caption: "CEO of Shark Corp", span: "md:col-span-2 md:row-span-2" },
  { src: beerDad.url, caption: "Pintjes met me papah", span: "md:col-span-2" },
  { src: tongueOut.url, caption: "Belly-up bliss", span: "" },
  { src: donutBed.url, caption: "Donut-bed dreams", span: "" },
  { src: muddyPaws.url, caption: "Good boy, muddy paws", span: "md:col-span-2" },
  { src: soccerBall.url, caption: "Pawprint striker", span: "" },
  { src: toyTime.url, caption: "Toy patrol duty", span: "" },
  { src: lanternGaze.url, caption: "Lantern-lit longing", span: "" },
  { src: crateCozy.url, caption: "Crate-cave cozy", span: "" },
  { src: bowTie.url, caption: "Bow-tie gentleman", span: "md:col-span-2 md:row-span-2" },
  { src: beeSuit.url, caption: "Buzz-worthy bee", span: "" },
  { src: snowNose.url, caption: "First snow face", span: "md:col-span-2" },
  { src: couchPose.url, caption: "The classic pose", span: "" },
  { src: withOma.url, caption: "With oma", span: "" },
  { src: sideEye.url, caption: "Sneaky side-eye", span: "md:col-span-2" },
  { src: familySelfie.url, caption: "Family selfie", span: "" },
];


function Index() {
  const [candleOut, setCandleOut] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; dx: number; delay: number; color: string; size: number }>>([]);
  const [wishes, setWishes] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem("winston-wishes") || "[]"); } catch { return []; }
  });
  const [wishInput, setWishInput] = useState("");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const daysAlive = useMemo(() => 365, []);

  const blowCandle = () => {
    if (candleOut) return;
    setCandleOut(true);
    // gentle "whoosh"
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current ?? new AC();
      audioCtxRef.current = ctx;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.setValueAtTime(220, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.6);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);
      o.connect(g).connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.7);
    } catch { /* ignore */ }
    burstConfetti();
    setTimeout(() => setCandleOut(false), 6000);
  };

  const burstConfetti = () => {
    const palette = ["#c9a84c", "#e8a87c", "#87a878", "#c17c74", "#f0d78c"];
    const pieces = Array.from({ length: 80 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      dx: (Math.random() - 0.5) * 40,
      delay: Math.random() * 0.6,
      color: palette[i % palette.length],
      size: 6 + Math.random() * 8,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4500);
  };

  const addWish = (e: React.FormEvent) => {
    e.preventDefault();
    const v = wishInput.trim();
    if (!v) return;
    const next = [v, ...wishes].slice(0, 40);
    setWishes(next);
    setWishInput("");
    try { localStorage.setItem("winston-wishes", JSON.stringify(next)); } catch { /* ignore */ }
    burstConfetti();
  };

  useEffect(() => {
    // opening confetti
    const t = setTimeout(burstConfetti, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Confetti layer */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="absolute top-0 block rounded-sm"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.size * 0.4,
              backgroundColor: c.color,
              // @ts-expect-error css var
              "--dx": `${c.dx}vw`,
              animation: `confetti-fall ${2.8 + Math.random() * 1.4}s ${c.delay}s cubic-bezier(.2,.6,.4,1) forwards`,
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 text-sm">
        <span className="font-serif text-xl italic text-primary">Winston · 1</span>
        <div className="hidden gap-8 text-muted-foreground sm:flex">
          <a href="#story" className="hover:text-primary transition">Story</a>
          <a href="#cake" className="hover:text-primary transition">Cake</a>
          <a href="#gallery" className="hover:text-primary transition">Gallery</a>
          <a href="#wishes" className="hover:text-primary transition">Wishes</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-24 text-center animate-fade-up">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          A First Birthday · Est. today, one year ago
        </p>
        <h1 className="text-6xl leading-[0.95] text-primary sm:text-8xl md:text-[9rem]">
          Winston<span className="italic text-[color:var(--gold)]"> turns</span>
          <br />
          <span className="italic">one.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A scruffy long-haired dachshund with the softest beard, the loudest opinions,
          and a stubborn streak wide enough to fill a whole year of memories.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-6 border-y border-border/60 py-8 text-center">
          <Stat value={daysAlive.toString()} label="Days of Winston" />
          <Stat value="∞" label="Belly rubs" />
          <Stat value="1" label="Very good boy" />
        </div>
      </header>

      {/* Story */}
      <section id="story" className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] md:items-center">
          <img
            src={balloon.url}
            alt="Winston next to a sage-green number-one balloon"
            className="animate-floaty rounded-2xl border border-border/60 shadow-[0_30px_60px_-30px_rgba(70,50,30,0.35)]"
          />
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">Chapter One</p>
            <h2 className="text-4xl text-primary sm:text-5xl">A very small, very loud arrival.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              One year ago today, a beard on legs entered the room and never really left it.
              Winston came home stubborn, curious, and already convinced the sofa was his.
              He's since perfected the art of the tilted head, the strategic nap,
              and the "no, <em>you</em> pick up the toy" stare-down.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This little corner of the internet is for him — the wiry, wonderful,
              wildly opinionated dog who taught us that a year can feel like a whole life
              if you spend it well.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive cake */}
      <section id="cake" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">Make a wish</p>
        <h2 className="text-4xl text-primary sm:text-5xl">Blow out the candle.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Tap the flame (or give your microphone a little puff on desktop).
        </p>

        <button
          onClick={blowCandle}
          className="group mx-auto mt-14 block"
          aria-label="Blow out Winston's birthday candle"
        >
          <div className="relative mx-auto h-56 w-56">
            {/* Flame */}
            <div className={`absolute left-1/2 top-0 -translate-x-1/2 transition-all duration-500 ${candleOut ? "opacity-0 -translate-y-4 scale-75" : "opacity-100"}`}>
              <div className="animate-flicker">
                <div
                  className="h-10 w-6 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 50% 65%, #fff7c2 0%, #ffcc55 45%, #f28a1a 75%, transparent 100%)",
                    boxShadow: "0 0 30px #ffcc55, 0 0 60px #f28a1a80",
                  }}
                />
              </div>
            </div>
            {/* Candle */}
            <div className="absolute left-1/2 top-10 -translate-x-1/2">
              <div className="h-16 w-3 rounded-sm bg-gradient-to-b from-[oklch(0.94_0.03_75)] to-[oklch(0.82_0.05_60)] shadow-inner" />
            </div>
            {/* Cake */}
            <div className="absolute bottom-0 left-1/2 w-56 -translate-x-1/2">
              <div className="mx-auto h-24 w-48 rounded-t-2xl bg-gradient-to-b from-[oklch(0.90_0.04_30)] to-[oklch(0.80_0.06_25)] shadow-[inset_0_-8px_20px_rgba(0,0,0,0.08)]" />
              <div className="mx-auto h-6 w-52 -translate-y-2 rounded-full bg-[oklch(0.78_0.055_155)] shadow-md" />
              <div className="mx-auto h-4 w-56 -translate-y-2 rounded-b-3xl bg-gradient-to-b from-[oklch(0.78_0.055_155)] to-[oklch(0.65_0.06_150)]" />
            </div>
          </div>
          <span className="mt-8 inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition">
            {candleOut ? "🎉 Happy birthday, Winston" : "Tap the flame"}
          </span>
        </button>
      </section>

      {/* Videos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[video1.url, video2.url, video3.url, video4.url, video5.url, video6.url, video7.url, video8.url].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_30px_60px_-30px_rgba(70,50,30,0.35)]">
              <video
                src={src}
                className="aspect-[9/16] w-full object-cover"
                controls
                playsInline
                muted
                loop
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">The Album</p>
          <h2 className="text-4xl text-primary sm:text-5xl italic">A year in whiskers.</h2>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(p.src)}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 shadow-sm transition hover:shadow-xl ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-left transition duration-500 group-hover:translate-y-0">
                <p className="font-serif italic text-white text-lg">{p.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Wishes */}
      <section id="wishes" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">Leave a paw-print</p>
        <h2 className="text-4xl text-primary sm:text-5xl">Birthday wishes for Winston.</h2>

        <form onSubmit={addWish} className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            value={wishInput}
            onChange={(e) => setWishInput(e.target.value)}
            placeholder="Many happy naps, little Winston…"
            className="flex-1 rounded-full border border-border bg-card px-6 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
            maxLength={140}
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
          >
            Send wish
          </button>
        </form>

        {wishes.length > 0 && (
          <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
            {wishes.map((w, i) => (
              <li
                key={i}
                className="rounded-2xl border border-border/60 bg-card/80 p-4 font-serif italic text-primary shadow-sm backdrop-blur"
              >
                "{w}"
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-16 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
        Made with love for Winston · One year young
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-6 backdrop-blur"
        >
          <img src={lightbox} alt="Winston" className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl text-primary sm:text-5xl">{value}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </div>
  );
}
