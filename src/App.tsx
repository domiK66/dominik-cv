import { useContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import img from "./assets/img.png";
import "./App.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCakeCandles,
  faEarthEurope,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TranslationProvider, useTranslation } from "./TranslationContext";
import Navigation from "./Navigation";

type Skill = {
  name: string;
  value: number;
};

function AppContent() {
  const { t, language, setLanguage } = useTranslation();

  const [count, setCount] = useState(0);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const skills: Skill[] = [
    { name: "Communication", value: 70 },
    { name: "Problem Solving", value: 75 },
    { name: "Collaboration", value: 85 },
    { name: "Creativity", value: 85 },
    { name: "Patience", value: 70 },
    { name: "Adaptability", value: 60 },
  ];

  return (
       <>
      <Navigation />
      <div className="flex space-x-2 fixed border rounded-xl p-1 top-4 bg-mainColor bg-opacity-15 backdrop-blur">
        <button
          onClick={() => setLanguage("en")}
          className={`p-1 rounded ${
            language === "en" ? "bg-mainColor text-white" : ""
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("de")}
          className={`p-1 rounded ${
            language === "de" ? "bg-mainColor text-white" : ""
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-1 rounded bg-mainColor text-white"
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      <div className="w-full mt-20">
        <div className="lg:flex">
          <div className="lg:w-1/4 m-16 lg:mr-8">
            <div className="w-full items-center justify-center flex flex-col">
              <img
                src={img}
                className="rounded-full w-64 h-64 border-4 border-gray-200"
              />
              <p className="pt-8">
                <FontAwesomeIcon icon={faEarthEurope} /> {t.location}
              </p>
              <p className="pt-8">
                <FontAwesomeIcon icon={faCakeCandles} /> 15. Oktober 1999
              </p>
              <p className="">25 Years old</p>
              <p className="">Born in Wolfsberg, Carinthia Austria</p>
              <p className="pt-8">Staatsbürgerschaft: Österreich</p>

              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-8 px-4 py-2 rounded-full bg-mainColor bg-opacity-15 backdrop-blur border border-mainColor hover:bg-opacity-25 hover:border-white"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-white mt-4 px-4 py-2 rounded-full bg-mainColor bg-opacity-15 backdrop-blur border border-mainColor hover:bg-opacity-25 hover:border-white"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-white mt-4 px-4 py-2 rounded-full bg-mainColor bg-opacity-15 backdrop-blur border border-mainColor hover:bg-opacity-25 hover:border-white"
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </div>
            <p className="text-[24px] font-semibold pt-8">{t.languages}</p>
            <p>German (Native proficiency)</p>
            <p>English (Professional working proficiency)</p>

            <p className="text-[24px] font-semibold pt-8">{t.skills}</p>
            <div className="w-full">
              {skills.map((skill: Skill, i: number) => (
                <div key={i} className="mb-4">
                  <label className="block text-lg font-medium">
                    {skill.name}
                  </label>
                  <div className="flex">
                    <meter
                      value={skill.value}
                      className="w-full"
                      min="0"
                      max="100"
                    />
                    <p className="ml-4">{skill.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/4 m-16 ml-8">
            <AboutMe />
            <Education />
            <WorkExperience />
          </div>
        </div>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}

export default App;
