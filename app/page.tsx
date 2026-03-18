import Header from "@/components/Header";
import ContactInfo from "@/components/ContactInfo";
import TechnicalSkills from "@/components/TechnikalSkills";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Languages from "@/components/LanguagesSection";
import Footer from "@/components/Footer";
import { getPortfolioData } from "@/lib/supabase";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <Header />
      <main>
        <ContactInfo />
        <TechnicalSkills data={data.technicalSkills} />
        <ExperienceSection data={data.experiences} />
        <EducationSection data={data.education} />
        <Languages data={data.languages} />
      </main>
      <Footer />
    </div>
  );
}