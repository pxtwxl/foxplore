import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tourData from "../data/tours.json";

export default function BestTours() {
  const tours = tourData.tours;
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const totalTours = tours.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleCount >= totalTours ? 0 : prevIndex + visibleCount
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalTours]);

  const visibleTours = tours.slice(
    currentIndex,
    Math.min(currentIndex + visibleCount, totalTours)
  );

  return (
    <motion.section
      className="py-20 bg-white"
      id="tours"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Best Tours
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Carefully curated experiences designed to inspire your next journey.
          Discover breathtaking destinations, unique adventures, and timeless
          memories.
        </motion.p>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {visibleTours.map((tour, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.2 }}
      whileHover={{ y: -10, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
    >
      <div className="overflow-hidden">
        <img
          src={`/images/${tour.mainImage}`}
          alt={tour.title}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-black mb-3">
          {tour.title}
        </h3>
        <p className="text-gray-600 text-sm mb-5">{tour.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-800 font-medium mb-5">
          <span>{tour.price}</span>
          <span>{tour.duration}</span>
        </div>
        <Link
          to={`/booking/${tour.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition inline-block text-center"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
