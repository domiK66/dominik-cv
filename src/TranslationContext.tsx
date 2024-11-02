import { createContext, useState, useContext } from "react";

const TranslationContext = createContext({
  t: {} as { [key: string]: string },
  language: "en",
  setLanguage: {} as (language: "en" | "de") => void,
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
    study: "Study",
    focus: "Focus",
    master1:
      "Gained expertise in modern software engineering, covering system design, implementation, quality assurance, and operations, using advanced development paradigms.",
    master2:
      "Gained comprehensive technical and design skills for crafting user-centric digital experiences.",
    master3:
      "Acquired entrepreneurial, business, and legal skills essential for IT management and nurtured an entrepreneurial mindset and personal development.",
    bachelor1:
      "Built a strong foundation in computer science, network technology, and IT security, gaining expertise in cloud computing and optimized data management solutions.",
    bachelor2:
      "Acquired skills in software development and multimedia engineering, mastering programming, and applying creativity to commercial and technical projects.",
    bachelor3:
      "Developed a deep understanding of the principles of business administration, economics, and law, and acquired the ability to apply them in practice.",
    upperGrade: "Upper Grade & Matura",
    lowerGrade: "Lower Grade",
    elementarySchool: "Elementary School",
    oct: "Oct",
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
    study: "Studium",
    focus: "Schwerpunkt",
    master1:
      "Erlangung von Fachkenntnissen in der modernen Softwareentwicklung, einschließlich Systementwurf, Implementierung, Qualitätssicherung und Betrieb, unter Verwendung fortschrittlicher Entwicklungsparadigmen.",
    master2:
      "Erlangung umfassender technischer und gestalterischer Fähigkeiten für die Gestaltung benutzerorientierter digitaler Erlebnisse.",
    master3:
      "Erwerb unternehmerischer, wirtschaftlicher und rechtlicher Fähigkeiten, die für das IT-Management unerlässlich sind, sowie Förderung des unternehmerischen Denkens und der persönlichen Entwicklung.",
    bachelor1:
      "Solide Grundlagen in Informatik, Netzwerktechnologie und IT-Sicherheit aufgebaut, Expertise in Cloud-Computing und optimierten Datenmanagementlösungen erworben.",

    bachelor2:
      "Erwerb von Kompetenzen in den Bereichen Softwareentwicklung und Multimedia-Engineering, Beherrschung der Programmierung und Anwendung von Kreativität auf kommerzielle und technische Projekte.",

    bachelor3:
      "Entwicklung eines umfassenden Verständnisses der betriebswirtschaftlichen, volkswirtschaftlichen und rechtlichen Grundsätze und Erwerb der Fähigkeit, diese in der Praxis anzuwenden.",

    upperGrade: "Oberstufe & Matura",
    lowerGrade: "Unterstufe",
    elementarySchool: "Volksschule",
    oct: "Okt",
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
