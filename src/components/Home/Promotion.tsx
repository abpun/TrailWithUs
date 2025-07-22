import Text from "../common/text";
import Paresh from "@/assets/home/parise.png";
import { Button } from "../ui/button";

const Promotion = () => {
  return (
    <>
      <div className="flex mx-5 my-10">
        <div className="text-left mb-16 space-y-4">
          <Text
            type="caption"
            className="text-[#DF6951] font-semibold tracking-widest"
          >
            Promotion
          </Text>
          <Text
            type="title"
            className="text-4xl md:text-5xl font-bold text-[#181E4B] mt-4"
          >
            We Provide You Best Europe Sightseeing Tours
          </Text>
          <Text type="description" className="font-semibold tracking-widest w-3/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum
            eaque voluptatum nostrum, autem commodi quasi officiis. Animi
            exercitationem eos praesentium obcaecati quos ipsum rem minus,
            assumenda, aliquid quis sapiente?
          </Text>
          <Button
            className="bg-[#DF6951] hover:bg-[#c3533d]"
            variant={"default"}
          >
            Get in Touch
          </Button>
        </div>
        <div>
          <img src={Paresh} alt="" />
        </div>
      </div>
    </>
  );
};
export default Promotion;
