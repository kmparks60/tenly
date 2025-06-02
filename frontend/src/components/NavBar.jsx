import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2C3E50]/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white text-sm">
        <div className="font-bold text-lg text-[#129B80]">Tenly</div>
        <div className="space-x-6">
          <Link
            to="/"
            className={`hover:text-[#129B80] transition ${
              location.pathname === "/" ? "text-[#129B80] font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/rent"
            className={`hover:text-[#129B80] transition ${
              location.pathname === "/rent" ? "text-[#129B80] font-semibold" : ""
            }`}
          >
            Make a Payment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
