import { faAngular } from "@fortawesome/free-brands-svg-icons/faAngular";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "./TranslationContext";

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="pt-32">
      <h1 className="text-[40px] font-semibold mb-4">{t.education}</h1>
      <div className="mt-16 w-full">
        <p className="text-[24px] font-semibold">FH Joanneum</p>
        <div className="flex justify-between mt-4">
          <p className="text-[20px]">Diplom Ingenieur (Dipl.-Ing.)</p>
          <p className="text-[20px] text-mainColor">Oct 2022 - Oct 2024</p>
        </div>
        <p className="text-mainColor">
          Business Informatics: Software and Digital Experience Engineering
        </p>
        <div className="flex mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faReact} /> React
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            TypeScript
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Parallel Programming
          </span>
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-[20px]">
            Bachelor of Science in Engineering (BSc.)
          </p>
          <p className="text-[20px] text-mainColor">Sep 2019 - Jul 2022</p>
        </div>
        <p className="text-mainColor">Informationsmanagement</p>
        <div className="flex mt-4">
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            <FontAwesomeIcon icon={faAngular} /> Angular
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            GoLang
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            TypeScript
          </span>
          <span className="inline-block text-white px-2 py-1 rounded-full mx-1 border border-gray-200 text-sm">
            Python
          </span>
        </div>
      </div>
    </section>
  );
}
