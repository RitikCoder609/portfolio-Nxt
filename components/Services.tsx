"use client";
import { useState } from "react";

export default function Testimonials() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
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

    setFieldErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({
      name: "",
      email: "",
      message: "",
    });
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    }

    setFieldErrors(errors);

    if (errors.name || errors.email || errors.message) {
      setLoading(false);
      return;
    }

    console.log("FETCH CALLED");

    setSuccess("");
    setError("");
    setLoading(true);

    const res = await fetch("/api/contact", {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    

    const data = await res.json();

    if (data.success) {
      setSuccess("Message Sent Successfully 🚀");
      setTimeout(() => {
        setSuccess("");
      }, 3000);

      setForm({ name: "", email: "", message: "" });
    } else {
      setError("Something went wrong. Please try again.");
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
          {success && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
              <div className="bg-[#111] border border-green-500/30 px-8 py-6 rounded-2xl shadow-xl">
                <p className="text-green-400 xl:text-lg text-sm font-semibold text-center">
                  Message Sent Successfully
                </p>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Name</label>
              {fieldErrors.name && (
                <p className="text-red-400 text-xs mb-2">{fieldErrors.name}</p>
              )}
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
              {fieldErrors.email && (
                <p className="text-red-400 text-xs mb-2">{fieldErrors.email}</p>
              )}
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
              {fieldErrors.message && (
                <p className="text-red-400 text-xs mb-2">
                  {fieldErrors.message}
                </p>
              )}
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
