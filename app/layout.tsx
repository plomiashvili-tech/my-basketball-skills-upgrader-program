import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Basketball Skills Upgrader — train smart, ages 7 and up",
  description:
    "Step-by-step basketball training for kids and youth. Beginners start at Lesson 0, experienced players get flexible upgrade tracks. Parents follow progress on a clean dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
