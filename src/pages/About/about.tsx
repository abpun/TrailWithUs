import ClientFeedback from "@/components/Home/ClientFeedback";
import aboutHeroImg from "@/assets/about/aboutHeroImg.png";
import aboutUsSVG from "@/assets/svg/aboutUs.svg";
import PromoBanner from "@/components/Abouts/PromoBanner";
import OurVideo from "@/components/Abouts/OurVideo";
import PopularTourPlans from "@/components/Abouts/PopularourPlans";
import InternationalPackages from "@/components/Abouts/InternationalPackages";

const About = () => {
  return (
    <>
      <div className="relative mb-8 md:mb-12 lg:mb-16">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-2/4 sm:w-1/2 md:w-2/5 lg:w-1/3">
            <img src={aboutUsSVG} alt="About text" className="w-full h-auto " />
          </div>
        </div>
        <div className="filter brightness-[85%] mb-6 md:mb-8 lg:mb-10">
          <img
            src={aboutHeroImg}
            alt="hero img"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <PromoBanner />
        <OurVideo />
        <PopularTourPlans />
        <InternationalPackages />
      </div>
      <ClientFeedback />
    </>
  );
};

export default About;
