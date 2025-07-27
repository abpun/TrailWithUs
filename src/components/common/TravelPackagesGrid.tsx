const TravelPackagesGrid = () => {
    const packagesData = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      destination: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      destination: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      destination: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      destination: "New York City, USA",
      image:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      destination: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {packagesData.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col overflow-hidden shadow-md hover:shadow-xl  hover:scale-[1.03] transition-all duration-300 cursor-pointer aspect-square`}
          >
            <img
              src={item.image}
              alt={item.destination}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[65%]"
            />
            <div className="relative z-10 flex items-end px-3 py-4 h-full text-center ">
              <span className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {item.destination}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackagesGrid;
