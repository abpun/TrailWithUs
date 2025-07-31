import { BookTourForm } from "@/components/form/BookTourForm";
import tour from "@/assets/Services's/TourPacakag/tour.png";
import Text from "@/components/common/text";

interface Location {
  title: string;
  first_description: string;
  mapEmbed: string;
  second_description: string;
}

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Main Content - Reordered to come first in DOM for mobile */}
      <div className="w-full lg:w-7/12 p-4 sm:p-6">
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-4">
          <Text type="title" className="text-2xl sm:text-3xl font-bold">
            Tour Plan
          </Text>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <Text
            type="description"
            className="text-base sm:text-lg leading-relaxed"
          >
            Nestled in the heart of Europe, Switzerland is a breathtaking blend
            of natural splendor and modern sophistication. From the majestic
            Alps to crystal-clear lakes, this compact nation offers
            extraordinary experiences at every turn.
          </Text>
        </section>

        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden my-4 sm:my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2153735105187!2d-73.9878449241646!3d40.74844097138959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>

        <section className="space-y-4 sm:space-y-6">
          <Text
            type="description"
            className="text-base sm:text-lg leading-relaxed"
          >
            Nestled in the heart of Europe, Switzerland is a breathtaking blend
            of natural splendor and modern sophistication. From the majestic
            Alps to crystal-clear lakes, this compact nation offers
            extraordinary experiences at every turn.
          </Text>
          <Text
            type="description"
            className="text-base sm:text-lg leading-relaxed"
          >
            Nestled in the heart of Europe, Switzerland is a breathtaking blend
            of natural splendor and modern sophistication. From the majestic
            Alps to crystal-clear lakes, this compact nation offers
            extraordinary experiences at every turn.
          </Text>
        </section>
      </div>

      {/* Booking Form - Sticky on larger screens */}
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

export default Location;
