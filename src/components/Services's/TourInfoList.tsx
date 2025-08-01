import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tour_Plan from "./TourInfoOverView/Tour_Plan";
import Location from "./TourInfoOverView/Location";
import Gallery from "./TourInfoOverView/Gallery";
import Information from "./TourInfoOverView/Information";
import { type ApiResponse } from "@/types/tour";

const TourInfoList = ({ tourData }: { tourData: ApiResponse }) => {
  return (
    <div className="relative w-full">
      <Tabs
        defaultValue="information"
        className="w-full relative max-w-7xl mx-auto gap-0"
      >
        <TabsList className="w-full justify-around lg:absolute lg:-top-5 h-20 rounded-none p-0 m-0">
          <TabsTrigger
            value="information"
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white data-[state=active]:shadow-none"
          >
            Information
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white data-[state=active]:shadow-none"
            value="tour_plan"
          >
            Tour Plan
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white data-[state=active]:shadow-none"
            value="location"
          >
            Location
          </TabsTrigger>
          <TabsTrigger
            className="m-0 p-0 border-0 bg-transparent appearance-none rounded-none w-fit border-none data-[state=active]:bg-white data-[state=active]:shadow-none"
            value="gallery"
          >
            Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent className="w-full bg-white lg:mt-12" value="information">
          <Information
            data={tourData.data.information}
            name={tourData.data.name}
            price={tourData.data.price}
            priceUnit={tourData.data.priceUnit}
            rating={tourData.data.rating}
            reviewCount={tourData.data.reviewCount}
            image={tourData.data.image}
            gallery={tourData.data.gallery}
          />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="tour_plan">
          <Tour_Plan data={tourData.data.tourPlan} />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="location">
          <Location data={tourData.data.location} />
        </TabsContent>
        <TabsContent className="w-full bg-white lg:mt-12" value="gallery">
          <Gallery data={tourData.data.gallery} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TourInfoList;
