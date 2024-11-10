import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faFigma,
  faGitlab,
  faGolang,
  faGoogle,
  faHtml5,
  faJava,
  faJenkins,
  faJs,
  faLinux,
  faMagento,
  faPhp,
  faPython,
  faReact,
  faUnity,
  faWindows,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "./TranslationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

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
              {skill == "GitLab CI/CD" && <FontAwesomeIcon icon={faGitlab} />}
              {skill == "Docker" && <FontAwesomeIcon icon={faDocker} />}
              {skill == "Figma" && <FontAwesomeIcon icon={faFigma} />}
              {skill == "GoLang" && <FontAwesomeIcon icon={faGolang} />}
              {skill == "HTML" && <FontAwesomeIcon icon={faHtml5} />}
              {skill == "CSS" && <FontAwesomeIcon icon={faCss3} />}
              {skill == "Magento 2" && <FontAwesomeIcon icon={faMagento} />}
              {skill == "PHP" && <FontAwesomeIcon icon={faPhp} />}
              {skill == "Jenkins" && <FontAwesomeIcon icon={faJenkins} />}
              {skill == "Java" && <FontAwesomeIcon icon={faJava} />}
              {skill == "Wordpress" && <FontAwesomeIcon icon={faWordpress} />}
              {skill == "Linux Server" && <FontAwesomeIcon icon={faLinux} />}
              {skill == "Bootstrap" && <FontAwesomeIcon icon={faBootstrap} />}
              {skill == "Windows Server" && (
                <FontAwesomeIcon icon={faWindows} />
              )}
              {skill == "JavaScript" && <FontAwesomeIcon icon={faJs} />}
              {skill == "Google Analytics" && (
                <FontAwesomeIcon icon={faGoogle} />
              )}
              {skill == "Exchange Server" && (
                <FontAwesomeIcon icon={faEnvelope} />
              )}
              {skill == "DNS Administration" && (
                <FontAwesomeIcon icon={faGlobe} />
              )}
              {skill == "Network Administration" && (
                <FontAwesomeIcon icon={faNetworkWired} />
              )}
              {skill == "Unity" && <FontAwesomeIcon icon={faUnity} />}
        
              {" " + skill}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
