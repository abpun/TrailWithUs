import Text from "@/components/common/text";
import { BookTourForm } from "@/components/form/BookTourForm";
import { Star } from "lucide-react";
import TravelPackagesGrid from "@/components/common/TravelPackagesGrid";
import tourImg from "@/assets/Services's/TourPacakag/tour.png"

interface InformationProps {
  data: {
    infoDescription: string;
    highlights: {
      title: string;
      description: string;
    }[];
  };
  name: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: {
    galleryDescription: string;
    images: {
      image: string;
      colSpan?: number;
      rowSpan?: number;
    }[];
  };
}

const Information = ({ data, name, price, priceUnit, rating, reviewCount, gallery }: InformationProps) => {
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
        <div className="w-full lg:w-7/12 p-4 md:p-6">
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
            <Text type="title" className="text-2xl md:text-3xl font-bold">
              {name}
            </Text>
            <Text type="description" className="text-lg">
              <span className="text-[#DF6951] text-2xl font-bold">${price.toFixed(2)} </span>
              /{priceUnit}
            </Text>
          </section>

          <section className="flex items-center mb-6 md:mb-8">
            <div className="mr-2 mt-4">{renderStars(rating)}</div>
            <Text type="caption" className="text-lg">
              ({reviewCount}+ reviews)
            </Text>
          </section>

          <section className="space-y-4 md:space-y-6">
            <Text type="description" className="text-base md:text-lg leading-relaxed">
              {data.infoDescription}
            </Text>

            <Text type="title" className="text-xl md:text-2xl font-bold mt-6 md:mt-8">
              Why This Tour is Unforgettable
            </Text>

            <div className="space-y-3 md:space-y-4">
              {data.highlights.map((highlight, index) => (
                <Text
                  key={index}
                  type="description"
                  className="text-base md:text-lg leading-relaxed"
                >
                  <span className="font-bold text-[#DF6951]">
                    {highlight.title}:
                  </span>{" "}
                  {highlight.description}
                </Text>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full lg:w-5/12 space-y-6">
          <div className="bg-gray-200 p-6 shadow-md mt-5">
            <BookTourForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-8">
        <div className="w-full lg:w-7/12">
          <Text className="my-2" type="title">
            From our gallery
          </Text>
          <Text className="my-2" type="description">
            {gallery.galleryDescription}
          </Text>
          <TravelPackagesGrid />
        </div>
        <div className="w-full max-md:hidden lg:w-5/12 h-64 md:h-80 lg:h-[20rem] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={tourImg}
            alt="tour"
          />
        </div>
      </div>
    </>
  );
};

export default Information;