import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Tours",
    description:
      "Tailor-made travel experiences designed to match your style, interests, and pace.",
    icon: "🌍",
  },
  {
    title: "Luxury Stays",
    description:
      "Handpicked accommodations for ultimate comfort, class, and relaxation.",
    icon: "🏨",
  },
  {
    title: "Travel Assistance",
    description:
      "24/7 expert support to make your journey smooth, stress-free, and memorable.",
    icon: "🛫",
  },
  {
    title: "Group Packages",
    description:
      "Perfectly curated trips for families, friends, or corporate getaways.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          Our Services
        </h2>
        <p className="text-lg mt-4">
          We offer a range of services to make your travel unforgettable.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
