import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#languages", label: "Languages" },
  ];

  return (
    <header className="py-3 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter uppercase">
          Portfolio
        </div>

        <nav className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col p-4 gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 py-2 border-b border-slate-50 last:border-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;