import { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPetOpen, setIsPetOpen] = useState(false);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#languages", label: "Languages" },
  ];

  const petProjects = [
    { label: "Mentor.Ai", href: "https://mentorai-six.vercel.app/" }
  ];

  return (
    <header className="py-3 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="font-black text-xl tracking-tighter uppercase">
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.label}
            </a>
          ))}

          {/* Pet Projects Dropdown for Desktop */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-widest">
              Pet projects <ChevronDown size={14} />
            </button>
            
            <div className="absolute top-full -left-4 mt-2 w-48 bg-white border border-slate-100 shadow-2xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {petProjects.map((project) => (
                <a 
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 text-slate-900 transition-colors"
                >
                  {project.label}
                  <ExternalLink size={12} className="text-blue-600" />
                </a>
              ))}
            </div>
          </div>
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
          
          {/* Pet Projects for Mobile */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setIsPetOpen(!isPetOpen)}
              className="flex items-center justify-between py-2 uppercase text-slate-900 border-b border-slate-50"
            >
              Pet projects <ChevronDown size={14} className={`transition-transform ${isPetOpen ? 'rotate-180' : ''}`} />
            </button>
            {isPetOpen && petProjects.map((project) => (
              <a 
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-4 py-2 text-blue-600 flex items-center gap-2"
              >
                {project.label} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;