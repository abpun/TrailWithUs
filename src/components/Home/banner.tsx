import banner from "@/assets/home/libertyBannar.png";
import bannerText from "@/assets/svg/bannerText.svg";

const Banner = () => {
  return (
    <div className="relative my-6 md:my-8 lg:my-10 xl:my-12 overflow-hidden">
      {/* Banner Text - Responsive positioning and sizing */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start z-10">
        <div className="w-3/4 sm:w-1/2 md:w-1/5 lg:w-2/5 xl:w-3/5 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-32">
          <img 
            src={bannerText} 
            alt="Banner text" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Banner Image - Responsive sizing */}
      <img 
        className="w-full h-auto object-cover min-h-[150px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]" 
        src={banner} 
        alt="Liberty banner" 
      />
    </div>
  );
};

export default Banner;