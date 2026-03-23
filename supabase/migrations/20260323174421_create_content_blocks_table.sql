DROP TABLE IF EXISTS content_blocks;

-- 1. Create content_blocks table for key-value text storage
-- This table supports MDX/Markdown strings for dynamic UI sections
CREATE TABLE content_blocks (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;

-- 3. Define public read-only access policy
-- Allows the frontend to fetch content without authentication
CREATE POLICY "Allow public read access" 
ON content_blocks 
FOR SELECT 
USING (true);

-- 4. Seed initial introduction data
-- Use MDX-ready strings to support formatting in the Introductions component
INSERT INTO content_blocks (key, value) VALUES 
('intro_hero', '**Senior Frontend Engineer** with **15 years** of experience in **React, Next.js, and TypeScript**. Working through Custom PC Software **since 2011**, I have delivered high-traffic solutions for global clients like **Hearst Magazines** (10M+ users). I focus on technical architecture, data-driven optimizations, and integrating complex analytics systems. My work centers on performance (**Core Web Vitals**), **WCAG** accessibility, and building maintainable web ecosystems. Currently based in Switzerland.');