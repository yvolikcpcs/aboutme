-- 1. Cleanup (Optional: use only if you want to reset your tables)
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS technical_skills;
DROP TABLE IF EXISTS languages;

-- 2. Create Experience table
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT,
  sort_order INT DEFAULT 0
);

-- 3. Create Projects table (linked to experiences via Foreign Key)
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  experience_id INT REFERENCES experiences(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  stack TEXT,
  links TEXT[] DEFAULT '{}',
  points TEXT[] DEFAULT '{}'
);

-- 4. Create Education table
CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  period TEXT NOT NULL
);

-- 5. Create Technical Skills table
CREATE TABLE technical_skills (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  items TEXT[] DEFAULT '{}'
);

-- 6. Create Languages table
CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  level TEXT NOT NULL
);

-- 7. Enable Row Level Security (RLS) for all tables
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE technical_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE languages ENABLE ROW LEVEL SECURITY;

-- 8. Define Access Policies (Allow public read-only access for anyone)
CREATE POLICY "Allow public read access" ON experiences FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON education FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON technical_skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON languages FOR SELECT USING (true);

-- 9. SEED DATA INSERTION

-- Insert Experience records
INSERT INTO experiences (id, company, role, period, description, sort_order) VALUES
(1, 'Hearst Magazines (via Custom PC Software)', 'Senior Frontend Engineer', '01.2020 — Present', 'Global Media Platform (Cosmopolitan, Elle, Esquire, Quest).', 10),
(2, 'Yomobile (via Custom PC Software)', 'Frontend Developer', '2019 — 2020', 'Global eSIM Connectivity Platform.', 20),
(3, 'Stanwood (Berlin, Germany)', 'Frontend Developer', '2018 — 2019', 'Digital Product Studio working for Funke Mediengruppe.', 30),
(4, 'Custom E-commerce (via Custom PC Software)', 'Full-Stack & CMS Developer (Early Career)', '01.2011 — 2017', 'Building a strong foundation in web architecture and SSR logic.', 40);

-- Insert Project records linked to specific experiences
INSERT INTO projects (experience_id, name, stack, links, points) VALUES
(1, 'Enterprise Brand Architecture', 'React, Next.js, GraphQL, Styled Components, TypeScript, Piano, Optimizely, GA4, Marfeel', 
 ARRAY['https://www.cosmopolitan.com', 'https://www.elle.com', 'https://www.quest.nl', 'https://www.esquire.com'], 
 ARRAY[
   'Architected and evolved scalable frontend solutions for premier global brands, supporting 10M+ monthly active users.',
   'Acted as a technical mentor for junior and middle frontend engineers, conducting code reviews and establishing engineering best practices.',
   'Led complex integrations of GA4 and Marfeel for deep behavioral analytics, alongside Piano (Paywalls) and Optimizely for full-stack A/B testing.',
   'Optimized data fetching using GraphQL to ensure efficient content delivery across a vast global infrastructure.',
   'Engineered robust User Consent (CMP) frameworks to ensure 100% GDPR and CCPA compliance across the global portfolio.'
 ]),
(2, 'E-commerce & Connectivity', 'Next.js (Server Actions), React, TypeScript, Tailwind CSS, SSO Auth', 
 ARRAY['https://www.yomobile.com/'], 
 ARRAY[
   'Developed a high-performance, mobile-first e-commerce platform using Next.js Server Actions and Tailwind CSS.',
   'Integrated secure SSO Authentication flows and implemented User Consent modules to enhance data protection and user privacy.',
   'Optimized checkout UX and integrated GA tracking, driving significant growth in conversion rates and SEO performance.'
 ]),
(3, 'Funke Mediengruppe - Digital Products', 'React, JavaScript, Agile/Scrum', 
 '{}', 
 ARRAY[
   'Developed responsive web applications for German media leader Funke Mediengruppe, adhering to rigorous DACH code quality and accessibility standards.',
   'Collaborated within an international English-speaking Scrum team to ensure rapid delivery of high-traffic news platforms.',
   'Ensured high maintainability through technical code reviews and alignment with rigorous German engineering requirements.'
 ]),
(4, 'International Retail Projects', 'PHP, WordPress, HTML5, CSS3', 
 '{}', 
 ARRAY[
   'Delivered custom themes and complex plugins for international retail projects, building a deep understanding of full-lifecycle web development.',
   'Leveraged strong PHP/SSR foundations to facilitate a seamless transition into modern architectural work with Next.js.'
 ]);

-- Insert Education records
INSERT INTO education (institution, degree, period) VALUES
('Sumy State University, Ukraine', 'Master''s Degree in Computer Science', '2006 — 2011');

-- Insert Technical Skills categorized
INSERT INTO technical_skills (category, items) VALUES
('Core', ARRAY['React.js', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']),
('Enterprise & Analytics', ARRAY['piano.io', 'Optimizely (A/B Testing)', 'GA4', 'GTM', 'AI Personalization']),
('Compliance & A11y', ARRAY['GDPR/DSGVO', 'WCAG 2.1/2.2', 'ARIA', 'User Consent (CMP)']),
('State & Architecture', ARRAY['Redux Toolkit', 'React Query', 'Context API', 'GraphQL', 'REST API']),
('Tools & Quality', ARRAY['Vite', 'Core Web Vitals', 'Jest', 'Cypress', 'Docker', 'CI/CD', 'Lighthouse']),
('Design & Backend', ARRAY['Tailwind CSS', 'Material UI', 'Figma', 'SQL', 'SSO', 'Azure (AZ-900)']);

-- Insert Language proficiency
INSERT INTO languages (name, level) VALUES
('English', 'Upper-Intermediate (B2) - Daily working language'),
('German', 'Pre-Intermediate (A2) - Currently attending intensive courses'),
('Ukrainian / Russian', 'Native');