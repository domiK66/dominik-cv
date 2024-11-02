import { createContext, useState, useEffect, useContext } from "react";

const TranslationContext = createContext({
  t: {} as { [key: string]: string },
  language: "en",
  setLanguage: (language: "en" | "de") => {},
});

const translations = {
  en: {
    aboutMe: "About Me",
    education: "Education",
    workExperience: "Work Experience",
    skills: "Skills",
    projects: "Projects",
    location: "Graz, Styria, Austria",
    languages: "Languages",
    german: "German (Native proficiency)",
    english: "English (Professional working proficiency)",
    linkedIn: "LinkedIn",
    email: "Email",
    github: "GitHub",
  },
  de: {
    aboutMe: "Über mich",
    education: "Ausbildung",
    workExperience: "Berufserfahrung",
    skills: "Fähigkeiten",
    projects: "Projekte",
    location: "Graz, Steiermark, Österreich",
    languages: "Sprachen",
    german: "Deutsch (Muttersprache)",
    english: "Englisch (Berufliche Kenntnisse)",
    linkedIn: "LinkedIn",
    email: "E-Mail",
    github: "GitHub",
  },
};

import { ReactNode } from "react";

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  type Language = "en" | "de";
  const [language, setLanguage] = useState<Language>("de");

  const t = translations[language];

  // get the language from browser settings

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
