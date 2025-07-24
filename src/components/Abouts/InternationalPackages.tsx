import Text from "../common/text";

const packagesData = [
  {
    id: 1,
    destination: "Kyoto, Japan",
    price: "$1,250",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    destination: "Santorini, Greece",
    price: "$1,450",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    destination: "Banff National Park, Canada",
    price: "$980",
    image:
      "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    destination: "Maasai Mara, Kenya",
    price: "$1,650",
    image:
      "https://images.unsplash.com/photo-1703538354069-2d5693331330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    destination: "Queenstown, New Zealand",
    price: "$1,350",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    destination: "Reykjavik, Iceland",
    price: "$1,550",
    image:
      "https://images.unsplash.com/photo-1498673394965-85cb14905c89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    destination: "Halong Bay, Vietnam",
    price: "$890",
    image:
      "https://images.unsplash.com/photo-1703555853329-b9fab31e92ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    destination: "Patagonia, Argentina",
    price: "$1,750",
    image:
      "https://images.unsplash.com/photo-1611765086365-d37f3d9db823?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    destination: "Cappadocia, Turkey",
    price: "$1,150",
    image:
      "https://images.unsplash.com/photo-1712569836761-122b2aab02e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    destination: "Bora Bora, French Polynesia",
    price: "$2,450",
    image:
      "https://images.unsplash.com/photo-1563177682-a17cf7476571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yYSUyMEJvcmElMkMlMjBGcmVuY2glMjBQb2x5bmVzaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    destination: "Dubrovnik, Croatia",
    price: "$1,280",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const InternationalPackages = () => {
  return (
    <div className="my-20 pb-20 max-w-7xl mx-auto px-4">
      <div className="space-y-4 text-center mb-12">
        <Text
          type="caption"
          className="text-[#DF6951] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm"
        >
          Explore more
        </Text>

        <Text
          type="title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181E4B] leading-snug"
        >
          Our International Packages
        </Text>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {packagesData.map((item, index) => (
          <div
            key={item.id}
            className={`group relative flex flex-col overflow-hidden shadow-md hover:shadow-xl  hover:scale-[1.03] transition-all duration-300 cursor-pointer ${
              index === 2 ? "row-span-2" : "aspect-square"
            }`}
          >
            <img
              src={item.image}
              alt={item.destination}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[65%]"
            />
            <div className="relative z-10 flex items-end justify-between  px-3 py-4 h-full  text-center ">
              <span className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {item.destination}
              </span>
              <span className="text-[16px] font-semibold text-white mt-2">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalPackages;
