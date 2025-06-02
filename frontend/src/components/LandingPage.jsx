import React from "react";
import rent from '../assets/rent.jpg'
import { Home, Wrench, Calendar } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={rent}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Blur */}
      <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-md" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 pt-16">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Tenly</h1>
        <p className="text-xl max-w-xl mb-8 drop-shadow-md text-[#ffffff]">
          Simplifying your rental experience with powerful tools for tenants and managers.
        </p>

        {/* Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-10">
          <div className="flex flex-col items-center">
            <Home size={40} className="text-[#129B80] mb-2" />
            <p className="text-lg font-medium">Easy Rent Payments</p>
          </div>
          <div className="flex flex-col items-center">
            <Wrench size={40} className="text-[#129B80] mb-2" />
            <p className="text-lg font-medium">Fast Maintenance Requests</p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar size={40} className="text-[#129B80] mb-2" />
            <p className="text-lg font-medium">Event & Lease Calendar</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[#129B80] hover:bg-[#0f7f69] rounded-2xl text-white font-semibold transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-[#2C3E50] rounded-2xl font-semibold transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full bg-[#2C3E50] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Tenly — All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
