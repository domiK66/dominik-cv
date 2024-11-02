import { useEffect, useState } from "react";

import img from "/img.png";

import { TranslationProvider, useTranslation } from "./TranslationContext";

import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

import { ReactTyped } from "react-typed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Skill = {
  name: string;
  value: number;
};

function AppContent() {
  const { t } = useTranslation();
  const [color, setColor] = useState("#00ffff");

  useEffect(() => {
    document.documentElement.style.setProperty("--mainColor", color);
    const rgb = hexToRgb(color);
    document.documentElement.style.setProperty(
      "--mainColor-rgb",
      `${rgb.r}, ${rgb.g}, ${rgb.b}`
    );
    console.log(color);
  }, [color]);

  function hexToRgb(hex: string) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

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
      <div
        className="flex fixed border right-4 rounded-xl backdrop-blur bottom-4 z-10 overflow-hidden"
        style={{
          backgroundColor: "rgba(var(--mainColor-rgb), 0.25)",
          borderColor: "var(--mainColor)",
        }}
      >
        <button
          onClick={() => setColor("#ff0000")} // Red
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#ff0000" ? "bg-mainColor text-black" : ""
          }`}
        >
          R
        </button>
        <button
          onClick={() => setColor("#00ff00")} // Green
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#00ff00" ? "bg-mainColor text-black" : ""
          }`}
        >
          G
        </button>
        <button
          onClick={() => setColor("#0000ff")} // Blue
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#0000ff" ? "bg-mainColor text-black" : ""
          }`}
        >
          B
        </button>
        <button
          onClick={() => setColor("#00ffff")} // Cyan
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#00ffff" ? "bg-mainColor text-black" : ""
          }`}
        >
          C
        </button>
        <button
          onClick={() => setColor("#ff00ff")} // Magenta
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#ff00ff" ? "bg-mainColor text-black" : ""
          }`}
        >
          M
        </button>
        <button
          onClick={() => setColor("#ffff00")} // Yellow
          className={`border border-transparent hover:border-mainColor box-border hover:underline p-1 ${
            color === "#ffff00" ? "bg-mainColor text-black" : ""
          }`}
        >
          Y
        </button>
      </div>

      <div className="mx-8">
        <div className="lg:flex mt-36">
          <div className="lg:w-1/3 flex justify-center items-center">
            <img
              src={img}
              className="rounded-full border-4 border-gray-200 lg:w-1/2 md:w-1/2 w-1/2"
            />
          </div>
          <div className="lg:w-2/3 flex justify-center items-center lg:justify-start">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Dipl.-Ing.</p>
              <h1 className="text-[80px] font-semibold text-customColor leading-none">
                Dominik Kainz
              </h1>
              <span className="text-[32px] inline pr-4 text-mainColor">
                ~$:{" "}
                <ReactTyped
                  strings={[
                    "Software Developer",
                    "Web Developer",
                    "Mobile App Developer",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  className="text-[24px] text-mainColor inline"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex mt-10">
          <div className="lg:w-1/3 items-center flex flex-col ">
            <div>
              <p className="pt-4">
                <FontAwesomeIcon icon={faEarthEurope} /> {t.location}
              </p>
              <p className="pt-6">{t.bornIn}</p>
              <p className="pt-2">
                <FontAwesomeIcon icon={faCakeCandles} /> {t.birthday}
              </p>
            </div>

            <div className="mt-20 flex justify-around flex-col md:flex-row">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "rgba(var(--mainColor-rgb), 0.25)",
                  backdropFilter: "blur(10px)",
                }}
                className="text-white px-4 py-2 rounded-full border border-mainColor hover:bg-opacity-25 hover:border-white m-2 hover:underline"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a
                style={{
                  backgroundColor: "rgba(var(--mainColor-rgb), 0.25)",
                  backdropFilter: "blur(10px)",
                }}
                href="mailto:your-email@example.com"
                className="text-white px-4 py-2 rounded-full  border border-mainColor hover:bg-opacity-25 hover:border-white m-2 hover:underline"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a
                style={{
                  backgroundColor: "rgba(var(--mainColor-rgb), 0.25)",
                  backdropFilter: "blur(10px)",
                }}
                href="mailto:your-email@example.com"
                className="text-white px-4 py-2 rounded-full border border-mainColor hover:bg-opacity-25 hover:border-white m-2 hover:underline"
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </div>
          </div>
          <div className="lg:w-2/3 items-center justify-center lg:pt-0">
            <AboutMe />
          </div>
        </div>
        <div className="lg:flex flex-col-reverse flex lg:flex-row">
          <div className="lg:w-1/3 pt-32 flex flex-col items-center">
            <p className="text-[24px] font-semibold pt-8">{t.languages}</p>
            <ul className="list-disc list-inside mt-2 list-mainColor">
              <li>German (Native proficiency)</li>
              <li>English (Professional working proficiency)</li>
            </ul>
            <p className="text-[24px] font-semibold pt-32">{t.skills}</p>
            <div className="w-1/2 pt-4">
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
          <div className="lg:w-2/3">
            <Education />
            <WorkExperience />
          </div>
        </div>
      </div>
      <footer className="border-t mt-20 flex flex-col justify-center items-center border-mainColor">
        <p className="mt-10">
          This page was created with Vite + React + TailwindCSS + Vercel
        </p>
        <p className="mb-10">
          Copyright © {new Date().getFullYear()} Dominik Kainz
        </p>
      </footer>
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
