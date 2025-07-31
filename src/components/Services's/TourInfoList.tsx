import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tour_Plan from "./TourInfoOverView/Tour_Plan";
import Location from "./TourInfoOverView/Location";
import Gallery from "./TourInfoOverView/Gallery";
import Information from "./TourInfoOverView/Information";





interface Adventure {
  _id: string;
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  departure_date: string;
  participants: number;
  image: string;
  rating: number;
  destination: string;
  reviewCount: number;
  information: Information;
  tourPlan: TourPlan;
  location: Location;
  gallery: Gallery;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  success: boolean;
  data: Adventure;
  message: string;
}

const TourInfoList = ({ tourData }: { tourData: ApiResponse }) => {
  const information = tourData?.data?.information;
  const tourPlan = tourData?.data?.tourPlan;
  const location = tourData?.data?.location;
  const gallery = tourData?.data?.gallery;

  return (
    <div className="relative w-full">
      <Tabs
        defaultValue="information"
        className="w-full relative max-w-7xl mx-auto gap-0"
      >
        <TabsList className="w-full justify-around lg:absolute lg:-top-5 h-20 rounded-none p-0 m-0 ">
          <TabsTrigger
            value="information"
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white  data-[state=active]:shadow-none"
          >
            Information
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white  data-[state=active]:shadow-none"
            value="tour_plan"
          >
            Tour Plan
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white  data-[state=active]:shadow-none"
            value="location"
          >
            Location
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white  data-[state=active]:shadow-none"
            value="gallery"
          >
            Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent className="w-full bg-white lg:mt-12" value="information">
          <Information data={information} />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="tour_plan">
          <Tour_Plan />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="location">
          <Location />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="gallery">
          <Gallery />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TourInfoList;
