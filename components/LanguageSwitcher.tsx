"use client";

import { useTranslation } from "./LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "en"
            ? "bg-court-500 text-slate-950"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ka")}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "ka"
            ? "bg-court-500 text-slate-950"
            : "text-white/60 hover:text-white"
        }`}
      >
        ქარ
      </button>
    </div>
  );
}
