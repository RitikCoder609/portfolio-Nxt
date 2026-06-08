"use client";
import {
  FaGlobe,
  FaChartLine,
  FaCalendarCheck,
  FaServer,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal branding & showcase platform",
    icon: FaGlobe,
  },
  {
    title: "Admin Dashboard",
    desc: "Role-based analytics & management",
    icon: FaChartLine,
  },
  {
    title: "Booking Platform",
    desc: "Real-time booking & availability",
    icon: FaCalendarCheck,
  },
  {
    title: "API Integration",
    desc: "Secure & scalable backend APIs",
    icon: FaServer,
  },
  {
    title: "Landing Pages",
    desc: "High-conversion marketing websites",
    icon: FaRocket,
  },
  {
    title: "Internal Tools",
    desc: "Productivity & workflow tools",
    icon: FaTools,
  },
];

export default function Products() {
  return (
    <section className="relative xl:pb-28 overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured <span className="text-green-400">Projects</span>
          </h2>

          <button className="border border-white/20 text-sm text-white px-5 py-2 rounded-full hover:bg-white/10 transition">
            See all projects
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...projects, ...projects].map((p, i) => (
            <div
              key={i}
              className="min-w-[280px] rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-green-400/20 mb-4 flex items-center justify-center">
                <p.icon className="text-green-400 text-lg" />
              </div>

              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
