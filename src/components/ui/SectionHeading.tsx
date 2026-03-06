import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  children: React.ReactNode;
  // We accept the icon component itself, not a rendered element
  icon: LucideIcon; 
  className?: string;
}

const SectionHeading = ({ children, icon: Icon, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`flex items-center gap-3 mb-10 ${className}`}>
      <Icon 
        size={18} 
        strokeWidth={2.5} 
        className="text-blue-600 shrink-0" 
      />
      
      <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;