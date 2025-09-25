import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutPage() {
  const sections = [
    {
      title: "Who We Are",
      text: `This gallery is more than just a collection of images and videos —
      it’s a celebration of travel, adventure, and exploration. We believe that
      every picture tells a story, and every video is a window into a new
      perspective.`,
      text2: `Our mission is to inspire people to see the beauty of the world,
      connect with different cultures, and spark curiosity for the journeys yet
      to come.`,
      img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Our Vision",
      text: `We imagine a world where creativity and discovery are limitless —
      where stories connect us and shared experiences bring us closer together.`,
      text2: `Through photography and film, we aim to shine a light on unseen
      corners of the world and inspire the next generation of explorers.`,
      img: "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Our Journey",
      text: `What started as a small collection has grown into a global
      showcase, capturing diverse landscapes and authentic moments from across
      the globe.`,
      text2: `Every milestone reminds us of our purpose: to celebrate the
      beauty of our planet and share it with the world.`,
      img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            About Our Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Capturing the world, one moment at a time. Discover the story behind
            our gallery and what inspires us to create.
          </p>
        </motion.div>
      </section>

      {/* Alternating Sections */}
      {sections.map((sec, i) => (
        <section
          key={i}
          className={`px-6 md:px-16 py-16 bg-${i % 2 === 0 ? "white" : "gray-50"} text-gray-800`}
        >
          <div
            className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {sec.title}
              </h2>
              <p className="text-lg leading-relaxed mb-4">{sec.text}</p>
              <p className="text-lg leading-relaxed">{sec.text2}</p>
            </motion.div>

            {/* Image block */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={sec.img}
                alt={sec.title}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Values / Features */}
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At the core of our work are values that guide every picture, every
            story, and every adventure we share.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Creativity",
              desc: "We believe in pushing boundaries and telling stories through unique perspectives.",
              icon: "🎨",
            },
            {
              title: "Inspiration",
              desc: "Our gallery exists to inspire wanderlust and spark curiosity about the world.",
              icon: "🌍",
            },
            {
              title: "Community",
              desc: "We celebrate diversity and connect people through shared experiences.",
              icon: "🤝",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
