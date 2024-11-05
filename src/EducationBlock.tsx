import {
  faAngular,
  faDocker,
  faFigma,
  faGitlab,
  faGolang,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "./TranslationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type EducationBlockProps = {
  title: string;
  study?: string;
  startDate: string;
  endDate: string;
  list?: string[];
  skills?: string[];
};

export default function EducationBlock(props: EducationBlockProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between mt-8">
        <p className="lg:text-[20px] text-md font-bold">{props.title}</p>
        <p className="lg:text-[20px] text-sm text-mainColor text-right">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      {props.study && (
        <p className="text-mainColor mt-4 text-sm">
          {t.study}: {props.study}
        </p>
      )}
      {props.list && (
        <ul className="list-disc list-outside mt-2 list-mainColor text-sm pl-4">
          {props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {props.skills && (
        <div className="flex flex-wrap mt-4 text-sm">
          {props.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm"
            >
              {skill == "React" && <FontAwesomeIcon icon={faReact} />}
              {skill == "Angular" && <FontAwesomeIcon icon={faAngular} />}
              {skill == "Python" && <FontAwesomeIcon icon={faPython} />}
              {skill == "GitLab" && <FontAwesomeIcon icon={faGitlab} />}
              {skill == "Docker" && <FontAwesomeIcon icon={faDocker} />}
              {skill == "Figma" && <FontAwesomeIcon icon={faFigma} />}
              {skill == "GoLang" && <FontAwesomeIcon icon={faGolang} />}
              {" " + skill}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
