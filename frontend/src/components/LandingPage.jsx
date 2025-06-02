import React from "react";
import rent from '../assets/rent.jpg'



function LandingPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={rent}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-xs" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Tenly</h1>
        <p className="text-xl max-w-xl mb-8 drop-shadow-md">
          Your all-in-one portal for hassle-free renting — manage your lease, communicate with staff, and stay informed.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl text-white font-semibold transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-2xl font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
