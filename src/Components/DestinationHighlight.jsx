import React from "react";
import { motion } from "framer-motion";

const DestinationHighlight = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
            alt="Destination"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            The Beauty of Venice
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Venice is unlike any other city in the world — a place where canals
            replace streets, and every corner reveals timeless charm. With its
            gondolas, grand palaces, and stunning architecture, Venice is the
            perfect blend of romance and history.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Whether you're exploring St. Mark’s Square, drifting along the
            canals at sunset, or enjoying authentic Italian cuisine, Venice
            promises an unforgettable experience. A journey here is more than a
            trip — it’s a step into a living masterpiece.
          </p>

          {/* Learn More Button */}
          <button className="px-6 py-2 border-2 border-black text-black font-medium rounded-lg shadow hover:bg-black hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationHighlight;
