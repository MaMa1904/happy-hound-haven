import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Curtains } from "@/components/Curtains";
import { Confetti } from "@/components/Confetti";
import { PawCursor } from "@/components/PawCursor";
import kuku1 from "@/assets/kuku-1.jpeg";
import kuku2 from "@/assets/kuku-2.jpeg";
import mansi from "@/assets/mansi.jpeg";
import meAndMansi from "@/assets/me-and-mansi.jpeg";
import mansi2 from "@/assets/mansi-2.png";
import paw from "@/assets/paw.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Mansi 🎀 — From your friend & Kuku" },
      { name: "description", content: "A pastel birthday surprise for Mansi & her beagle Kuku 🐾" },
      { property: "og:title", content: "Happy Birthday Mansi 🎀" },
      { property: "og:description", content: "A pastel birthday surprise for Mansi & Kuku 🐾" },
    ],
  }),
  component: Index,
});

const memories = [
  { year: "The day we met", text: "Two strangers who somehow knew they'd be forever friends.", color: "var(--blush)" },
  { year: "Kuku arrives", text: "A tiny howl, four floppy ears, and your heart was gone. 🐶", color: "var(--butter)" },
  { year: "Countless memories", text: "Late night chats, chai breaks, and the loudest laughter.", color: "var(--sky)" },
  { year: "Today", text: "Another year of you being the warmest soul we know. 🎀", color: "var(--mint)" },
];

const galleryItems = [
  { src: mansi, caption: "the birthday girl 🎀", rotate: -3 },
  { src: kuku2, caption: "kuku close-up 🐶", rotate: 2 },
  { src: kuku1, caption: "kuku's nap goals", rotate: -2 },
  { src: meAndMansi, caption: "us, always 💛", rotate: 3 },
  { src: mansi2, caption: "queen energy ✨", rotate: -4 },
  { src: kuku1, caption: "sunlit kuku ☀️", rotate: 4 },
];

function Index() {
  const [opened, setOpened] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);
  const [giftOpen, setGiftOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {!opened && <Curtains onOpen={() => setOpened(true)} />}
      {opened && <PawCursor />}
      {confettiBurst > 0 && <Confetti key={confettiBurst} count={60} />}

      {/* Floating background blobs */}
      <div className="fixed inset-0 -z-10 bg-gradient-sky" />
      <div
        className="fixed -z-10 w-96 h-96 rounded-full blur-3xl opacity-50 animate-float"
        style={{ background: "var(--blush)", top: "10%", left: "-5%" }}
      />
      <div
        className="fixed -z-10 w-80 h-80 rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "var(--butter-deep)", bottom: "15%", right: "-5%", animationDelay: "2s" }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-up">
            <p className="font-script text-3xl md:text-4xl text-primary mb-3">happy birthday,</p>
            <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] text-foreground">
              you &amp; your<br />
              <span
                className="italic"
                style={{
                  background: "var(--gradient-sunset)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                little beagle
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              A pastel little corner of the internet, made just for you — full of love,
              soft sunlight, and a thousand wagging tails. 🐾
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <button
                onClick={() => setConfettiBurst((n) => n + 1)}
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-lg shadow-soft hover:scale-105 transition-transform"
              >
                🎉 Throw confetti
              </button>
              <a
                href="#gift"
                className="px-8 py-4 rounded-full bg-card border-2 border-primary text-primary font-display text-lg shadow-paper hover:scale-105 transition-transform"
              >
                🎁 My gift
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -m-8 rounded-full opacity-60 blur-2xl"
              style={{ background: "var(--gradient-sunset)" }}
            />
            <img
              src={beagleHero}
              alt="A cute beagle with a pink bow surrounded by pastel flowers"
              width={1280}
              height={1280}
              className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
            <div
              className="absolute -top-4 -right-4 bg-butter px-5 py-3 rounded-full shadow-paper font-script text-2xl rotate-12"
              style={{ background: "var(--butter)" }}
            >
              woof! 🎂
            </div>
          </div>
        </div>

        {/* paw trail */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-8 opacity-50">
          {[0, 1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={paw}
              alt=""
              aria-hidden
              className="w-6 h-6 animate-float"
              style={{ animationDelay: `${i * 0.3}s`, transform: `rotate(${i % 2 ? 20 : -20}deg)` }}
            />
          ))}
        </div>
      </section>

      {/* MESSAGE */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-3xl p-10 md:p-16 shadow-soft" style={{ transform: "rotate(-1deg)" }}>
            <div className="tape -top-3 left-1/4 -rotate-6" />
            <div className="tape -top-3 right-1/4 rotate-6" />
            <p className="font-script text-3xl md:text-5xl text-center leading-tight text-foreground">
              "May your year be as soft as <span className="text-primary">puppy ears</span>,
              as sunny as a <span style={{ color: "var(--butter-deep)" }}>buttery afternoon</span>,
              and as endless as the love your <span style={{ color: "var(--sky-deep)" }}>beagle</span> has for you."
            </p>
            <p className="mt-8 text-center font-display italic text-muted-foreground">— with all my love 🎀</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-primary">a little scrapbook</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mt-2">moments &amp; memories</h2>
            <p className="mt-4 text-muted-foreground">(swap these with your real photos — drag them in!)</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {galleryItems.map((item, i) => (
              <figure
                key={i}
                className="relative bg-card p-3 pb-12 shadow-paper hover:shadow-soft hover:scale-105 hover:rotate-0 transition-all duration-500"
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <div className="tape -top-2 left-1/2 -translate-x-1/2" />
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full aspect-square object-cover"
                />
                <figcaption className="absolute bottom-3 left-0 right-0 text-center font-script text-xl text-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-primary">our story so far</p>
            <h2 className="font-display font-black text-5xl md:text-6xl mt-2">a timeline of love</h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full"
              style={{ background: "var(--gradient-sunset)" }}
            />
            {memories.map((m, i) => (
              <div
                key={i}
                className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`}
              >
                <div
                  className="absolute left-4 md:left-1/2 top-6 w-6 h-6 rounded-full -translate-x-1/2 border-4 shadow-paper"
                  style={{ background: m.color, borderColor: "var(--cream)" }}
                />
                <div
                  className="bg-card rounded-2xl p-6 shadow-paper hover:shadow-soft transition-shadow"
                  style={{ borderLeft: `4px solid ${m.color}` }}
                >
                  <p className="font-script text-2xl text-primary">{m.year}</p>
                  <p className="mt-2 text-foreground text-lg">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT */}
      <section id="gift" className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-script text-3xl text-primary">one more thing...</p>
          <h2 className="font-display font-black text-5xl md:text-6xl mt-2 mb-12">click to unwrap 🎁</h2>

          <button
            onClick={() => {
              setGiftOpen(true);
              setConfettiBurst((n) => n + 1);
            }}
            className="relative mx-auto block group"
            disabled={giftOpen}
          >
            {!giftOpen ? (
              <div
                className="w-64 h-64 mx-auto rounded-3xl shadow-soft flex items-center justify-center text-8xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 animate-sway"
                style={{ background: "var(--gradient-sunset)" }}
              >
                🎁
              </div>
            ) : (
              <div className="animate-fade-up">
                <div
                  className="w-72 h-72 mx-auto rounded-3xl shadow-soft flex flex-col items-center justify-center p-8"
                  style={{ background: "var(--gradient-sunset)" }}
                >
                  <p className="font-script text-4xl text-foreground">a year full of</p>
                  <p className="font-display font-black text-3xl text-foreground mt-2">infinite tail wags 🐾</p>
                  <p className="font-script text-2xl text-foreground mt-4">love you, always.</p>
                </div>
              </div>
            )}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 text-center">
        <p className="font-script text-2xl text-primary">made with 🎀 &amp; 🐾</p>
        <p className="text-sm text-muted-foreground mt-2">happy birthday — every day should feel like this one.</p>
      </footer>
    </main>
  );
}
