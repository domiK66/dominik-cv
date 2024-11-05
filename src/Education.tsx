import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import EducationBlock from "./EducationBlock";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.education}</h1>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">FH Joanneum</p>
        <p className="text-mainColor text-sm">
          Alte Poststraße 149, 8020 Graz A
        </p>
        <p className="underline text-sm">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.fh-joanneum.at" target="_blank" rel="noreferrer">
            fh-joanneum.at
          </a>
        </p>
        <EducationBlock
          title={"Diplom Ingenieur (Dipl.-Ing.)"}
          study={
            "Business Informatics - Software and Digital Experience Engineering"
          }
          startDate={`${t.oct} 2022`}
          endDate={`${t.oct} 2024`}
          list={[t.master1, t.master2, t.master3]}
          skills={[
            "React",
            "TypeScript",
            "Python",
            "C#",
            "Kubernetes",
            "Docker",
            "GitLab",
            "Parallel Programming",
            "Figma",
          ]}
        />
        <EducationBlock
          title="Bachelor of Science in Engineering (BSc.)"
          study="Informationsmanagement"
          startDate="Sep 2019"
          endDate="Jul 2022"
          list={[t.bachelor1, t.bachelor2, t.bachelor3]}
          skills={[
            "Angular",
            "TypeScript",
            "GoLang",
            "Python",
            "Kotlin",
            "Kubernetes",
            "DevOps",
          ]}
        />
        <div className="mt-8 w-full">
          <hr></hr>
          <p className="text-[24px] font-semibold mt-8">
            BRG/BORG Wolfsberg (AHS)
          </p>
          <p className="text-mainColor text-sm">
            Gartenstraße 1, 9400 Wolfsberg A
          </p>
          <p className="underline text-sm">
            <FontAwesomeIcon icon={faLink} />{" "}
            <a
              href="https://www.borg-wolfsberg.at"
              target="_blank"
              rel="noreferrer"
            >
              borg-wolfsberg.at
            </a>
          </p>
          <EducationBlock
            title={t.upperGrade}
            startDate="Sep 2014"
            endDate="Jul 2018"
          />
          <EducationBlock
            title={t.lowerGrade}
            startDate="Sep 2010"
            endDate="Jul 2014"
          />
        </div>
        <div className="mt-8 w-full">
          <hr></hr>
          <p className="text-[24px] font-semibold mt-8">
            Volksschule Wolfsberg
          </p>
          <p className="text-mainColor text-sm">
            Hans-Scheiber-Straße 2, 9400 Wolfsberg A
          </p>
          <p className="underline text-sm">
            <FontAwesomeIcon icon={faLink} />{" "}
            <a
              href="https://vs-wolfsberg.ksn.at/"
              target="_blank"
              rel="noreferrer"
            >
              vs-wolfsberg.ksn.at
            </a>
          </p>
        </div>
        <EducationBlock
          title={t.elementarySchool}
          startDate="Sep 2006"
          endDate="Jul 2010"
        />
      </div>
    </section>
  );
}
