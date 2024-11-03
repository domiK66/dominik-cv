import {
  faUser,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";

export default function Navigation() {
  const { t, language, setLanguage } = useTranslation();

  return (
    <div className="w-full justify-center items-center flex hidden-for-pdf">
      <nav
        className="fixed border rounded-xl p-0.5 top-4 border-mainColor z-10 overflow-hidden backdrop-blur"
        style={{
          backgroundColor: "rgba(var(--mainColor-rgb), 0.40)",
          borderColor: "var(--mainColor)",
        }}
      >
        <ul className="flex space-x-1">
          <li className="border border-transparent hover:underline rounded-md p-0.5 box-border">
            <a href="#about-me">
              <FontAwesomeIcon icon={faUser} /> {t.aboutMe}
            </a>
          </li>
          <li className="border border-transparent hover:underline rounded-md p-0.5 box-border">
            <a href="#education">
              <FontAwesomeIcon icon={faGraduationCap} /> {t.education}
            </a>
          </li>
          <li className="border border-transparent hover:underline rounded-md p-0.5 box-border">
            <a href="#work-experience">
              <FontAwesomeIcon icon={faBriefcase} /> {t.workExperience}
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="flex fixed border rounded-xl border-mainColor z-10 top-4 overflow-hidden right-4 lg:visible invisible backdrop-blur"
        style={{
          backgroundColor: "rgba(var(--mainColor-rgb), 0.40)",
          borderColor: "var(--mainColor)",
        }}
      >
        {" "}
        <button
          onClick={() => setLanguage("de")}
          className={`border border-transparent box-border p-1 hover:underline ${
            language === "de" ? "bg-mainColor text-black" : ""
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`border border-transparent box-border p-1 hover:underline  ${
            language === "en" ? "bg-mainColor text-black" : ""
          }`}
        >
          EN
        </button>
      </div>
      <div
        className="flex fixed border rounded-xl border-mainColor z-10 bottom-4 overflow-hidden visible lg:invisible left-4 backdrop-blur"
        style={{
          backgroundColor: "rgba(var(--mainColor-rgb), 0.40)",
          borderColor: "var(--mainColor)",
        }}
      >
        <button
          onClick={() => setLanguage("de")}
          className={`border border-transparent box-border p-1 hover:underline ${
            language === "de" ? "bg-mainColor text-black" : ""
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`border border-transparent box-border p-1 hover:underline  ${
            language === "en" ? "bg-mainColor text-black" : ""
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
