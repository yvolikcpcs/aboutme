import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import type { Experience, Education, TechnicalSkill, Language } from '../src/types/database';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  console.log('🚀 [TS-Script] Fetching data from Supabase...');

  try {
    const [exp, edu, skills, langs] = await Promise.all([
      supabase.from('experiences').select('*, projects(*)').order('sort_order'),
      supabase.from('education').select('*'),
      supabase.from('technical_skills').select('*'),
      supabase.from('languages').select('*'),
    ]);

    const portfolioData = {
      experiences: (exp.data as Experience[]) || [],
      education: (edu.data as Education[]) || [],
      technicalSkills: (skills.data as TechnicalSkill[]) || [],
      languages: (langs.data as Language[]) || [],
      updatedAt: new Date().toISOString()
    };

    const outputPath = path.resolve('src/data/portfolio.json');
    
    if (!fs.existsSync(path.dirname(outputPath))) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2));
    console.log('✅ [TS-Script] Data frozen in src/data/portfolio.json');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

fetchData();