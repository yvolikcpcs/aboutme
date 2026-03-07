import { Briefcase } from 'lucide-react';
import { experiences } from '@/data';
import SectionHeading from '@/components/ui/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="py-16 space-y-16">
      <SectionHeading icon={Briefcase}>Professional Experience</SectionHeading>
      
      {experiences.map((exp, i) => (
        <div key={i} className="space-y-8">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex flex-col md:flex-row md:justify-between items-baseline">
              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
                {exp.company}
              </h3>
              <span className="text-slate-400 font-mono text-sm uppercase">
                {exp.period}
              </span>
            </div>
            <p className="text-blue-600 font-bold text-lg mt-1 uppercase tracking-wide">
              {exp.role}
            </p>
          </div>

          {/* Projects Container with Border */}
          <div className="space-y-12 pl-4 md:pl-8 border-l border-slate-100 ml-1 md:ml-0">
            {exp.projects.map((project, j) => (
              <div key={j} className="relative">
                {/* The Dot: 
                  -left-5 (20px) centers the 8px dot on the pl-4 (16px) border.
                  -md:left-9 (36px) centers the 8px dot on the md:pl-8 (32px) border.
                */}
                <div className="absolute -left-5 md:-left-9 top-2 w-2 h-2 bg-blue-600 rounded-full ring-4 ring-white" />
                
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {project.name}
                </h4>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.links.map((url, k) => (
                      <a 
                        key={k} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-600 border border-blue-100 bg-blue-50 px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-all"
                      >
                        {url.replace('https://', '').replace('www.', '').replace(/\/$/, '')}
                      </a>
                    ))}
                  </div>
                )}
                
                <ul className="space-y-3 text-slate-600 leading-relaxed max-w-3xl mb-4 text-sm">
                  {project.points.map((point, k) => (
                    <li key={k} className="flex gap-3">
                      <span className="text-blue-600 font-bold">/</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-slate-300 uppercase">Stack:</span>
                  <span className="text-xs font-bold text-slate-500 uppercase">{project.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;