import Home from "@/pages/Home/home";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Home/>
      <Outlet />
    </div>
  );
};

export default AppLayout;
