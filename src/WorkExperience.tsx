import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function WorkExperience() {
  const { t } = useTranslation();
  return (
    <section id="work-experience" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.workExperience}</h1>
      <div className="mt-16 w-full">
        <p className="text-[25px] font-semibold">digitAAL Life GmbH</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Full Stack Developer</p>
          <p className="text-[20px] text-mainColor text-right">
            Jul 2022 - Sep 2022
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">
            {t.ferialpraktikum} • {t.fulltime}
          </p>
          <p>
            {t.graz} ({t.onsite})
          </p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.job11}</li>
          <li>{t.job12}</li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            C#
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Angular
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            .Net API
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Jenkins
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">Styria Media Group AG</p>
        <p className="underline">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.styria.com/" target="_blank" rel="noreferrer">
            styria.com
          </a>
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Infrastructure System Engineer</p>
          <p className="text-[20px] text-mainColor text-right">
            Apr 2022 - Jun 2022
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">
            FH-{t.internship} • {t.fulltime}
          </p>
          <p>
            {t.graz} ({t.onsite})
          </p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.job21}</li>
          <li>{t.job22}</li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Windows Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            DNS Administration
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Powershell Scripting
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Exchange Server
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">direktbad24.at GmbH</p>
        <p className="underline">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a
            href="https://www.direktbad24.at/"
            target="_blank"
            rel="noreferrer"
          >
            direktbad24.at
          </a>
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Frontend Web Developer</p>
          <p className="text-[20px] text-mainColor text-right">
            Jan 2019 - {t.mar} 2022
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">{t.parttime}</p>
          <p>{t.wolfsberg} (Remote)</p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.job31}</li>
          <li>{t.job32}</li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Magento 2
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            HTML, CSS & JavaScript
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            PHP
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Bootstrap
          </span>
        </div>

        <div className="flex justify-between mt-8">
          <p className="text-[20px]">Ecommerce Developer</p>
          <p className="text-[20px] text-mainColor text-right">
            Jun 2018 - {t.dec} 2018
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">{t.fulltime}</p>
          <p>
            {t.wolfsberg} ({t.onsite})
          </p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.job41}</li>
          <li>{t.job42}</li>
        </ul>

        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Magento 2
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            PHP
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            SEO
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Google Analytics
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Content Management
          </span>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Webdesigner</p>
          <p className="text-[20px] text-mainColor text-right">
            {t.oct} 2017 - {t.may} 2018
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">{t.parttime}</p>
          <p>{t.wolfsberg} (Remote)</p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>{t.job51}</li>
          <li>{t.job52}</li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Photoshop
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Wordpress
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full m-1 border border-gray-200 text-sm">
            HTML & CSS
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">Schwaiger BUSINESS_IT</p>
        <p className="underline">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://schwaiger-it.at" target="_blank" rel="noreferrer">
            schwaiger-it.at
          </a>
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">IT Assistant</p>
          <p className="text-[20px] text-mainColor text-right">
            Jul 2017 - Aug 2017
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">
            {t.ferialpraktikum} • {t.fulltime}
          </p>
          <p>
            {t.wolfsberg} ({t.onsite})
          </p>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">
          Landeskrankenanstalten-Betriebsgesellschaft - KABEG
        </p>
        <p className="underline">
          <FontAwesomeIcon icon={faLink} />{" "}
          <a href="https://www.kabeg.at" target="_blank" rel="noreferrer">
            kabeg.at
          </a>
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Logistics Assistant</p>
          <p className="text-[20px] text-mainColor text-right">
            Jun 2016 - Jun 2016
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">
            {t.ferialpraktikum} • {t.fulltime}
          </p>
          <p>
            {t.wolfsberg} ({t.onsite})
          </p>
        </div>
      </div>
    </section>
  );
}
