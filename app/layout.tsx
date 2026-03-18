import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_NAME} | ${process.env.NEXT_PUBLIC_ROLE}`,
  description: `${process.env.NEXT_PUBLIC_ROLE} based in ${process.env.NEXT_PUBLIC_LOCATION}. Specialist in React and Enterprise architecture.`,
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_NAME} - Portfolio`,
    description: `Professional experience and projects.`,
    images: [{ url: '/cv1024x1024.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}