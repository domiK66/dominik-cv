import { useTranslation } from "./TranslationContext";

export default function WorkExperience() {
  const { t } = useTranslation();
  return (
    <section id="work-experience" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.workExperience}</h1>
      <div className="mt-16 w-full">
        <p className="text-[25px] font-semibold">digitAAL Life GmbH</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Full Stack Developer</p>
          <p className="text-[20px] text-mainColor">Jul 2022 - Sep 2022</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Internship</p>
          <p>Graz, Styria Austria (On-Site)</p>
        </div>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            C#
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Angular
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            .Net API
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Jenkins
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">Styria Media Group AG</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Infrastructure System Engineer</p>
          <p className="text-[20px] text-mainColor">Apr 2022 - Jun 2022</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Internship</p>
          <p>Graz, Styria Austria (On-Site)</p>
        </div>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Windows Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            DNS Administration
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Powershell Scripting
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Exchange Server
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">direktbad24.at GmbH</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Frontend Web Developer</p>
          <p className="text-[20px] text-mainColor">Jan 2019 - Mar 2022</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Part-time</p>
          <p>Wolfsberg, Carinthia Austria (Remote)</p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>
            Developed and maintained the frontend of the company's website
          </li>
          <li>
            Implemented new features and optimized the website for performance
          </li>
          <li>
            Worked closely with the backend team to integrate new features
          </li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Magento 2
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            HTML, CSS & JavaScript
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            PHP
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Bootstrap
          </span>
        </div>

        <div className="flex justify-between mt-8">
          <p className="text-[20px]">Ecommerce Developer</p>
          <p className="text-[20px] text-mainColor">Jun 2018 - Dec 2018</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Full-time</p>
          <p>Wolfsberg, Carinthia, Austria (On-Site)</p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>
            Developed a new eCommerce platform by migrating and enriching data
            from the outdated system, which lacked essential features
          </li>
          <li>
            Created and managed product listings with detailed descriptions,
            pricing, categories, and attributes
          </li>
        </ul>

        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Magento 2
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            PHP
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            SEO
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Google Analytics
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Content Management
          </span>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Webdesigner</p>
          <p className="text-[20px] text-mainColor">Oct 2017 - May 2018</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Part-time</p>
          <p>Wolfsberg, Carinthia Austria (Remote)</p>
        </div>
        <ul className="list-disc list-inside mt-2 list-mainColor">
          <li>
            Developed and maintained the frontend of the company's website
          </li>
          <li>
            Implemented new features and optimized the website for performance
          </li>
          <li>
            Worked closely with the backend team to integrate new features
          </li>
        </ul>
        <div className="flex flex-wrap mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Photoshop
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Wordpress
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Linux Server
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            HTML & CSS
          </span>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">Schwaiger BUSINESS_IT</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">IT Assistant</p>
          <p className="text-[20px] text-mainColor">Jul 2017 - Aug 2017</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Internship</p>
          <p>Wolfsberg, Carinthia Austria (On-Site)</p>
        </div>
      </div>
      <div className="mt-8 w-full">
        <hr></hr>
        <p className="text-[25px] font-semibold mt-8">
          Landeskrankenanstalten-Betriebsgesellschaft - KABEG
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Logistics Assistant</p>
          <p className="text-[20px] text-mainColor">Jun 2016 - Jun 2016</p>
        </div>
        <div className="flex justify-between">
          <p className="text-mainColor">Internship</p>
          <p>Wolfsberg, Carinthia Austria (On-Site)</p>
        </div>
      </div>
    </section>
  );
}
