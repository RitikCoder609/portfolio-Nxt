export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full xl:px-8 xl:py-3 px-4 py-1  flex items-center xl:gap-8 gap-2">
      <span className="font-bold text-green-400">Ritik.dev</span>

      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#services">Contact</a>
      </div>

      <a target="_blank" href="https://wa.me/919304866538"  className="ml-auto bg-green-500 text-black xl:px-4 px-2 py-2 rounded-full text-sm font-semibold">
        Hire Me
      </a>
    </nav>
  );
}
