import Text from "../common/text";
import { Card, CardContent } from "../ui/card";
import Medical from "@/assets/home/Medical.png";
import Flights from "@/assets/home/Flights.png";
import Guided from "@/assets/home/Guided.png";
import Hand from "@/assets/home/Hand.png";

const Services = () => {
  const services = [
    {
      icon: Guided,
      title: "Guided Tours",
      description: "Expert-led tours to hidden gems and popular attractions with personalized attention."
    },
    {
      icon: Flights,
      title: "Flights Booking",
      description: "Seamless flight reservations with competitive prices and flexible options."
    },
    {
      icon: Hand,
      title: "Personalized Help",
      description: "24/7 support and tailored recommendations for your unique travel needs."
    },
    {
      icon: Medical,
      title: "Medical Insurance",
      description: "Comprehensive coverage for your peace of mind during travels."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <Text type="caption" className="text-[#DF6951] font-semibold uppercase tracking-widest text-sm sm:text-base">
          CATEGORY
        </Text>
        <Text type="title" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#181E4B] mt-2 sm:mt-3 lg:mt-4">
          We Offer Best Services
        </Text>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-none"
          >
            <div className="p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-full h-full flex items-center justify-center mb-2 sm:mb-3">
                <img 
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain" 
                  src={service.icon} 
                  alt={service.title} 
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#181E4B] mb-2 sm:mb-3">
                {service.title}
              </h3>
              <CardContent className="text-[#5E6282] text-xs sm:text-sm leading-relaxed p-0">
                {service.description}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;