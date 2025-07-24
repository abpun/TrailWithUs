import TourPic from "@/assets/about/TourPic.png";
import shell from "@/assets/about/shell.png";
import ScanStatus from "../ui/ScanActivity";
import Text from "../common/text";

const PopularTourPlans = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-20 px-4 sm:px-8 gap-12">
      {/* Left Image */}
      <div className="order-1 lg:order-1">
        <img
          className="w-full max-w-xs rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          src={TourPic}
          alt="Tour preview"
        />
      </div>

      {/* Content */}
      <div className="order-3 lg:order-2 flex-1 max-w-2xl">
        <div className="space-y-6">
          <Text
            type="caption"
            className="text-[#DF6951] font-bold uppercase tracking-widest text-sm"
          >
            Promotion
          </Text>

          <Text
            type="title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181E4B] leading-tight"
          >
            We Provide You Best Europe Sightseeing Tours
          </Text>

          <Text
            type="description"
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum
            eaque voluptatum nostrum, autem commodi quasi officiis. Animi
            exercitationem eos praesentium obcaecati quos ipsum rem minus,
            assumenda, aliquid quis sapiente?
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <ScanStatus
            value={7}
            maxValue={10}
            size={120}
            thickness={20}
            color={["#10E7FF", "#8437FF"]}
            label="Active"
            showPercentage={true}
          />
          <ScanStatus
            value={4}
            maxValue={10}
            size={120}
            thickness={20}
            color={["#FFB47D", "#FF4098"]}
            label="Active"
            showPercentage={true}
          />
          <ScanStatus
            value={6}
            maxValue={10}
            size={120}
            thickness={20}
            color={["#D820F9", "#7202FF"]}
            label="Active"
            showPercentage={true}
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="order-2 lg:order-3">
        <img
          className="w-full max-w-xs rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          src={shell}
          alt="Shell decoration"
        />
      </div>
    </div>
  );
};

export default PopularTourPlans;
