import Image from 'next/image';
import { MapPin } from 'lucide-react';
import CopyableContact from './ui/CopyableContact';

const ContactInfo = () => {
  // Logic remains on the server
  const socialLinks = [
    { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN },
    { label: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB },
  ].filter(link => link.href);

  const email = process.env.NEXT_PUBLIC_EMAIL || '';
  const phone = process.env.NEXT_PUBLIC_PHONE || '';

  return (
    <section className="py-12 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          {process.env.NEXT_PUBLIC_NAME}
        </h1>
        <p className="text-2xl text-blue-600 font-medium mb-8">
          {process.env.NEXT_PUBLIC_ROLE}
        </p>
        
        <div className="flex flex-col gap-4 text-slate-500 font-medium">
          <div className="flex items-center gap-3">
            <MapPin size={18} strokeWidth={2} className="text-blue-600 shrink-0" />
            <span>{process.env.NEXT_PUBLIC_LOCATION}</span>
          </div>
          
          <CopyableContact iconKey="email" value={email} />
          <CopyableContact iconKey="phone" value={phone} />

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

      <div className="w-full md:w-64 flex justify-center md:justify-end">
        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl shadow-2xl relative aspect-square bg-slate-100">
          <Image 
            src="/cv1024x1024.png"
            alt={process.env.NEXT_PUBLIC_NAME || 'Profile Photo'}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;