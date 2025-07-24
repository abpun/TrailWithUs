import ClientFeedback from "@/components/Home/ClientFeedback";
import aboutHeroImg from "@/assets/about/aboutHeroImg.png";
import aboutUsSVG from "@/assets/svg/aboutUs.svg";
import PromoBanner from "@/components/Abouts/PromoBanner";
import OurVideo from "@/components/Abouts/OurVideo";
import PopularTourPlans from "@/components/Abouts/PopularourPlans";
import InternationalPackages from "@/components/Abouts/InternationalPackages";

const About = () => {
  return (
    <div>
      <div className="relative mb-16">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={aboutUsSVG} alt="About text" />
          </div>
        </div>
        <div className="filter brightness-[85%] mb-10">
          <img src={aboutHeroImg} alt="hero img " />
        </div>
      </div>
      <PromoBanner />
      <OurVideo />
      <PopularTourPlans />
      <InternationalPackages />
      <ClientFeedback />
    </div>
  );
};
export default About;
