"use client";
import { useState } from "react";

export default function Testimonials() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - TESTIMONIAL */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let’s Build Something <br />
            <span className="text-green-400">Great Together</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Have a project in mind or need help improving your web application?
            Share your requirements and I’ll get back to you with the best
            possible solution.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <p className="text-lg text-white leading-relaxed">
              I specialize in building scalable, production-ready web
              applications using Next.js, TypeScript, and modern frontend
              architecture. Clean code, optimized performance, and real-world
              experience.
            </p>

            <p className="mt-6 text-gray-400 font-medium">
              — Ritik Kumar, Software Developer
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl xl:p-10 p-4"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Contact Me</h3>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-400 text-black py-3 rounded-full font-semibold hover:bg-green-300 transition"
            >
              {loading ? "Sending..." : "Send Message"}

              {/* Send Message */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
