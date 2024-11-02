import { ReactTyped } from "react-typed";
import { useTranslation } from "./TranslationContext";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="about-me">
      <p className="text-lg font-semibold">Dipl.-Ing.</p>
      <h1 className="text-[80px] font-semibold text-customColor leading-none">
        Dominik Kainz
      </h1>
      <span className="text-[32px] inline pr-4 text-mainColor">~$:</span>
      <ReactTyped
        strings={[
          "Software Developer",
          "Web Developer",
          "Mobile App Developer",
        ]}
        typeSpeed={100}
        backSpeed={50}
        loop
        className="text-[32px] text-mainColor inline"
      />
      <h1 className="text-[40px] font-semibold mt-24">{t.aboutMe}</h1>
      <p className="pt-16 text-[18px]">
        I have completed my studies in Computer Science and am passionate about
        developing websites, web applications, and mobile apps. My expertise
        lies in building single-page applications with TypeScript, complemented
        by hands-on experience in infrastructure administration and developing
        an eCommerce platform. I am also deeply interested in microservice
        architecture and aspire to become a Full Stack Developer, driven by the
        joy of transforming ideas into functional products.
      </p>
      <p className="pt-4 text-[18px]">
        Dominik Kainz started as a web designer with his first homepage created
        at the age of 15 when learning about HTML, CSS, and JavaScript in his
        lower grade. He taught himself to create many homepages through the
        years for several small companies and has even created an ecommerce
        store, that sells bath furniture online, together with the help of his
        younger brother. Therefore, he has not only expertise in web design but
        also in content management, marketing, product range development, Search
        Engine Optimization (SEO) and handling a large amount of data. His love
        for creating different artworks and pictures in Photoshop has also shown
        to be handy when developing homepages. Dominik studied Information’s
        Management at FH Joanneum, where he learned about Entrepreneurship,
        Software Development, IT-Architecture, Interface Design, Databases,
        Business Analytics, and many related topics. With the experience gained
        at FH Joanneum he efficiently increased his skill set. With the new
        skill set, he became better at web development by discovering TypeScript
        and different frameworks. He is also fluent in other computer languages
        and loves to work in teams. When bugs occur, he always seems to come up
        with a way of dealing with them, because he knows the key technologies
        under the hood. Through the experience gain from his both bachelor
        thesis and working in an internship, DevOps has also become an interest
        he shares. The dream of becoming a Full Stack developer in the near
        future and his passion about the upcoming trend of 3D in web development
        makes him a creative mind that every team needs.
      </p>
    </section>
  );
}
