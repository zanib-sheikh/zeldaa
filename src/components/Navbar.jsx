import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Linkkk from "../assets/Linkkk.png";

const Navbar = () => {
  const location = useLocation(); // Get current route

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  // Dynamic top margin based on route
  const navbarTop = location.pathname === "/" ? "top-[50px]" : "top-[10px]";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`absolute ${navbarTop} px-4 font-kanit z-20 left-0 w-full transition-all duration-300 ${
          isActive("/lin") || isActive("/fala") ? "bg-[#706FAB] top-0" : "bg-transparent"
        }`}
      >
       <div className="container mx-auto flex justify-end items-center px-2 py-3">
  {/* Logo */}
  <div className="flex items-center pl-2 mr-auto">
    <img src={Linkkk} alt="Logo" className="w-12 mt-4 h-12" />
  </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-end justify-end text-end  pr-20 space-x-12 text-white font-roboto">
   
            {/* Main Navbar Items */}
            {!isActive("/fala") &&
              !isActive("/fala/nominees") &&
              !isActive("/fala/winners") &&
              !isActive("/fala/resources") ? (
              <>
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/fala", label: "FALA" },
                  { path: "/lin", label: "LIN" },
                  { path: "/tv", label: "TV" },
                  { path: "/our-impact", label: "Our Impact" },
                  { path: "/media", label: "Media" },
                  { path: "/blog", label: "Blog" },
                ].map(({ path, label }) => (
                  <li key={path} className="cursor-pointer">
                    <Link
                      to={path}
                      className={`transition-colors ${
                        isActive(path) ? "font-extrabold text-[#92ffd5]" : "hover:text-green-500"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              // FALA Navbar Items
              <>
                {[
                  { path: "/", label: "Home" }, // Home link to go back
                  { path: "/fala", label: "FALA" },
                  { path: "/fala/winners", label: "Winners" },
                  { path: "/fala/nominees", label: "Nominees" },
                  { path: "/fala/resources", label: "Resources" },
                ].map(({ path, label }) => (
                  <li key={path} className="cursor-pointer">
                    <Link
                      to={path}
                      className={`transition-colors ${
                        isActive(path) ? "font-extrabold text-[#92ffd5]" : "hover:text-green-500"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>

          {/* Give Now Button */}
          <Link to="/give-now">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`hidden md:block text-white px-4 py-2 rounded-md transition ${
      location.pathname === "/give-now" ? "bg-orange-500" : "bg-[#76B99A] hover:bg-green-500"
    }`}
  >
    Give Now
  </motion.button>
</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
