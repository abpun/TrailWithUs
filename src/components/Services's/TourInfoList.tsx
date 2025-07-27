import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Information from "./TourInfoOverView/Information";
import Tour_Plan from "./TourInfoOverView/Tour_Plan";
import Location from "./TourInfoOverView/Location";
import Gallery from "./TourInfoOverView/Gallery";

const TourInfoList = () => {
  return (
    <div className="relative w-full">
      <Tabs
        defaultValue="information"
        className="w-full relative max-w-7xl mx-auto gap-0"
      >
        <TabsList className="w-full justify-around lg:absolute lg:-top-5 h-20 rounded-none">
          <TabsTrigger className="rounded-none w-fit" value="information">
            Information
          </TabsTrigger>
          <TabsTrigger className="rounded-none w-fit" value="tour_plan">
            Tour Plan
          </TabsTrigger>
          <TabsTrigger className="rounded-none w-fit" value="location">
            Location
          </TabsTrigger>
          <TabsTrigger className="rounded-none w-fit" value="gallery">
            Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent className="w-full bg-white lg:mt-10" value="information">
          <Information />
        </TabsContent>
        <TabsContent className="w-full" value="tour_plan">
          <Tour_Plan />
        </TabsContent>
        <TabsContent className="w-full" value="location">
          <Location />
        </TabsContent>
        <TabsContent className="w-full" value="gallery">
          <Gallery />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TourInfoList;
