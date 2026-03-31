# Senior Frontend Engineer Portfolio — Yurii Volik

A high-performance, minimalist portfolio website built with **Next.js 16 (Canary)**, **React 19**, and **Tailwind CSS v4**. This project is architected for the DACH (Germany, Austria, Switzerland) tech market, emphasizing performance, accessibility, and modern server-side patterns.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19 (Strict Mode)
- **Database & Auth:** Supabase
- **Styling:** Tailwind CSS v4 (using @tailwindcss/postcss)
- **Content:** MDX (via next-mdx-remote)
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Key Engineering Highlights

- **Data Fetching & Caching (ISR):** Implemented **Incremental Static Regeneration**. The portfolio fetches data from Supabase and caches it for 1 hour (`revalidate: 3600`), ensuring lightning-fast response times while keeping the content fresh without manual rebuilds.
- **Timeline Architecture:** A custom-built, scalable experience timeline that handles complex project nesting (e.g., Hearst Magazines & Yomobile under a single agency period).
- **Environment-Driven Security:** Personal contact details and API keys are managed strictly via environment variables, ensuring no sensitive data is leaked to public repositories.
- **Modern CSS Engine:** Leverages Tailwind v4's new engine for a significantly smaller CSS footprint and faster build times.
- **A11y & Performance:** Optimized for Core Web Vitals and WCAG 2.1 compliance, including keyboard-accessible modals and semantic HTML.

## 📊 Data Strategy

The project uses a tiered caching strategy to minimize Supabase API calls:

1. **Server-Side Fetching:** Data is fetched directly from Supabase on the server.
2. **Global Revalidation:** Uses `export const revalidate = 3600` to refresh the entire page state every hour.
3. **Optimized Metadata:** SEO and OpenGraph data are generated dynamically but benefit from the same cache layer.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:yvolikcpcs/aboutme.git
   cd aboutme
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file using `env.example` as a template:
   ```env
   NEXT_PUBLIC_NAME="Yurii Volik"
   NEXT_PUBLIC_ROLE="Senior Frontend Engineer"
   NEXT_PUBLIC_LOCATION="Switzerland"
   NEXT_PUBLIC_EMAIL="..."
   SUPABASE_URL="..."
   SUPABASE_ANON_KEY="..."
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `app/` — Next.js App Router (Pages, Layouts, Global Styles).
- `components/` — React components and UI-kit (Modals, SectionHeadings).
- `lib/` — Database clients and Supabase fetching logic.
- `supabase/` — SQL migrations and local configuration.
- `types/` — TypeScript definitions for database schema.

## 🌍 Deployment

The project is pre-configured for **Vercel**. During deployment, ensure all `NEXT_PUBLIC_*` and `SUPABASE_*` environment variables are added to the Vercel Dashboard to enable ISR during the build process.

---
*Built with React 19, Next.js and precision.*
