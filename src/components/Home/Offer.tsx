import Text from "../common/text";
import { Card, CardContent } from "../ui/card";
import Medical from "@/assets/home/Medical.png";
import Flights from "@/assets/home/Flights.png";
import Guided from "@/assets/home/Guided.png";
import Hand from "@/assets/home/Hand.png";

const Offer = () => {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <Text type="caption" className="text-[#DF6951] font-semibold tracking-widest">
          CATEGORY
        </Text>
        <Text type="title" className="text-4xl md:text-5xl font-bold text-[#181E4B] mt-4">
          We Offer Best Services
        </Text>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-full h-full  flex items-center justify-center">
                <img 
                  className="w-20 h-30 object-contain" 
                  src={service.icon} 
                  alt={service.title} 
                />
              </div>
              <h3 className="text-xl font-bold text-[#181E4B] mb-3">
                {service.title}
              </h3>
              <CardContent className="text-[#5E6282] text-sm leading-relaxed p-0">
                {service.description}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Offer;