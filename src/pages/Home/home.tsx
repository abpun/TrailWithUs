import { Navbar } from "@/components/common/Navbar";
import HeroImg from "@/assets/common/home/heroImg.png";
import Emirates  from "@/assets/common/partner/Emirates.png";
import Airbnb  from "@/assets/common/partner/Airbnb.png";
import Swiss  from "@/assets/common/partner/Swiss.png";
import Trivago  from "@/assets/common/partner/Trivago.png";
import Turkish  from "@/assets/common/partner/Turkish.png";
import Offer from "@/components/Home/Offer";
import Banner from "@/components/Home/banner";
import Promotion from "@/components/Home/Promotion";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Navbar />
          <img src={HeroImg} alt="hero img " />
          <div className=" flex justify-around items-center py-5 bg-[#f0eeee]">
            <img className="w-50" src={Emirates}/>
            <img className="w-50" src={Trivago}/>
            <img className="w-50" src={Airbnb}/>
            <img className="w-50" src={Turkish}/>
            <img className="w-50" src={Swiss}/>
          </div>
        </div>
        <Offer/>
        <Banner/>
        <Promotion/>
      </div>
    </>
  );
};
export default Home;
