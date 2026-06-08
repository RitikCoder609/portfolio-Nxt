"use client";

import Image from "next/image";

const projects = [
  {
    title: "Rodbez Website",
    image: "/images/website.png",
    description:
      "Production-level ride booking platform built using Next.js, TypeScript and scalable API integration.",
  },
  {
    title: "Admin Dashboard",
    image: "/images/api.avif",
    description:
      "Role-based dashboard system with authentication, analytics and dynamic API workflows.",
  },
  {
    title: "Booking Platform",
    image: "/images/real.png",
    description:
      "Real-time booking system with secure backend integration and optimized UI performance.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="xl:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real-world applications built with modern tech stack.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_0_40px_rgba(132,255,87,0.15)]"
            >

              {/* IMAGE */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
