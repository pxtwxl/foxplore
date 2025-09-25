import React from "react";
import { motion } from "framer-motion";

const DestinationHighlightRight = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            The Magic of Paris
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Paris — the city of light, love, and timeless culture. From the
            Eiffel Tower to the Louvre, every landmark tells a story. Wander
            through charming streets, enjoy world-class art, and savor French
            cuisine that will stay with you forever.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Whether it’s a romantic getaway or a cultural adventure, Paris
            offers something for everyone. It’s not just a destination — it’s an
            experience that will leave you enchanted.
          </p>

          {/* Learn More Button */}
          <button className="px-6 py-2 border-2 border-black text-black font-medium rounded-lg shadow hover:bg-black hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
            alt="Destination"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationHighlightRight;
