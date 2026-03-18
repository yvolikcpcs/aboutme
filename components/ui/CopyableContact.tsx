'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Mail, Phone, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
};

interface CopyableContactProps {
  iconKey: 'email' | 'phone';
  value: string;
}

const CopyableContact = ({ iconKey, value }: CopyableContactProps) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Prevent SSR/Hydration mismatch and hide data from simple scrapers
  useEffect(() => {
    setMounted(true);
  }, []);

  const Icon = ICON_MAP[iconKey];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="group flex items-center gap-4">
      {Icon && (
        <Icon 
          size={18} 
          strokeWidth={2} 
          className="text-blue-600 shrink-0" 
          aria-hidden="true" 
        />
      )}

      <button
        onClick={handleCopy}
        className="relative flex items-center gap-2 text-slate-500 font-medium hover:text-blue-600 transition-colors cursor-pointer group/btn"
        aria-label={`Copy ${iconKey}`}
      >
        <span className="underline decoration-slate-200 underline-offset-4 decoration-1 group-hover:decoration-blue-200">
          {/* Component remains empty/generic until mounted to ensure bot protection */}
          {mounted ? value : `click to reveal ${iconKey}`}
        </span>
        
        <div className="w-4 h-4 flex items-center justify-center">
          {copied ? (
            <Check size={14} className="text-green-500 animate-in zoom-in duration-200" />
          ) : (
            <Copy size={12} className="opacity-0 group-hover/btn:opacity-100 transition-opacity text-slate-300" />
          )}
        </div>

        {/* Feedback Tooltip */}
        {copied && (
          <span className="absolute -top-8 left-0 bg-slate-900 text-white text-[10px] px-2 py-1 rounded font-black tracking-widest animate-in fade-in slide-in-from-bottom-1 shadow-xl">
            COPIED!
          </span>
        )}
      </button>
    </div>
  );
};

export default CopyableContact;