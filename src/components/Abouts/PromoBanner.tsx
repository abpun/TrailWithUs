import Text from "../common/text";
import PromoImg from "@/assets/about/PromoImg.png";
import { Button } from "../ui/button";

const Promotion = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <Text
              type="caption"
              className="text-[#DF6951] font-semibold uppercase tracking-widest"
            >
              Promotion
            </Text>

            <Text
              type="title"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#181E4B] leading-tight animate-fade-in delay-100"
            >
              Discover Europe's <span className="text-[#DF6951]">Finest</span>{" "}
              Sightseeing Tours
            </Text>

            <Text
              type="description"
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              earum eaque voluptatum nostrum, autem commodi quasi officiis.
              Animi exercitationem eos praesentium obcaecati quos ipsum rem
              minus, assumenda, aliquid quis sapiente?
            </Text>

            <div className="pt-2">
              <Button className="bg-[#DF6951] hover:bg-[#c3533d] px-10 py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Tours
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <img
                src={PromoImg}
                alt="Europe sightseeing tour"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
