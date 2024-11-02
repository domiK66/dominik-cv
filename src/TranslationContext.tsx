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
    bornIn: "Born in Wolfsberg, Carinthia Austria",
    birthday: "15th October 1999 (25 years old)",
    bio1: "I am a recent computer science master's graduate with a strong passion for developing webpages, web applications, mobile applications, APIs, and other digital solutions. With experience in building single-page applications using TypeScript in React and Angular during my studies and internships, I am eager to start my career as a Software Developer, driven by the excitement of turning ideas into functional products.",
    bio2: "My journey in web development began at 17 when I created my first homepage while learning HTML, CSS, and JavaScript. Since then, I have developed various websites, including an online store for bath furniture and plumbing , which I built with my younger brother. This project equipped me with a broad skill set encompassing web design, content management, marketing, product development, SEO, and data management. My proficiency in Photoshop has also been valuable for crafting custom graphics and layouts.",
    bio3: "At FH Joanneum, I expanded my knowledge in entrepreneurship, process management, software development, IT architecture, interface design, databases, and business analytics. This academic background, combined with self-taught skills, enhanced my expertise in web development. I am proficient in multiple programming languages and enjoy working collaboratively in team environments. I am skilled in problem-solving, particularly when tackling technical challenges, thanks to my deep understanding of core technologies.",
    bio4: "Through my thesis work, I developed an interest in DevOps, which has enriched my approach to software engineering. I aspire to become a Full Stack Developer and am excited by emerging trends such as 3D web development, bringing a creative mindset that adds value to any team.",
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
    bornIn: "Geboren in Wolfsberg, Kärnten Österreich",
    birthday: "15. Oktober 1999 (25 Jahre alt)",
    bio1: "Ich bin ein kürzlich graduierter Masterabsolvent in Informatik mit einer Leidenschaft für die Entwicklung von Webseiten, Webanwendungen, mobilen Anwendungen, APIs und anderen digitalen Lösungen. Während meines Studiums und meiner Praktika habe ich Erfahrung im Aufbau von Single-Page-Anwendungen mit TypeScript in React und Angular gesammelt und freue mich darauf, meine Karriere als Softwareentwickler zu starten, angetrieben von der Begeisterung, Ideen in funktionierende Produkte umzusetzen.",
    bio2: "Meine Reise in der Webentwicklung begann im Alter von 17 Jahren, als ich meine erste Homepage erstellte und HTML, CSS und JavaScript lernte. Seitdem habe ich eine Vielzahl von Webanwendungen entwickelt, darunter eine Onlineshop für Badezimmereinrichtungen und Installation, die ich gemeinsam mit meinem jüngeren Bruder aufgebaut habe. Dieses Projekt hat mir eine umfassende Kompetenz in den Bereichen Webdesign, Content-Management, Marketing, Produktentwicklung, SEO und Datenverarbeitung verschafft. Meine Kenntnisse in Photoshop haben sich ebenfalls als wertvoll erwiesen, um individuelle Grafiken und Layouts zu gestalten.",
    bio3: "An der FH Joanneum habe ich mein Wissen in den Bereichen Entrepreneurship, Prozessmanagement, Softwareentwicklung, IT-Architektur, Interface-Design, Datenbanken und Business Analytics erweitert. Diese akademische Ausbildung, kombiniert mit meinen selbstständig erarbeiteten Fähigkeiten, hat meine Expertise in der Webentwicklung vertieft. Ich beherrsche mehrere Programmiersprachen und schätze die Zusammenarbeit in Teams. Dank meines fundierten Verständnisses von Kerntechnologien bin ich besonders geschickt im Lösen technischer Herausforderungen.",
    bio4: "Durch meine Arbeit an meiner Abschlussarbeit habe ich ein Interesse an DevOps entwickelt, das meinen Ansatz zur Softwareentwicklung bereichert hat. Ich strebe danach, Full-Stack-Entwickler zu werden und bin begeistert von neuen Trends wie der 3D-Webentwicklung, wobei ich eine kreative Denkweise einbringe, die jedem Team zugutekommt.",
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
