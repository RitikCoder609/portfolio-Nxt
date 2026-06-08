"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiFigma,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

const apps = [
  { icon: SiNextdotjs, color: "text-white" },
  { icon: SiTypescript, color: "text-blue-500" },
  { icon: SiTailwindcss, color: "text-cyan-400" },
  { icon: SiNodedotjs, color: "text-green-500" },
  { icon: SiMongodb, color: "text-green-600" },
  { icon: SiGithub, color: "text-white" },
  { icon: SiFigma, color: "text-pink-500" },
  { icon: SiPostman, color: "text-orange-500" },
];

export default function Integrations() {
  return (
    <section id="skills" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
          My Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-16">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 justify-center">
          {apps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                <Icon size={36} className={item.color} />
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <button className="border border-white/20 px-6 py-2 rounded-full text-sm text-white hover:bg-white/10 transition">
            View Full Stack
          </button>
        </div>

      </div>
    </section>
  );
}
