"use client";

import { Link } from "react-router-dom";
import logo from "../../assets/common/home/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <>
      <div className="absolute right-0 left-0 z-50 inset-0">
        <div className="flex my-5 justify-around items-center  ">
          <div className="w-fit ">
            <img className="w-32" src={logo} alt="logo" />
          </div>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <Link to="/home" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-1 p-2 w-[300px] border border-[rgba(217,217,217,0.34)]  backdrop-blur-[50px] rounded-lg shadow-lg whitespace-nowrap">
                  <Link
                    className="text-white hover:bg-[#839bba]  px-4 py-2 rounded-md transition-colors text-center truncate"
                    to={"/honeymoon-packages"}
                  >
                    Honeymoon Packages
                  </Link>
                  <Link
                    className="text-white hover:bg-[#839bba]  px-4 py-2 rounded-md transition-colors text-center truncate"
                    to={"/tour-packages"}
                  >
                    Tour Packages
                  </Link>
                  <Link
                    className="text-white hover:bg-[#839bba]  px-4 py-2 rounded-md transition-colors text-center truncate"
                    to={"/musical-events"}
                  >
                    Musical Events
                  </Link>
                  <Link
                    className="text-white hover:bg-[#839bba]  px-4 py-2 rounded-md transition-colors text-center truncate font-medium"
                    to={"/build-package"}
                  >
                    Build Package
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/Upcomming Packages"
                  className={navigationMenuTriggerStyle()}
                >
                  Upcomming Packages
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Button
              className="bg-[#DF6951] hover:bg-[#c3533d]"
              variant={"default"}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
