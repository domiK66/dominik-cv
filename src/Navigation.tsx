import {
  faUser,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <div className="w-full justify-center items-center flex">
      <nav className="fixed border rounded-xl p-1 top-4 bg-mainColor bg-opacity-15 backdrop-blur">
        <ul className="flex space-x-1">
          <li className="border border-transparent hover:border-mainColor rounded-md p-1 box-border">
            <a href="#about-me">
              <FontAwesomeIcon icon={faUser} /> {t.aboutMe}
            </a>
          </li>
          <li className="border border-transparent hover:border-mainColor rounded-md p-1 box-border">
            <a href="#education">
              <FontAwesomeIcon icon={faGraduationCap} /> {t.education}
            </a>
          </li>
          <li className="border border-transparent hover:border-mainColor rounded-md p-1 box-border">
            <a href="#work-experience">
              <FontAwesomeIcon icon={faBriefcase} /> {t.workExperience}
            </a>
          </li>
          <li className="border border-transparent hover:border-mainColor rounded-md p-1 box-border">
            <a href="#projects">P - Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
