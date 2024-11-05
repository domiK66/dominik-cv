import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import WorkBlock from "./WorkBlock";

export default function WorkExperience() {
  const { t } = useTranslation();
  return (
    <section id="work-experience" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.workExperience}</h1>

      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">digitAAL Life GmbH</p>
        <WorkBlock
          title="Full Stack Developer"
          startDate="Jul 2022"
          endDate="Sep 2022"
          subtitle={`${t.ferialpraktikum} • ${t.fulltime}`}
          location={`${t.graz} (${t.onsite})`}
          list={[t.job11, t.job12]}
          skills={["Angular", "TypeScript", ".Net API", "C#", "Jenkins"]}
        />
      </div>

      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">Styria Media Group AG</p>
        <p className="underline text-sm">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.styria.com/" target="_blank" rel="noreferrer">
            styria.com
          </a>
        </p>
        <WorkBlock
          title="Infrastructure System Engineer"
          startDate="Apr 2022"
          endDate="Jun 2022"
          subtitle={`FH-${t.internship} • ${t.fulltime}`}
          location={`${t.graz} (${t.onsite})`}
          list={[t.job21, t.job22]}
          skills={[
            "Network Administration",
            "Linux Server",
            "Powershell",
            "Windows Server",
            "DNS Administration",
            "Exchange Server",
          ]}
        />
      </div>

      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">direktbad24.at GmbH</p>
        <p className="underline text-sm">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a
            href="https://www.direktbad24.at/"
            target="_blank"
            rel="noreferrer"
          >
            direktbad24.at
          </a>
        </p>
        <WorkBlock
          title="Frontend Web Developer"
          startDate="Jan 2019"
          endDate={`${t.mar} 2022`}
          subtitle={t.parttime}
          location={`${t.wolfsberg} (Remote)`}
          list={[t.job31, t.job32]}
          skills={[
            "Magento 2",
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Bootstrap",
          ]}
        />
        <WorkBlock
          title="E-Commerce Developer"
          startDate="Jun 2018"
          endDate={`${t.dec} 2018`}
          subtitle={t.fulltime}
          location={`${t.wolfsberg} (${t.onsite})`}
          list={[t.job41, t.job42]}
          skills={[
            "Magento 2",
            "PHP",
            "Linux Server",
            "SEO",
            "Google Analytics",
            "Content Management",
          ]}
        />
        <WorkBlock
          title="Webdesigner"
          startDate={`${t.oct} 2017`}
          endDate={`${t.may} 2018`}
          subtitle={t.parttime}
          location={`${t.wolfsberg} (Remote)`}
          list={[t.job51, t.job52]}
          skills={["Photoshop", "Wordpress", "Linux Server", "HTML", "CSS"]}
        />
      </div>

      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">Schwaiger BUSINESS_IT</p>
        <p className="underline text-sm">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://schwaiger-it.at" target="_blank" rel="noreferrer">
            schwaiger-it.at
          </a>
        </p>
        <WorkBlock
          title="IT Assistant"
          startDate="Jul 2017"
          endDate="Aug 2017"
          subtitle={`${t.ferialpraktikum} • ${t.fulltime}`}
          location={`${t.wolfsberg} (${t.onsite})`}
        />
      </div>

      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[24px] font-semibold mt-8">
          Landeskrankenanstalten-Betriebsgesellschaft - KABEG
        </p>
        <p className="underline text-sm">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.kabeg.at" target="_blank" rel="noreferrer">
            kabeg.at
          </a>
        </p>
        <WorkBlock
          title="Logistics Assistant"
          startDate="Jun 2016"
          endDate="Jul 2016"
          subtitle={`${t.ferialpraktikum} • ${t.fulltime}`}
          location={`${t.wolfsberg} (${t.onsite})`}
        />
      </div>
    </section>
  );
}
