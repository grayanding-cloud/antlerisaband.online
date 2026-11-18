"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Edit this list to add, remove, or reorder photos
const photos = [
  { src: "/photos/DSCF0030(1).JPG", alt: "Antler" },
  { src: "/photos/DSCF0054.JPG", alt: "Antler" },
  { src: "/photos/DSCF0061.JPG", alt: "Antler" },
  { src: "/photos/DSCF0063.JPG", alt: "Antler" },
  { src: "/photos/DSCF0080.JPG", alt: "Antler" },
  { src: "/photos/DSCF0083.JPG", alt: "Antler" },
  { src: "/photos/DSCF0089.JPG", alt: "Antler" },
  { src: "/photos/DSCF0090.JPG", alt: "Antler" },
  { src: "/photos/DSCF0096.JPG", alt: "Antler" },
  { src: "/photos/DSCF0003(1).JPG", alt: "Antler" },
  { src: "/photos/DSCF0006(1).JPG", alt: "Antler" },
  { src: "/photos/DSCF0013(1).JPG", alt: "Antler" },
  { src: "/photos/DSCF0024.JPG", alt: "Antler" },
  { src: "/photos/DSCF0024(1).JPG", alt: "Antler" },
  { src: "/photos/DSCF0026.JPG", alt: "Antler" },
  

];

export default function Us() {
  // Keep the home-page logo layer hidden on this page
  useEffect(() => {
    document.documentElement.dataset.revealed = "false";
  }, []);

  return (
    <main className="relative min-h-svh px-6 pb-24 pt-10 text-foreground sm:px-12">
      <Link
        href="/"
        className="font-serif text-[0.9rem] uppercase tracking-[0.3em] text-[#f3efe6]/60 transition-colors duration-300 hover:text-[#f3efe6]"
      >
        ← Back
      </Link>

      <h1 className="mt-10 text-center font-serif text-[2rem] font-light uppercase tracking-[0.35em] text-[#f3efe6]/80 sm:text-[2.75rem]">
        Assorted Esoterica
      </h1>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[3/2] overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </main>
  );
}