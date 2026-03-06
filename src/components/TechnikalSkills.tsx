import { Code2 } from 'lucide-react';
import { technicalSkills } from '@/data';
import SectionHeading from '@/components/ui/SectionHeading';

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-100">
      <SectionHeading icon={Code2}>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {technicalSkills.map((group, i) => (
          <div key={i} className="space-y-4">
            <h3 className="text-sm font-black uppercase text-blue-600 tracking-wider">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <span 
                  key={j} 
                  className="text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;