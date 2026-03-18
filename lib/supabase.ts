import type { Education, Experience, Language, PortfolioData, TechnicalSkill } from "@/types/database";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
export const getPortfolioData = async (): Promise<PortfolioData> => {
  const [exp, edu, skills, langs] = await Promise.all([
    supabase.from('experiences').select('*, projects(*)').order('sort_order'),
    supabase.from('education').select('*'),
    supabase.from('technical_skills').select('*'),
    supabase.from('languages').select('*'),
  ]);

  return {
    experiences: (exp.data as Experience[]) || [],
    education: (edu.data as Education[]) || [],
    technicalSkills: (skills.data as TechnicalSkill[]) || [],
    languages: (langs.data as Language[]) || [],
  };
};