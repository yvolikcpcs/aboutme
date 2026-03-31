import Header from "@/components/Header";
import ContactInfo from "@/components/ContactInfo";
import TechnicalSkills from "@/components/TechnikalSkills";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Languages from "@/components/LanguagesSection";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
import { getPortfolioData } from "@/lib/supabase";
import { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
  title: `${process.env.NEXT_PUBLIC_NAME} | ${process.env.NEXT_PUBLIC_ROLE}`,
  description: `${process.env.NEXT_PUBLIC_ROLE} based in ${process.env.NEXT_PUBLIC_LOCATION}. Specialist in React and Enterprise architecture.`,
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_NAME} - Portfolio`,
    description: `Professional experience and projects.`,
    images: [{ url: '/cv1024x1024.png' }],
  },
};
}

export default async function Home() {
  const data = await getPortfolioData();

  const { content: privacyContent } = await compileMDX({
    source: data.contentBlocks.find(block => block.key === 'privacy_policy')?.value || '',
    components: {
      ul:   (props) => <ul className="list-disc pl-5 space-y-2" {...props} />,
    }
  });

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <Header />
      <main>
        <ContactInfo />
        <Introduction data={data.contentBlocks} />
        <TechnicalSkills data={data.technicalSkills} />
        <ExperienceSection data={data.experiences} />
        <EducationSection data={data.education} />
        <Languages data={data.languages} />
      </main>
      <Footer privacyElement={privacyContent} />
    </div>
  );
}

