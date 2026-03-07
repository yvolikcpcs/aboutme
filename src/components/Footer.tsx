import { useState } from 'react';
import Modal from '@/components/ui/Modal';

const Footer = () => {
  const [modalType, setModalType] = useState<'impressum' | 'privacy' | null>(null);

  return (
    <footer className="py-10 border-t border-slate-100 mt-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-bold">
        <div>© 2026 Yurii Volik</div>
        
        <div className="flex gap-6">
          <button onClick={() => setModalType('impressum')} className="hover:text-blue-600 transition-colors cursor-pointer">Impressum</button>
          <button onClick={() => setModalType('privacy')} className="hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</button>
        </div>
      </div>

      <Modal 
        isOpen={!!modalType} 
        onClose={() => setModalType(null)} 
        title={modalType === 'impressum' ? 'Impressum' : 'Privacy Policy'}
      >
        {modalType === 'impressum' ? (
          <div className="space-y-4">
            <p><strong>Provider:</strong> {import.meta.env.VITE_NAME}</p>
            <p><strong>Address:</strong> {import.meta.env.VITE_LOCATION}</p>
            <p><strong>Contact:</strong> <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a> | <a href={`tel:${import.meta.env.VITE_PHONE}`}>{import.meta.env.VITE_PHONE}</a></p>
            <p className="text-xs text-slate-400">Responsible for content according to § 5 TMG / § 55 RStV.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p>This website uses <strong>Vercel Analytics</strong> to monitor traffic and improve user experience.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Cookies:</strong> No cookies are used or stored on your device.</li>
              <li><strong>Anonymity:</strong> No personal data or IP addresses are collected. All data is fully anonymized.</li>
              <li><strong>Compliance:</strong> This setup is fully compliant with GDPR (DSGVO).</li>
            </ul>
            <p>The processing is based on Art. 6 para. 1 lit. f GDPR.</p>
          </div>
        )}
      </Modal>
    </footer>
  );
};

export default Footer;