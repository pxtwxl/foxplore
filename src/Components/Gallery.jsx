import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/6813355/pexels-photo-6813355.jpeg", 
  "https://images.pexels.com/photos/3264722/pexels-photo-3264722.jpeg", 
  "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg", 
  "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg", 
  "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg", 
  "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg", 
  "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg", 
  "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white text-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Travel Gallery
        </h2>
        <p className="text-gray-600 mt-2">Discover breathtaking destinations</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 border-2 border-black text-black font-semibold rounded-lg shadow hover:bg-black hover:text-white transition-colors duration-300">
          View Gallery
        </button>
      </div>
    </section>
  );
};

export default Gallery;