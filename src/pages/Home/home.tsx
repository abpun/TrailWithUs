import HeroImg from "@/assets/common/home/heroImg.png";
import Emirates from "@/assets/common/partner/Emirates.png";
import Airbnb from "@/assets/common/partner/Airbnb.png";
import Swiss from "@/assets/common/partner/Swiss.png";
import Trivago from "@/assets/common/partner/Trivago.png";
import Turkish from "@/assets/common/partner/Turkish.png";
import Services from "@/components/Home/Services";
import Banner from "@/components/Home/banner";
import Promotion from "@/components/Home/Promotion";
import ViewPackages from "@/components/Home/ViewPackages";
import TrendingPackages from "@/components/Home/TrendingPackages";
import ClientFeedback from "@/components/Home/ClientFeedback";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <img src={HeroImg} alt="hero img " />
          <div className=" flex justify-around items-center py-5 bg-[#f0eeee]">
            <img className="w-50" src={Emirates} />
            <img className="w-50" src={Trivago} />
            <img className="w-50" src={Airbnb} />
            <img className="w-50" src={Turkish} />
            <img className="w-50" src={Swiss} />
          </div>
        </div>
        <Services />
        <Banner />
        <Promotion />
        <ViewPackages />
        <TrendingPackages />
        <ClientFeedback />
      </div>
    </>
  );
};
export default Home;
