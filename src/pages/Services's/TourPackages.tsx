import TourText from "@/assets/svg/TourText.svg"
import ServicesHeroImg from "@/assets/Services's/Services'sHeroImg.png"
import TourListPage from "@/components/Services's/TourListPage";

const TourPackages = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={TourText} alt="About text" />
          </div>
        </div>
        <div className="filter brightness-[85%]">
          <img src={ServicesHeroImg} alt="hero img " />
        </div>
      </div>
      <TourListPage />
    </div>
  );
};
export default TourPackages;
