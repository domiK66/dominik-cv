import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import translations from "./translations.json";

const TranslationContext = createContext({
  t: {} as { [key: string]: string },
  language: "en",
  setLanguage: {} as (language: "en" | "de") => void,
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  type Language = "en" | "de";
  const [language, setLanguage] = useState<Language>("de");

  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
