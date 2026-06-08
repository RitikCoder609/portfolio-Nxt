export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ritik Kumar. All rights reserved.
      </div>
    </footer>
  );
}
