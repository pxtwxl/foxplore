import React from "react";

const FadeImageLeft = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        {/* Image with gradient fade */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
            alt="Travel Experience"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay (fade towards right side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white"></div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 relative z-10">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            WHY TRAVEL WITH US?
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Traveling opens the door to unforgettable adventures, cultural
            experiences, and cherished memories. With us, you won’t just visit a
            destination — you’ll experience it like a local. Whether it’s
            exploring hidden gems, enjoying world-class accommodations, or
            embarking on thrilling excursions, we make sure your journey is
            extraordinary.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default FadeImageLeft;
