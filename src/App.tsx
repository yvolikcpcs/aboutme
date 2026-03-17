import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactInfo from "@/components/ContactInfo";
import TechnicalSkills from "@/components/TechnikalSkills";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Languages from "@/components/LanguagesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import rawData from '@/data/portfolio.json';
import type { PortfolioData } from '@/types/database';

const App = () => {
  const { technicalSkills, experiences, education, languages } = rawData as PortfolioData;

  const name = import.meta.env.VITE_NAME || "Yurii Volik";
  const role = import.meta.env.VITE_ROLE || "Senior Frontend Engineer";
  const location = import.meta.env.VITE_LOCATION || "Switzerland";

  return (
    <HelmetProvider>
      <div className="bg-white min-h-screen">
        <Helmet>
          <title>{name} | {role}</title>
          <meta name="description" content={`${role} based in ${location}. Specialist in React, TypeScript, and Enterprise-level frontend architecture.`} />
          
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${name} - Professional Portfolio`} />
          <meta property="og:description" content={`Explore the projects and experience of ${name}, a ${role} in ${location}.`} />
          <meta property="og:image" content="/cv1024x1024.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${name} | ${role}`} />
          
          <html lang="en" />
        </Helmet>

        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Header />
          <main>
            <ContactInfo />
            {technicalSkills && <TechnicalSkills data={technicalSkills} />}
            {experiences && <ExperienceSection data={experiences} />}
            {education && <EducationSection data={education} />}
            {languages && <Languages data={languages} />}
          </main>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;