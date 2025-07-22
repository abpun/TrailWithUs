import banner from "@/assets/home/libertyBannar.png";
import bannerText from "@/assets/svg/bannerText.svg";

const Banner = () => {
  return (
    <div className="relative my-10">
      <div className="self-center absolute top-0 bottom-0 left-32 ">
        <img src={bannerText} alt="Banner text" />
      </div>
      <img className="" src={banner} alt="" />
    </div>
  );
};
export default Banner;
