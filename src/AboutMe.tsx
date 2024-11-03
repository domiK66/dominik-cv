import { useTranslation } from "./TranslationContext";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="about-me" className="pt-32">
      <h1 className="text-[40px] font-semibold">{t.aboutMe}</h1>
      <p className="pt-16 text-[18px]">{t.bio1}</p>
      <p className="pt-4 text-[18px]">{t.bio2}</p>
      <p className="pt-4 text-[18px]">{t.bio3}</p>
      <p className="pt-4 text-[18px]">{t.bio4}</p>
    </section>
  );
}
