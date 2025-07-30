import Text from "@/components/common/text";
import { BookTourForm } from "@/components/form/BookTourForm";
import tour from "@/assets/Services's/TourPacakag/tour.png";

const Tour_Plan = () => {
  const itinerary = [
    {
      id: 1,
      day: 1,
      title: "Departure",
      description: [
        "Enjoy a comfortable departure with all arrangements taken care of",
        "Our team will ensure a smooth start to your journey with premium services",
      ],
      amenities: [
        "5 Star Accommodation",
        "Breakfast included",
        "Luxury transportation",
        "Welcome drinks",
      ],
    },
    {
      id: 2,
      day: 2,
      title: "Visiting Zurich, Geneva and Zermatt",
      description: [
        "Explore Switzerland's most beautiful cities with our expert guides",
        "See iconic landmarks and hidden gems with comfortable transportation",
      ],
      amenities: [
        "5 Star Hotel in Zurich",
        "Breakfast buffet",
        "Guided city tours",
        "Fine dining experience",
      ],
    },
    {
      id: 3,
      day: 3,
      title: "Rest Day",
      description: [
        "A day to relax and enjoy the hotel facilities at your own pace",
        "Optional spa treatments and local experiences available",
      ],
      amenities: [
        "Luxury resort access",
        "All meals included",
        "Pool and spa facilities",
      ],
    },
    {
      id: 4,
      day: 4,
      title: "Historical Tour",
      description: [
        "Immerse yourself in the region's rich history with our knowledgeable guides",
        "Visit UNESCO heritage sites and museums with priority access",
      ],
      amenities: [
        "5 Star Accommodation",
        "Breakfast included",
        "Private tour guide",
        "Entrance fees covered",
      ],
    },
    {
      id: 5,
      day: 5,
      title: "Return",
      description: [
        "Comfortable transfer to the airport with farewell services",
        "Our team will assist with all departure formalities",
      ],
      amenities: [],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Itinerary Section */}
      <div className="w-full lg:w-7/12 p-4 sm:p-6">
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
          <Text type="title" className="text-2xl sm:text-3xl font-bold">
            Tour Plan
          </Text>
        </section>

        <div className="space-y-6 sm:space-y-8">
          {itinerary?.map((item, index) => (
            <div key={item.id} className="relative">
              {index !== itinerary.length - 1 && (
                <div className="absolute left-[21px] top-4 h-full w-0.5 border-l-2 border-dashed border-[#DF6951]" />
              )}

              <div className="absolute flex items-center justify-center text-white font-bold align-middle h-10 w-10 rounded-lg bg-[#DF6951] z-10">
                0{item.day}
              </div>

              <div className="ml-14 sm:ml-20 pt-2">
                <div className="flex  sm:items-center gap-1 sm:gap-2">
                  <Text className="text-base sm:text-lg font-semibold  whitespace-nowrap">
                    Day {item.day}:
                  </Text>
                  <Text className="text-base sm:text-lg font-bold text-primary overflow-hidden text-ellipsis whitespace-nowrap max-w-[90%]">
                    {item.title}
                  </Text>
                </div>

                <div className="mt-2 pl-1 space-y-1">
                  {item.description?.map((desc, i) => (
                    <Text
                      key={i}
                      className="text-sm sm:text-base text-muted-foreground"
                    >
                      {desc}
                    </Text>
                  ))}
                </div>

                {item.amenities?.length > 0 && (
                  <div className="mt-3 pl-1">
                    <Text className="text-sm sm:text-base font-medium">
                      Includes:
                    </Text>
                    <ul className="mt-1 space-y-1">
                      {item.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          <Text className="text-xs sm:text-sm">{amenity}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="w-full lg:w-5/12 space-y-6">
        <div className="bg-gray-200 p-6 shadow-md mt-5">
          <BookTourForm />
        </div>
        <div className="h-64 md:h-80 lg:h-[20rem] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={tour}
            alt="tour.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Tour_Plan;
