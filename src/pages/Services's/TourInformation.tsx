import Packages from "@/assets/svg/TourPackages.svg";
import TourPackages from "@/assets/Services's/tour-packages.png";
import TourInfoList from "@/components/Services's/TourInfoList";
import { useParams } from "react-router";
import useFetch from "@/hooks/useFetch";
import Text from "@/components/common/text";

const TourInformation = () => {
  const params = useParams();

  if (!params.id) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Text type="title">Invalid tour ID</Text>
      </div>
    );
  }

  const { data, isLoading, error } = useFetch(
    `/services/${params.id}`, // Changed from /service/ to /services/
    ["service", params.id]
  );
  console.log(data)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Text type="title">Loading tour information...</Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        <Text type="title">Error loading tour</Text>
        <Text type="description">{error.message}</Text>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Text type="title">Tour not found</Text>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div>
            <img src={Packages} alt="About text" />
          </div>
        </div>
        <div className="filter brightness-[85%]">
          <img src={TourPackages} alt="hero img " />
        </div>
      </div>
      <TourInfoList tourData={data} />
    </div>
  );
};

export default TourInformation;
