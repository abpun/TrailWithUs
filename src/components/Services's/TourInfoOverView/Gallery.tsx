import { BookTourForm } from "@/components/form/BookTourForm";
import tour from "@/assets/Services's/TourPacakag/tour.png";

const GalleryPic = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 3,
    image:
      "https://static.toiimg.com/thumb/msid-106092213,width-748,height-499,resizemode=4,imgsize-2718958/Magical-places-to-visit-in-Switzerland-this-winter.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    colSpan: 3,
    rowSpan: 1,
  },
];

const Gallery = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 py-4 gap-6">
      {/* Gallery Section */}
      <div className="w-full lg:w-7/12">
        <div className="grid grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {GalleryPic.map(({ id, image, colSpan, rowSpan }) => (
            <div
              key={id}
              className={`col-span-${colSpan} row-span-${rowSpan} overflow-hidden`}
            >
              <img
                src={image}
                alt={`img-${id}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
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

      {/* Booking Form Section */}
      <div className="w-full lg:w-5/12 space-y-6">
        <div className="bg-gray-200 p-6 shadow-md ">
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

export default Gallery;
