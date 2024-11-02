import { useTranslation } from "./TranslationContext";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="about-me" className="pt-32">
      <h1 className="text-[40px] font-semibold">{t.aboutMe}</h1>
      <p className="pt-16 text-[18px] text-justify">
        I completed my studies in Computer Science and have a strong passion for
        developing websites, web applications, and mobile apps. My expertise
        includes building single-page applications with TypeScript, coupled with
        practical experience in infrastructure administration and developing an
        eCommerce platform. I am enthusiastic about microservice architecture
        and aspire to become a Software Developer, driven by the satisfaction of
        turning ideas into functional products.
      </p>
      <p className="pt-4 text-[18px] text-justify">
        I began my journey in web design at 17, creating my first homepage while
        learning HTML, CSS, and JavaScript. Over the years, I have designed
        numerous websites, including an eCommerce store for bath furniture
        developed with my younger brother. This experience provided me with a
        comprehensive skill set in web design, content management, marketing,
        product development, SEO, and data handling. My proficiency in Photoshop
        has also proven valuable for crafting custom graphics and layouts.
      </p>
      <p className="pt-4 text-[18px] text-justify">
        During my studies at FH Joanneum, I expanded my knowledge in
        Entrepreneurship, Software Development, IT Architecture, Interface
        Design, Databases, and Business Analytics. This academic background,
        combined with my self-taught skills, enhanced my expertise in web
        development, leading to my mastery of TypeScript and various frameworks.
        I am proficient in multiple programming languages and enjoy
        collaborative team environments. I am adept at problem-solving,
        especially when addressing technical challenges, thanks to my deep
        understanding of core technologies.
      </p>
      <p className="pt-4 text-[18px] text-justify">
        My experiences from internships and theses have fueled my interest in
        DevOps, enriching my approach to software engineering. Aspiring to
        become a Full Stack Developer, I am excited by the emerging trend of 3D
        web development and bring a creative mindset that adds value to any
        team.
      </p>
    </section>
  );
}
