import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function CustomCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, jump: false })
  );

  const destinations = [
    {
      id: 1,
      city: "Paris, France",
      price: "Rs. 50,000",
      image: "https://worldwildschooling.com/wp-content/uploads/2024/02/Most-Beautiful-Cities-in-Europe_Paris-France_Augustin-Lazaroiu_AdobeStock_278755263.jpg"
    },
    {
      id: 2,
      city: "Rome, Italy",
      price: "Rs. 45,000",
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      city: "Kyoto, Japan",
      price: "Rs. 65,000",
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      city: "New York, USA",
      price: "Rs. 70,000",
      image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      city: "Sydney, Australia",
      price: "Rs. 75,000",
      image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      city: "Cape Town, South Africa",
      price: "Rs. 60,000",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 7,
      city: "Rio de Janeiro, Brazil",
      price: "Rs. 55,000",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 8,
      city: "Bali, Indonesia",
      price: "Rs. 40,000",
      image: "https://images.unsplash.com/photo-1518544864414-d2f14b7f1ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 9,
      city: "Dubai, UAE",
      price: "Rs. 58,000",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 10,
      city: "Barcelona, Spain",
      price: "Rs. 48,000",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          slidesToScroll: 1,
          inViewThreshold: 0.2,
        }}
        className="w-full px-8 cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="-ml-1">
          {destinations.map((destination) => (
            <CarouselItem
              key={destination.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 pl-1"
            >
              <div className="p-2">
                <Card className="overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg h-40 m-0 p-0">
                  <CardContent className="flex items-center justify-center m-0 p-0 h-full relative">
                    <span className="bg-[#FF7255] p-2 absolute right-3 top-2 rounded-full text-white text-sm">
                      {destination.price}
                    </span>
                    <img
                      src={destination.image}
                      alt={destination.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                      <h3 className="font-medium text-sm">{destination.city}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}