import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Education } from '@/types/database';

const EducationSection = ({ data }: { data: Education[] }) => (
  <section id="education" className="py-12 border-t border-slate-100">
    <SectionHeading icon={GraduationCap}>Education</SectionHeading>
    {data.map((edu, i) => (
      <div key={i}>
        <h3 className="text-lg font-bold">{edu.institution}</h3>
        <p className="text-slate-600">{edu.degree}</p>
        <p className="text-slate-400 text-sm">{edu.period}</p>
      </div>
    ))}
  </section>
);

export default EducationSection;