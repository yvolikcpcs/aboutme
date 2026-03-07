import myPhoto from '@/assets/cv1024x1024.png';


const ContactInfo = () => {
  const socialLinks = [
    { label: 'LinkedIn', href: import.meta.env.VITE_LINKEDIN },
    { label: 'GitHub', href: import.meta.env.VITE_GITHUB },
  ].filter(link => link.href);

  return (
    <section className="py-12 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
      
      {/* Left side: Contact Details */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          {import.meta.env.VITE_NAME}
        </h1>
        <p className="text-2xl text-blue-600 font-medium mb-8">
          {import.meta.env.VITE_ROLE}
        </p>
        
        {/* Row by row contact details */}
        <div className="flex flex-col gap-4 text-slate-500 font-medium">
          <div className="flex items-center gap-3">
            <span className="w-6 text-center">📍</span>
            <span>{import.meta.env.VITE_LOCATION}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="w-6 text-center">✉️</span>
            <a 
              href={`mailto:${import.meta.env.VITE_EMAIL}`} 
              className="hover:text-blue-600 transition-colors underline decoration-slate-200 underline-offset-4"
            >
              {import.meta.env.VITE_EMAIL}
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="w-6 text-center">📞</span>
            <a 
              href={`tel:${import.meta.env.VITE_PHONE}`} 
              className="hover:text-blue-600 transition-colors underline decoration-slate-200 underline-offset-4"
            >
              {import.meta.env.VITE_PHONE}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-900 font-black uppercase text-xs tracking-widest border-b-2 border-blue-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Photo */}
      <div className="w-full md:w-64 flex justify-center md:justify-end">
        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src={myPhoto} 
            alt="Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

    </section>
  );
};

export default ContactInfo;