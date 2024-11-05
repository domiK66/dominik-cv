import {
  faReact,
  faAngular,
  faPython,
  faGitlab,
  faDocker,
  faFigma,
  faGolang,
  faHtml5,
  faCss3,
  faMagento,
  faPhp,
  faJava,
  faJenkins,
  faWordpress,
  faLinux,
  faBootstrap,
  faWindows,
  faJs,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type WorkBlockProps = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  location: string;
  list?: string[];
  skills?: string[];
};

export default function WorkBlock(props: WorkBlockProps) {
  return (
    <>
      <div className="flex justify-between mt-8">
        <p className="lg:text-[20px] text-md font-bold">{props.title}</p>
        <p className="lg:text-[20px] text-sm text-mainColor text-right">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-mainColor mt-4 text-sm">{props.subtitle}</p>
        <p>{props.location}</p>
      </div>
      {props.list && (
        <ul className="list-disc list-outside mt-2 list-mainColor text-sm pl-4">
          {props.list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {props.skills && (
        <div className="flex flex-wrap mt-4 text-sm">
          {props.skills?.map((skill, index) => (
            <p
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

              {" " + skill}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
