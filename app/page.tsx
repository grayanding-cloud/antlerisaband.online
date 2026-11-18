"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type Show = {
  venue: string;
  date: string;
  doors: string;
  link: string;
};

const shows: Show[] = [
  // { venue: "Dave's", date: "Nov 8", doors: "Doors at 8", link: "https://www.google.com" },
  // { venue: "Empty Bottle", date: "Nov 12", doors: "Doors at 8:30", link: "https://www.bing.com" },
];
export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const [showsRevealed, setShowsRevealed] = useState(false);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  
    const check = () => {
      if (window.scrollY > 10) setRevealed(true);
    };
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  // Tell the CSS (logo) to fade in, then bring in the text after a delay
  useEffect(() => {
    document.documentElement.dataset.revealed = revealed ? "true" : "false";
    if (!revealed) return;
    const t1 = setTimeout(() => setTextRevealed(true), 1600);
    const t2 = setTimeout(() => setShowsRevealed(true), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [revealed]);

  return (
    <>
      <main className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-6 text-foreground">
        {/* Left border */}
        <div
          aria-hidden
          className={`pointer-events-none fixed inset-y-0 left-0 z-10 w-14 invert bg-[url('/antlerborder.png')] bg-[length:100%_auto] bg-repeat-y transition-opacity duration-[2000ms] ease-out sm:w-24 ${
            revealed ? "opacity-[0.12]" : "opacity-0"
          }`}
        />

        {/* Right border (inverted + flipped) */}
        <div
          aria-hidden
          className={`pointer-events-none fixed inset-y-0 right-0 z-10 w-14 invert -scale-x-100 bg-[url('/antlerborder.png')] bg-[length:100%_auto] bg-repeat-y transition-opacity duration-[2000ms] ease-out sm:w-24 ${
            revealed ? "opacity-[0.12]" : "opacity-0"
          }`}
        />

        {/* Grunge texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[15] overflow-hidden opacity-[0.09] mix-blend-overlay"
        >
          <Image
            src="/textures/grunge-wall-texture.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={45}
            className="object-cover"
          />
        </div>

        {/* Text + Booking: fades in after the logo and borders */}
        <div
          className={`absolute inset-x-0 bottom-0 z-20 flex h-1/3 flex-col items-center justify-center pb-5 text-center transition-all duration-[1800ms] ease-out ${
            textRevealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="sr-only">Antler</h1>

          <div className="flex flex-col items-center gap-1.5 font-serif text-[1.15rem] font-light uppercase tracking-[0.3em] text-[#f3efe6]/70 sm:text-[1.5rem]">
            <p>Chicago</p>
            <p>antler is a band</p>
          </div>

          <a
            href="mailto:antlerisaband@gmail.com?subject=Booking%20Inquiry"
            className="mt-4 w-44 border border-[#f3efe6]/35 py-2.5 text-center font-serif text-[0.95rem] uppercase tracking-[0.3em] text-[#f3efe6]/80 transition-colors duration-300 hover:border-[#f3efe6]/70 hover:text-[#f3efe6] sm:w-52 sm:text-[1.05rem]"
          >
            Booking
          </a>

          <a
            href="https://www.instagram.com/antlerisaband/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-44 border border-[#f3efe6]/35 py-2.5 text-center font-serif text-[0.95rem] uppercase tracking-[0.3em] text-[#f3efe6]/80 transition-colors duration-300 hover:border-[#f3efe6]/70 hover:text-[#f3efe6] sm:w-52 sm:text-[1.05rem]"
          >
            Socials
          </a>

          <Link
            href="/us"
            className="mt-4 w-44 border border-[#f3efe6]/35 py-2.5 text-center font-serif text-[0.95rem] uppercase tracking-[0.3em] text-[#f3efe6]/80 transition-colors duration-300 hover:border-[#f3efe6]/70 hover:text-[#f3efe6] sm:w-52 sm:text-[1.05rem]"
          >
            Us
          </Link>
        </div>
          {/* Upcoming shows: fades in last */}
        <div
          className={`absolute inset-x-0 top-[40svh] z-20 flex flex-col items-center px-6 text-center transition-all duration-[1800ms] ease-out ${
            showsRevealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
           <h2 className="font-serif text-[1.1rem] font-light uppercase tracking-[0.4em] text-[#f3efe6]/70 sm:text-[1.4rem]">
            Upcoming Shows
           </h2>

           {shows.length > 0 ? (
            <ul className="mt-5 flex flex-col items-center gap-4">
               {shows.map((show) => (
                 <li key={`${show.date}-${show.venue}`}>
                 <a
                   href={show.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group block"
                 >
                   <p className="font-serif text-[1.05rem] font-light uppercase tracking-[0.25em] text-[#f3efe6]/75 transition-colors duration-300 group-hover:text-[#f3efe6] sm:text-[1.25rem]">
                     {show.date} · {show.venue}
                   </p>
                   <p className="mt-1 font-serif text-[0.8rem] font-light uppercase tracking-[0.3em] text-[#f3efe6]/40 transition-colors duration-300 group-hover:text-[#f3efe6]/70 sm:text-[0.9rem]">
                     {show.doors}
                   </p>
                 </a>
               </li>
      ))}
    </ul>
  ) : (
    <p className="mt-5 font-serif text-[0.9rem] font-light uppercase tracking-[0.3em] text-[#f3efe6]/40">
      No shows announced yet
    </p>
  )}
</div>
        {/* Scroll cue: the only thing visible at first, fades out on scroll */}
        <div
  className={`pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-[#f3efe6]/40 transition-opacity duration-1000 ${
    revealed ? "opacity-0" : "opacity-100"
  }`}
        >
          <span className="font-sans text-[0.55rem] uppercase tracking-[0.35em]">
            Scroll
          </span>
          <span
            aria-hidden
            className="block h-8 w-px origin-top bg-[#f3efe6]/35 animate-scroll-cue"
          />
        </div>
      </main>

      {/* Invisible scroll runway so there is something to scroll */}
      <div aria-hidden className="h-[200svh]" />
    </>
  );
}