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
  const [isReady, setIsReady] = useState(false);

  // Note: 300 seconds is 5 minutes. 
  // For a faster check, use 300 (ms).
  const DELAY_MS = 300; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, DELAY_MS);

    // Cleanup prevents memory leaks if the user leaves the page early
    return () => clearTimeout(timer);
  }, []);

  const Icon = ICON_MAP[iconKey];

  const handleCopy = async () => {
    if (!isReady) return;
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
        disabled={!isReady}
        className={`relative flex items-center gap-2 font-medium transition-all duration-300 ${
          isReady 
            ? 'text-slate-500 hover:text-blue-600 cursor-pointer' 
            : 'text-slate-200 cursor-wait'
        } group/btn`}
      >
        <span className="underline decoration-slate-200 underline-offset-4 decoration-1 group-hover:decoration-blue-200">
          {/* While the timer is running, the actual value is nowhere in the DOM */}
          {isReady ? value : `reveal ${iconKey}...`}
        </span>
        
        <div className="w-4 h-4 flex items-center justify-center">
          {copied ? (
            <Check size={14} className="text-green-500 animate-in zoom-in duration-200" />
          ) : (
            <Copy 
              size={12} 
              className={`transition-opacity ${isReady ? 'opacity-0 group-hover/btn:opacity-100 text-slate-300' : 'opacity-0'}`} 
            />
          )}
        </div>

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