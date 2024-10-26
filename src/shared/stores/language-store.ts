/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import locales from "@/shared/locales";
import { create } from "zustand";

interface ILanguageStore {
  language: TypeLanguage;
  translations: Record<string, Record<string, any>>;
  setLanguage: (lang: TypeLanguage) => void;
  switchLanguage(): void;
  $t: <T>(key: string, ns: string) => T;
  init(): void;
}

export const useLanguageStore = create<ILanguageStore>()((set, get) => ({
  language:
    typeof window !== "undefined" && localStorage.getItem("lang")
      ? (JSON.parse(localStorage.getItem("lang")!) as TypeLanguage)
      : "en",
  translations: locales,
  setLanguage: (lang: TypeLanguage) => {
    set({ language: lang });
    if (typeof window !== "undefined") {
      document.body?.setAttribute("class", lang);
      localStorage.setItem("lang", JSON.stringify(lang));
    }
  },
  switchLanguage: () => {
    const currentLanguage = get().language;
    const newLanguage =
      currentLanguage === "en" ? "ru" : currentLanguage === "ru" ? "kg" : "en";
    get().setLanguage(newLanguage);
  },
  $t: (key, ns) => {
    const lang = get().language;
    const translation = get().translations[lang]?.[ns];
    return (
      key.split(".").reduce((res, part) => res?.[part], translation) || key
    );
  },
  init: () => {
    if (typeof window !== "undefined") {
      document.body?.setAttribute("class", get().language);
    }
  },
}));
