import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-100 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            {title}
          </h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-900 text-2xl cursor-pointer p-2 transition-colors"
          >
            &times;
          </button>
        </div>

        <div className="text-slate-600 normal-case tracking-normal font-normal text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;