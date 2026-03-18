import { Languages as LanguagesIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Language } from '@/types/database';

const LanguagesSection = ({ data }: { data: Language[] }) => (
  <section id="languages" className="py-16 border-t border-slate-100">
    <SectionHeading icon={LanguagesIcon}>Languages</SectionHeading>

    <div className="flex flex-col items-start space-y-4">
      {data.map((lang, i) => (
        <div key={i} className="flex flex-col md:flex-row md:gap-2">
          <span className="text-sm font-black uppercase text-slate-900">
            {lang.name}:
          </span>
          <span className="text-sm text-slate-500 font-medium">
            {lang.level}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default LanguagesSection;