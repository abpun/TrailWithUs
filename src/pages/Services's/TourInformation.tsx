import Packages from "@/assets/svg/TourPackages.svg";
import TourPackages from "@/assets/Services's/tour-packages.png";
import TourInfoList from "@/components/Services's/TourInfoList";

const TourInformation = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={Packages} alt="About text" />
          </div>
        </div>
        <div className="filter brightness-[85%]">
          <img src={TourPackages} alt="hero img " />
        </div>
      </div>
      <TourInfoList />
    </div>
  );
};
export default TourInformation;
