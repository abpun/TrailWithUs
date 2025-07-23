import { Link } from "react-router-dom";
import logo from "@/assets/common/home/logo.png"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and description */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img src={logo} alt="Domestico Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-5">
              Domestico.pl — Your journey starts here.
            </p>
          </div>

          {/* Flights */}
          <div>
            <h3 className="text-sm font-semibold text-white">Flights</h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/flights/popular", label: "Popular Routes" },
                { to: "/flights/deals", label: "Flight Deals" },
                { to: "/flights/search", label: "Search Flights" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/hotels", label: "Hotel Booking" },
                { to: "/car-rental", label: "Car Rental" },
                { to: "/travel-insurance", label: "Travel Insurance" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/faq", label: "FAQ" },
                { to: "/policy", label: "Privacy Policy" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Domestico.pl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
