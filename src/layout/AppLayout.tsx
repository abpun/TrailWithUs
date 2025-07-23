import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default AppLayout;
