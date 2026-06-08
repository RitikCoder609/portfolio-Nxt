// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Products from "@/components/Feature";
// import Integrations from "@/components/Integrations";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Products />
//       <Integrations />
//       <Pricing />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }



import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Feature";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Services";
import Projects from "@/components/Projects"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden">

      {/* ===== GLOBAL BACKGROUND / BLUR / GLOW ===== */}
      <div className="pointer-events-none fixed inset-0 z-0">

        {/* TOP BLUR */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-black/40 blur-[180px]" />

        {/* BOTTOM BLUR */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-black/40 blur-[180px]" />

        {/* LEFT GREEN GLOW */}
        <div className="absolute -left-60 top-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[240px]" />

        {/* RIGHT GREEN GLOW */}
        <div className="absolute -right-60 top-1/3 w-[600px] h-[600px] bg-green-400/20 blur-[240px]" />
      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Products />
        <Integrations />
        <Projects/>
        <Pricing />
        <Footer />
      </div>

    </div>
  );
}
