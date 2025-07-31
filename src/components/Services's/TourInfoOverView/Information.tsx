import Text from "@/components/common/text";
import { BookTourForm } from "@/components/form/BookTourForm";
import { Star } from "lucide-react";
import tour from "@/assets/Services's/TourPacakag/tour.png";
import TravelPackagesGrid from "@/components/common/TravelPackagesGrid";

interface Highlight {
  title: string;
  description: string;
}

interface Information {
  infoDescription: string;
  highlights: Highlight[];
}

const Information = ({data}: {data: Information}) => {
  console.log(data)
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < rating
                ? "fill-[#FFC107] text-[#FFC107]"
                : "fill-gray-300 text-gray-300"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main Content */}
        <div className="w-full lg:w-7/12 p-4 md:p-6">
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
            <Text type="title" className="text-2xl md:text-3xl font-bold">
              Discover Switzerland
            </Text>
            <Text type="description" className="text-lg">
              <span className="text-[#DF6951] text-2xl font-bold">$1,000 </span>
              /per couple
            </Text>
          </section>

          <section className="flex items-center mb-6 md:mb-8">
            <div className="mr-2 mt-4">{renderStars(4)}</div>
            <Text type="caption" className="text-lg">
              (2,300+ reviews)
            </Text>
          </section>

          <section className="space-y-4 md:space-y-6">
            <Text
              type="description"
              className="text-base md:text-lg leading-relaxed"
            >
              Nestled in the heart of Europe, Switzerland is a breathtaking
              blend of natural splendor and modern sophistication. From the
              majestic Alps to crystal-clear lakes, this compact nation offers
              extraordinary experiences at every turn.
            </Text>

            <Text
              type="title"
              className="text-xl md:text-2xl font-bold mt-6 md:mt-8"
            >
              Why Switzerland is Unforgettable
            </Text>

            <div className="space-y-3 md:space-y-4">
              <Text
                type="description"
                className="text-base md:text-lg leading-relaxed"
              >
                <span className="font-bold text-[#DF6951]">
                  The Majestic Alps:
                </span>{" "}
                Home to iconic peaks like the Matterhorn and Jungfrau region,
                Switzerland is a paradise for outdoor enthusiasts. Enjoy
                world-class skiing in winter or spectacular hiking in summer.
              </Text>

              <Text
                type="description"
                className="text-base md:text-lg leading-relaxed"
              >
                <span className="font-bold text-[#DF6951]">
                  Pristine Lakes:
                </span>{" "}
                Lake Geneva, Lake Lucerne, and Lake Zurich offer breathtaking
                reflections of Switzerland's beauty. Perfect for boat cruises,
                swimming, or simply admiring the views.
              </Text>

              <Text
                type="description"
                className="text-base md:text-lg leading-relaxed"
              >
                <span className="font-bold text-[#DF6951]">
                  Charming Destinations:
                </span>{" "}
                Explore picturesque villages like Zermatt and Gruyères, or
                experience the cosmopolitan charm of Zurich, Geneva, and Bern -
                each with its own unique character.
              </Text>

              <Text
                type="description"
                className="text-base md:text-lg leading-relaxed"
              >
                <span className="font-bold text-[#DF6951]">
                  Culinary Delights:
                </span>{" "}
                Indulge in Swiss specialties including creamy fondue, exquisite
                chocolates, and crisp Alpine wines. Every meal is a celebration
                of flavor.
              </Text>

              <Text
                type="description"
                className="text-base md:text-lg leading-relaxed"
              >
                <span className="font-bold text-[#DF6951]">
                  Scenic Transportation:
                </span>{" "}
                Switzerland's efficient train network offers some of the world's
                most spectacular journeys, including the legendary Glacier
                Express and GoldenPass Line.
              </Text>
            </div>
          </section>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div className="bg-gray-200 p-6 shadow-md mt-5">
            <BookTourForm />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-8">
        <div className="w-full lg:w-7/12">
          <Text className="my-2" type="title">
            From our gallery
          </Text>
          <Text className="my-2" type="description">
            Majestic mountains, sparkling lakes, and storybook villages define
            Switzerland—a land of precision, from luxury watches to world-famous
            chocolate. Whether skiing the Alps, cruising Lake Lucerne, or
            strolling Zurich's sleek streets, every moment here feels
            unforgettable.
          </Text>
          <TravelPackagesGrid />
        </div>
        <div className="w-full max-md:hidden lg:w-5/12 h-64 md:h-80 lg:h-[20rem] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={tour}
            alt="tour.png"
          />
        </div>
      </div>
    </>
  );
};

export default Information;
