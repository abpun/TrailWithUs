import SandsOfAdventure from "@/assets/home/SandsOfAdventure.png"
import { ClientSpotlight } from "./home-features/ClientSpotlight";

const ClientFeedback = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center relative py-8 lg:py-0">
      <ClientSpotlight/>
      <img 
        src={SandsOfAdventure} 
        alt="SandsOfAdventure" 
        className="w-full lg:w-auto max-w-full h-auto object-cover mt-8 lg:mt-0 max-lg:hidden"
      />
    </div>
  );
};
export default ClientFeedback;