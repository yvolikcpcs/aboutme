const Header = () => (
  <header className="py-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10">
    <div className="font-black text-xl tracking-tighter uppercase">Portfolio</div>
    <nav className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
      <a href="#skills" className="hover:text-blue-600">Skills</a>
      <a href="#experience" className="hover:text-blue-600">Experience</a>
      <a href="#education" className="hover:text-blue-600">Education</a>
      <a href="#languages" className="hover:text-blue-600">Languages</a>

      {/* <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-full transition-transform hover:scale-105">Test Projects</a> */}
    </nav>
  </header>
);

export default Header;