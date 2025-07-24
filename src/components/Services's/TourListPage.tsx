import { useState, useEffect } from "react";
import { DatePicker } from "../common/Date-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import Text from "../common/text";
import { Card } from "../ui/card";
import { Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";

interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
  participants: number;
  image: string;
}

const TourListPage = () => {
  const initialTours: Tour[] = [
    {
      id: 1,
      name: "Switzerland Adventure",
      description: "Explore the beautiful Swiss Alps and lakes",
      price: 1100,
      date: "12, September 2024",
      participants: 120,
      image:
        "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Italian Getaway",
      description: "Experience the culture and cuisine of Italy",
      price: 950,
      date: "15, October 2024",
      participants: 80,
      image:
        "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXRhbHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Parisian Dream",
      description: "Romantic tour through the city of love",
      price: 1300,
      date: "5, November 2024",
      participants: 60,
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Japanese Discovery",
      description: "Ancient traditions meet modern innovation",
      price: 2200,
      date: "20, December 2024",
      participants: 45,
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SmFwYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Australian Outback",
      description: "Wildlife and wilderness adventure",
      price: 1800,
      date: "8, January 2025",
      participants: 30,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXVzdHJhbGlhfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Brazilian Carnival",
      description: "Vibrant culture and breathtaking nature",
      price: 1500,
      date: "25, February 2025",
      participants: 90,
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJhemlsfGVufDB8fDB8fHww",
    },
  ];

  const tours = initialTours;
  const [filteredTours, setFilteredTours] = useState<Tour[]>(initialTours);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [priceRange, setPriceRange] = useState([100, 3500]);
  const [priceSort, setPriceSort] = useState<"low" | "high">("low");
  const [nameSort, setNameSort] = useState<"a-z" | "z-a">("a-z");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  useEffect(() => {
    let result = [...tours];

    if (searchTerm) {
      result = result.filter(
        (tour) =>
          tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationTerm) {
      result = result.filter((tour) =>
        tour.name.toLowerCase().includes(locationTerm.toLowerCase())
      );
    }

    result = result.filter(
      (tour) => tour.price >= priceRange[0] && tour.price <= priceRange[1]
    );

    if (priceSort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else {
      result.sort((a, b) => b.price - a.price);
    }

    if (nameSort === "a-z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredTours(result);
  }, [searchTerm, locationTerm, priceRange, priceSort, nameSort, selectedDate]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    // In a real app, you would filter tours by date here
    console.log("Selected date:", date);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setLocationTerm("");
    setPriceRange([100, 3500]);
    setPriceSort("low");
    setNameSort("a-z");
    setSelectedDate(undefined);
  };

  return (
    <div className="container mx-auto px-4 md:px-40 py-8">
      <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Filter bar */}
        <div className="w-full absolute -top-16 mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center w-full bg-[#f8f8f8] p-3 rounded-t-xl">
            <DatePicker onSelect={handleDateSelect} selected={selectedDate} />

            <div className="flex flex-wrap gap-2">
              {/* Price Sort Buttons */}
              <div className="flex items-center space-x-1">
                <button
                  className={`px-3 py-1 text-sm rounded border flex items-center gap-1 ${
                    priceSort === "low"
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPriceSort("low")}
                >
                  <ArrowUp size={14} />
                  Price Low
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded border flex items-center gap-1 ${
                    priceSort === "high"
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPriceSort("high")}
                >
                  <ArrowDown size={14} />
                  Price High
                </button>
              </div>

              {/* Name Sort Button */}
              <button
                className={`px-3 py-1 text-sm rounded border flex items-center gap-1 ${
                  nameSort === "a-z"
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setNameSort(nameSort === "a-z" ? "z-a" : "a-z")}
              >
                {nameSort === "a-z" ? "A-Z" : "Z-A"}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-8 px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tours List */}
            <div className="flex-1">
              {filteredTours.length === 0 ? (
                <div className="text-center py-12">
                  <Text type="title" className="text-xl mb-2">
                    No tours found
                  </Text>
                  <Text type="description">
                    Try adjusting your search or filters
                  </Text>
                  <Button onClick={resetFilters} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredTours.map((tour) => (
                    <Card
                      key={tour.id}
                      className="flex flex-col rounded-xl shadow-lg hover:shadow-xl hover:scale-[103%] transition-all duration-300 overflow-hidden pt-0 gap-0"
                    >
                      <img
                        className="w-full h-48 object-cover"
                        src={tour.image}
                        alt={tour.name}
                      />
                      <div className="flex justify-between items-center bg-[#df6951] p-2">
                        <Text className="flex items-center gap-2 text-white text-sm">
                          <Calendar size={16} />
                          {tour.date}
                        </Text>
                        <Text className="flex items-center gap-2 text-white text-sm">
                          <FaPeopleGroup size={16} />
                          {tour.participants}+ People
                        </Text>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <Text
                          type="title"
                          className="text-lg font-semibold mb-2"
                        >
                          {tour.name}
                        </Text>
                        <Text type="description" className="mb-4 flex-1">
                          {tour.description}
                        </Text>
                        <div className="flex justify-between items-center">
                          <Text className="text-lg font-bold text-[#df6951]">
                            ${tour.price}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Filters Sidebar */}
            <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-xl p-6 h-fit sticky top-8">
              <div className="flex justify-between items-center mb-6">
                <Text type="title" className="text-xl font-semibold">
                  Plan Your Trip
                </Text>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Search Tour"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Input
                  placeholder="Where To?"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                />
                <DatePicker
                  onSelect={handleDateSelect}
                  selected={selectedDate}
                />

                <div>
                  <h3 className="text-sm font-medium mb-2">Filter By Price</h3>
                  <Slider
                    min={100}
                    max={3500}
                    step={100}
                    value={priceRange}
                    onValueChange={(val) => setPriceRange(val)}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <Button className="w-full bg-[#df6951] hover:bg-[#c45a44]">
                  Search Tours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListPage;
