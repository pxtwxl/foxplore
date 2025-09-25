import React from "react";
import { motion } from "framer-motion";


const Heading = () => {
  return (
    <section className="bg-white text-black mt-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          BLOGS
        </h2>
        <p className="text-lg mt-4">
          Explore our latest travel insights, tips, and stories.
        </p>
      </motion.div>
    </section>
  );
};

export default Heading;
