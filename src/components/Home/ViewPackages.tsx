import PackagesSVG from "@/assets/svg/PackagesImage.svg";
import PackagesSVG1 from "@/assets/svg/PackagesImage1.svg";
import PackagesImage from "@/assets/home/PackagesImage.png";
import PackagesImage1 from "@/assets/home/PackagesImage1.png";
import { Button } from "../ui/button";

const ViewPackages = () => {
  return (
    <div className="flex">
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={PackagesSVG} alt="Banner text" />
            <div className="pt-8 flex justify-center">
              <Button
                variant={"outline"}
                className=" bg-transparent hover:bg-[#00000020] hover:text-white text-white px-6 py-5 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
        <div className="filter brightness-[65%]">
          <img src={PackagesImage} alt="Background" />
        </div>
      </div>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={PackagesSVG1} alt="Banner text" />
            <div className="pt-8 flex justify-center">
              <Button
                variant={"outline"}
                className=" bg-transparent hover:bg-[#00000020] hover:text-white text-white px-6 py-5 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
        <div className="filter brightness-[65%]">
          <img src={PackagesImage1} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default ViewPackages;
