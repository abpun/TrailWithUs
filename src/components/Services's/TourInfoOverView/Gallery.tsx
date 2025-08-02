import { BookTourForm } from "@/components/form/BookTourForm";
import tourImg from "@/assets/Services's/TourPacakag/tour.png"


interface GalleryProps {
  data: {
    galleryDescription: string;
    images: {
      image: string;
      colSpan?: number;
      rowSpan?: number;
    }[];
  };
}

const Gallery = ({ data }: GalleryProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 py-4 gap-6">
      <div className="w-full lg:w-7/12">
        <div className="grid grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {data.images.map(({ image, colSpan = 1, rowSpan = 1 }, index) => (
            <div
              key={index}
              className={`col-span-${colSpan} row-span-${rowSpan} overflow-hidden`}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6 space-x-2">
          <button className="text-gray-500 hover:text-black">&lt;</button>
          {[1, 2, 3, 4].map((page) => (
            <button key={page} className="text-gray-500 hover:text-black px-2">
              {page}
            </button>
          ))}
          <button className="text-gray-500 hover:text-black">&gt;</button>
        </div>
      </div>

      <div className="w-full lg:w-5/12 space-y-6">
        <div className="bg-gray-200 p-6 shadow-md">
          <BookTourForm />
        </div>
        <div className="h-64 md:h-80 lg:h-[20rem] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={tourImg}
            alt="tour"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;