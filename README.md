# Senior Frontend Engineer Portfolio — Yurii Volik

A high-performance, minimalist portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project is architected to showcase a Senior-level career path, specifically optimized for the DACH (Germany, Austria, Switzerland) tech market.

## 🚀 Tech Stack

- **Framework:** React 19 (Strict Mode)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/postcss`)
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## ✨ Key Engineering Highlights

- **Timeline Architecture:** A custom-built, scalable experience timeline that handles complex project nesting (e.g., Hearst Magazines & Yomobile under a single agency period).
- **Environment-Driven Security:** All personal contact details are managed strictly via environment variables (`.env`), ensuring no sensitive data is leaked to public repositories.
- **Atomic UI Components:** Modular architecture using a custom UI Kit (e.g., `SectionHeading` with integrated Lucide icons).
- **Performance Optimized:** Leverages Tailwind v4's modern CSS engine and optimized assets for near-perfect Lighthouse scores.
- **Accessibility:** Built with WCAG principles in mind, focusing on semantic HTML and ARIA standards.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [your-repo-url]
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory. Use `.env.example` as a template:
   ```env
   VITE_NAME="Yurii Volik"
   VITE_ROLE="Senior Frontend Engineer"
   VITE_LOCATION="Switzerland"
   VITE_EMAIL="volik.ua@gmail.com"
   VITE_PHONE="+41..."
   VITE_LINKEDIN="https://linkedin.com/in/yuriivolik"
   VITE_GITHUB="https://github.com/yuriivolik"
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── assets/             # Global assets (Profile photo, etc.)
├── components/         # React components
│   └── ui/             # Reusable UI-kit (SectionHeading.tsx)
├── data.ts             # Centralized resume data (Experience, Skills, Education)
├── App.tsx             # Main layout orchestration
├── main.tsx            # Entry point
└── index.css           # Tailwind v4 entry point
```

## 🌍 Deployment

The project is pre-configured for **Vercel**. 
**Important:** When deploying, manually add all `VITE_*` environment variables in the Vercel Dashboard under **Project Settings > Environment Variables**.

---
*Built with React, Tailwind v4 and precision.*
