"use client";

import Image from "next/image";
import { SiTypescript } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNode } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden ">
      {/* ===== TOP + BOTTOM LIGHT STREAKS ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]" />

      {/* ===== SIDE GLOWS ===== */}
      <div className="absolute -left-60 top-1/2 w-[600px] h-[600px]" />
      <div className="absolute -right-60 top-1/3 w-[600px] h-[600px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:pt-40 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Software <br /> Engineer
            </h1>

            <p className="text-gray-400 mt-6 max-w-md">
              I build modern, scalable and high-performance web applications
              using Next.js, TypeScript, Tailwind CSS and real production
              experience.
            </p>

            <div className="flex gap-4 mt-10">
              <a target="_blank" href="https://wa.me/919304866538" className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300 transition">
                Hire Me
              </a>
              <a
                href="/assets/RitikKumar.pdf"
                download
                className="border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Download CV
              </a>
            </div>

            {/* tech row */}
            <div className="flex gap-6 mt-12 text-gray-500 text-sm">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
              <span>Node.js</span>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative w-[380px] h-[380px] flex items-center justify-center">
            {/* GREEN CIRCLE (SOLID, EXACT) */}
            {/* GREEN CIRCLE (BEHIND HEAD) */}
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#9CFF5A] mb-10" />

            {/* PROFILE IMAGE */}
            <div className="relative z-10 w-[240px] h-[240px] rounded-full overflow-hidden">
              <Image
                src="/images/hero1.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ICON – DATABASE (TOP LEFT) */}
            <div className="absolute top-[36px] left-[48px] w-12 h-12 rounded-xl bg-[#FFC83D] flex items-center justify-center shadow-lg">
              <SiTypescript size={22} className="text-black" />
            </div>

            {/* ICON – TWITTER (TOP RIGHT) */}
            <div className="absolute top-[32px] right-[56px] w-12 h-12 rounded-xl bg-[#5DA9FF] flex items-center justify-center shadow-lg">
              <AiOutlineJavaScript size={22} className="text-black" />
            </div>

            {/* ICON – APP (RIGHT CENTER) */}
            <div className="absolute right-[18px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#FF5C5C] flex items-center justify-center shadow-lg">
              <FaNode size={22} className="text-black" />
            </div>

            {/* STATS CARD (LEFT BOTTOM) */}
            <div className="absolute bottom-[52px] left-[6px] bg-black/70 backdrop-blur-md px-4 py-3 rounded-xl text-sm border border-white/10 shadow-xl">
              <p className="text-gray-400">Frontend Engineer</p>
              {/* <p className="text-white font-semibold">$245.00</p> */}
              <div className="mt-1 h-2 w-10 bg-green-400 rounded" />
            </div>

            {/* SMALL GREEN DOT */}
            <div className="absolute right-[70px] bottom-[90px] w-3 h-3 rounded-full bg-green-300" />

            {/* PLUS SHAPE */}
            <div className="absolute bottom-[24px] left-[140px] text-green-300 text-xl">
              ✚
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
