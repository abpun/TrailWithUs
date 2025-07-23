import SandsOfAdventure from "@/assets/home/SandsOfAdventure.png"
import { ClientSpotlight } from "./home-features/ClientSpotlight";

const ClientFeedback = () => {
  return (
    <div className=" flex justify-center items-center relative">
      <ClientSpotlight/>
      <img src={SandsOfAdventure} alt="SandsOfAdventure" />
    </div>
  );
};
export default ClientFeedback;
