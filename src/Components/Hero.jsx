import React from "react";

export default function Hero() {
  return (
    <section className=" mt-8 relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/banner1.gif" // <- replace with your video path
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Discover the World with <span className="text-400">FOXplore</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow">
          From the serene beaches of Bali to the vibrant streets of Paris, your next adventure awaits.
          Explore destinations, find unique experiences, and travel sustainably with us.
        </p>

        <div className="mt-8">
          <a
            href="#trip"
            className="px-6 py-3 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Plan Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
