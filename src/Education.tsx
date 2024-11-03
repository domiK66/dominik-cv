import { faAngular } from "@fortawesome/free-brands-svg-icons/faAngular";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";
import {
  faPython,
  faDocker,
  faGitlab,
  faGolang,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.education}</h1>
      <div className="mt-8 w-full">
        <p className="text-[24px] font-semibold mt-8">FH Joanneum</p>
        <p className="underline">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.fh-joanneum.at" target="_blank" rel="noreferrer">
            fh-joanneum.at
          </a>
        </p>
        <p className="text-mainColor">Alte Poststraße 149, 8020 Graz</p>
        <div className="flex justify-between mt-8">
          <p className="text-[20px]">Diplom Ingenieur (Dipl.-Ing.)</p>
          <p className="text-[20px] text-mainColor text-right">
            {t.oct} 2022 - {t.oct} 2024
          </p>
        </div>
        <p className="text-mainColor">{t.study}: Business Informatics</p>
        <p className="text-mainColor">
          {t.focus}: Software and Digital Experience Engineering
        </p>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.master1}</li>
          <li>{t.master2}</li>
          <li>{t.master3}</li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faReact} /> React
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            TypeScript
          </span>

          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faPython} /> Python
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            C#
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Kubernetes
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faDocker} /> Docker
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faGitlab} /> GitLab
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Parallel Programming
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faFigma} /> Figma
          </span>
        </div>
        <div className="flex justify-between mt-8">
          <p className="text-[20px]">
            Bachelor of Science in Engineering (BSc.)
          </p>
          <p className="text-[20px] text-mainColor text-right">
            Sep 2019 - Jul 2022
          </p>
        </div>
        <p className="text-mainColor">{t.study}: Informationsmanagement</p>

        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.bachelor1}</li>
          <li>{t.bachelor2}</li>
          <li>{t.bachelor3}</li>
        </ul>

        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faAngular} /> Angular
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            TypeScript
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faGolang} /> GoLang
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faPython} /> Python
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Kotlin
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Kubernetes
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            DevOps
          </span>
        </div>
        <div className="mt-8 w-full">
          <hr></hr>
          <p className="text-[24px] font-semibold mt-8">
            BRG/BORG Wolfsberg (AHS)
          </p>
          <p className="underline">
            <FontAwesomeIcon icon={faLink} />{" "}
            <a
              href="https://www.borg-wolfsberg.at"
              target="_blank"
              rel="noreferrer"
            >
              borg-wolfsberg.at
            </a>
          </p>

          <p className="text-mainColor">Gartenstraße 1, 9400 Wolfsberg A</p>

          <div className="flex justify-between mt-8">
            <p className="text-[20px]">{t.upperGrade}</p>
            <p className="text-[20px] text-mainColor text-right">
              Sep 2014 - Jul 2018
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[20px]">{t.lowerGrade}</p>
            <p className="text-[20px] text-mainColor text-right">
              Sep 2010 - Jul 2014
            </p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <hr></hr>
          <p className="text-[24px] font-semibold mt-8">VS1 Wolfsberg</p>
          <p className="underline">
            <FontAwesomeIcon icon={faLink} />{" "}
            <a
              href="https://vs-wolfsberg.ksn.at/"
              target="_blank"
              rel="noreferrer"
            >
              vs-wolfsberg.ksn.at
            </a>
          </p>
          <p className="text-mainColor">
            Hans-Scheiber-Straße 2, 9400 Wolfsberg A
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <p className="text-[20px]">{t.elementarySchool}</p>
          <p className="text-[20px] text-mainColor text-right">
            Sep 2006 - Jul 2010
          </p>
        </div>
      </div>
    </section>
  );
}
