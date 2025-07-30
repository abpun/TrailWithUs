import { useState, useMemo } from "react";
import { DatePicker } from "../common/Date-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import Text from "../common/text";
import { Card } from "../ui/card";
import { Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from "react-router";
import useFetch from "@/hooks/useFetch";
import { format } from "date-fns";

interface Tour {
  _id: string;
  createdAt: string;
  date: string;
  description: string;
  image: string;
  name: string;
  participants: number;
  price: number;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  success: boolean;
  data: Tour[];
  message: string;
}

const TourListPage = () => {
  const { data: apiResponse, isLoading, error } = useFetch<ApiResponse>("/services", ["services"]);
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState<"priceLow" | "priceHigh" | "nameAZ" | "default">("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 3500]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const formatTourDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, "MMMM d, yyyy");
    } catch {
      return "Date not available";
    }
  };

  const filteredTours = useMemo(() => {
    if (!apiResponse?.data) return [];

    let tours = [...apiResponse.data];

    // Apply search filter
    if (searchQuery) {
      tours = tours.filter(tour => 
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply location filter
    if (locationQuery) {
      tours = tours.filter(tour => 
        tour.description.toLowerCase().includes(locationQuery.toLowerCase())
      );
    }

    // Apply price range filter
    tours = tours.filter(tour => 
      tour.price >= priceRange[0] && tour.price <= priceRange[1]
    );

    // Apply date filter
    if (selectedDate) {
      const selectedDateString = format(selectedDate, "yyyy-MM-dd");
      tours = tours.filter(tour => {
        try {
          const tourDate = new Date(tour.date);
          return format(tourDate, "yyyy-MM-dd") === selectedDateString;
        } catch {
          return false;
        }
      });
    }

    // Apply sorting
    switch (sortOption) {
      case "priceLow":
        return tours.sort((a, b) => a.price - b.price);
      case "priceHigh":
        return tours.sort((a, b) => b.price - a.price);
      case "nameAZ":
        return tours.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return tours;
    }
  }, [apiResponse, sortOption, searchQuery, locationQuery, priceRange, selectedDate]);

  const resetFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setPriceRange([100, 3500]);
    setSelectedDate(undefined);
    setSortOption("default");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Text type="title">Loading tours...</Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        <Text type="title">Error loading tours</Text>
        <Text type="description">{error.message}</Text>
      </div>
    );
  }

  if (!apiResponse?.success || !apiResponse.data || apiResponse.data.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Text type="title">No tours available</Text>
        <Text type="description">Check back later for new tour offerings</Text>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
      <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Filter Bar */}
        <div className="w-full absolute -top-16 mx-auto">
          <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center w-full bg-[#f8f8f8] p-3 sm:p-4 rounded-t-xl gap-2 sm:gap-0">
            <div className="w-full sm:w-auto">
              <DatePicker 
                onSelect={setSelectedDate} 
                selected={selectedDate} 
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 w-full sm:w-auto">
              {/* Price Sort Buttons */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setSortOption("priceLow")}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded border flex items-center gap-1 ${
                    sortOption === "priceLow" ? "bg-gray-200" : "bg-white"
                  } border-gray-300 hover:bg-gray-100`}
                >
                  <ArrowUp size={12} className="sm:size-[14px]" />
                  <span className="hidden sm:inline">Price Low</span>
                  <span className="sm:hidden">Low</span>
                </button>
                <button
                  onClick={() => setSortOption("priceHigh")}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded border flex items-center gap-1 ${
                    sortOption === "priceHigh" ? "bg-gray-200" : "bg-white"
                  } border-gray-300 hover:bg-gray-100`}
                >
                  <ArrowDown size={12} className="sm:size-[14px]" />
                  <span className="hidden sm:inline">Price High</span>
                  <span className="sm:hidden">High</span>
                </button>
              </div>

              {/* A-Z Sort Button */}
              <button
                onClick={() => setSortOption("nameAZ")}
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded border flex items-center gap-1 ${
                  sortOption === "nameAZ" ? "bg-gray-200" : "bg-white"
                } border-gray-300 hover:bg-gray-100`}
              >
                A-Z
              </button>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-8 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tours List */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredTours.map((tour) => (
                  <Card
                    key={tour._id}
                    className="flex flex-col rounded-xl shadow-lg hover:shadow-xl hover:scale-[102%] transition-all duration-300 overflow-hidden pt-0 gap-0 cursor-pointer"
                    onClick={() => navigate(`/tour-packages/tour-information/${tour._id}`)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={tour?.image}
                        alt={tour.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Tour+Image";
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#df6951] p-2">
                      <Text className="flex items-center gap-2 text-white text-xs sm:text-sm">
                        <Calendar size={14} className="sm:size-[16px]" />
                        {formatTourDate(tour.date)}
                      </Text>
                      <Text className="flex items-center gap-2 text-white text-xs sm:text-sm">
                        <FaPeopleGroup size={14} className="sm:size-[16px]" />
                        {tour.participants}+ People
                      </Text>
                    </div>
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <Text
                        type="title"
                        className="text-base sm:text-lg font-semibold mb-2"
                      >
                        {tour.name}
                      </Text>
                      <Text type="description" className="mb-3 sm:mb-4 text-sm sm:text-base flex-1">
                        {tour.description}
                      </Text>
                      <div className="flex justify-between items-center">
                        <Text className="text-base sm:text-lg font-bold text-[#df6951]">
                          ${tour.price.toFixed(2)}
                        </Text>
                        <Button 
                          size="sm" 
                          className="hidden sm:inline-flex bg-[#df6951] hover:bg-[#c45a44]"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Filters Sidebar */}
            <div className="lg:w-80 order-1 lg:order-2">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:sticky lg:top-8">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <Text type="title" className="text-lg sm:text-xl font-semibold">
                    Plan Your Trip
                  </Text>
                  <button
                    className="text-xs sm:text-sm text-gray-500 hover:text-black"
                    onClick={resetFilters}
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <Input
                    placeholder="Search Tour"
                    className="text-sm sm:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Input
                    placeholder="Where To?"
                    className="text-sm sm:text-base"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                  <DatePicker
                    onSelect={setSelectedDate}
                    selected={selectedDate}
                  />

                  <div>
                    <h3 className="text-xs sm:text-sm font-medium mb-2">
                      Filter By Price
                    </h3>
                    <Slider
                      min={100}
                      max={3500}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#df6951] hover:bg-[#c45a44] text-sm sm:text-base"
                    onClick={() => {}} // Already filtering in real-time
                  >
                    Search Tours
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListPage;