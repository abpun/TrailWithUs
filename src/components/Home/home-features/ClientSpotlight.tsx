import Text from "@/components/common/text";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  profilePic: string;
}

export function ClientSpotlight() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      quote:
        "The best travel experience I've ever had! Everything was perfectly organized and the guides were incredibly knowledgeable.",
      rating: 5,
      profilePic: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "Michael Chen",
      role: "Adventure Seeker",
      quote:
        "Absolutely breathtaking destinations and seamless planning. Will definitely book again for my next adventure!",
      rating: 5,
      profilePic: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Emma Rodriguez",
      role: "Family Traveler",
      quote:
        "Our family vacation was stress-free thanks to their excellent service. The kids had a blast and we made unforgettable memories.",
      rating: 4,
      profilePic: "https://avatar.iran.liara.run/public/girl",
    },
    {
      name: "David Wilson",
      role: "Business Traveler",
      quote:
        "Even for business trips, they make the experience enjoyable. Great attention to detail and comfort.",
      rating: 5,
      profilePic: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Olivia Smith",
      role: "Luxury Traveler",
      quote:
        "Premium service that exceeded all my expectations. The accommodations were stunning and the itinerary was perfect.",
      rating: 5,
      profilePic: "https://avatar.iran.liara.run/public/girl",
    },
  ];

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
    <div className="container mx-auto px-4 py-16 absolute">
      <div className="text-center">
        <Text
          type="caption"
          className="text-[#DF6951] font-semibold uppercase tracking-widest mb-2"
        >
          Testimonials
        </Text>
        <Text
          type="title"
          className="text-4xl md:text-5xl font-bold text-[#181E4B] mt-4 mb-6"
        >
          What Our Clients Say About Us
        </Text>
        <div className="w-20 h-1 bg-[#DF6951] mx-auto rounded-full"></div>
      </div>
      <Carousel
        opts={{ loop: true }}
        className="flex items-center w-full max-w-xl h-[30rem] mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="mt-10">
              <div className="relative">
                <Card className="flex justify-center items-center mx-auto h-80 w-11/12 border-none shadow-none">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute w-20 h-20 bg-white p-1 border-2 border-gray-200 rounded-full left-1/2 transform -translate-x-1/2 -top-10 z-10">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={testimonial.profilePic}
                        alt={`${testimonial.name}'s profile`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/80";
                        }}
                      />
                    </div>

                    {renderStars(testimonial.rating)}
                    <blockquote className="text-xl md:text-2xl text-gray-600 italic mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-2">
                      <Text
                        type="subTitle"
                        className="text-[#181E4B] font-bold text-lg"
                      >
                        {testimonial.name}
                      </Text>
                      <Text type="caption" className="text-gray-500">
                        {testimonial.role}
                      </Text>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-[#0007] text-white w-15 h-15 hover:bg-[#313131] hover:text-white -left-3" />
        <CarouselNext className="hidden md:flex bg-[#0007] text-white w-15 h-15 hover:bg-[#313131] hover:text-white -right-3" />
      </Carousel>
    </div>
  );
}
