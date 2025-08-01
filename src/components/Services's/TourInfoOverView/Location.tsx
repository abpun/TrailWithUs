import { BookTourForm } from "@/components/form/BookTourForm";
import Text from "@/components/common/text";

interface LocationProps {
  data: {
    title: string;
    first_description: string;
    mapEmbed: string;
    second_description: string;
  };
}

const Location = ({ data }: LocationProps) => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="w-full lg:w-7/12 p-4 sm:p-6">
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-4">
          <Text type="title" className="text-2xl sm:text-3xl font-bold">
            {data.title}
          </Text>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <Text type="description" className="text-base sm:text-lg leading-relaxed">
            {data.first_description}
          </Text>
        </section>

        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden my-4 sm:my-6">
          <iframe
            src={data.mapEmbed}
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
          <Text type="description" className="text-base sm:text-lg leading-relaxed">
            {data.second_description}
          </Text>
        </section>
      </div>

      <div className="w-full lg:w-5/12 space-y-6">
        <div className="bg-gray-200 p-6 shadow-md mt-5">
          <BookTourForm />
        </div>
        <div className="h-64 md:h-80 lg:h-[20rem] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="tour"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;