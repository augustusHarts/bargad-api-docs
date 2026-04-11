import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bargad API Docs",
  description: "API Documentation for Bargad API",
};

export default function ApiDocsLayout({ children }) {
  return (
    <section className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </section>
  );
}