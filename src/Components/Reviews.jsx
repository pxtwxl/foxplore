import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sophia Johnson",
    text: "The trip was perfectly organized. Every detail was handled flawlessly. Truly unforgettable experience!",
    location: "New York, USA",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    text: "From luxury stays to hidden gems, this service made my travel experience seamless and exciting. Loved every moment!",
    location: "Mumbai, India",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    stars: 4,
  },
  {
    name: "Emily Carter",
    text: "I’ve traveled with many companies, but this was by far the most stress-free and enjoyable. The guides were excellent!",
    location: "London, UK",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    stars: 5,
  },
  {
    name: "Liam Brown",
    text: "The team handled everything perfectly. Great hotels, smooth transfers, and amazing guides!",
    location: "Sydney, Australia",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    stars: 4,
  },
    {
    name: "Sophia Johnson",
    text: "The trip was perfectly organized. Every detail was handled flawlessly. Truly unforgettable experience!",
    location: "New York, USA",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    text: "From luxury stays to hidden gems, this service made my travel experience seamless and exciting. Loved every moment!",
    location: "Mumbai, India",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    stars: 4,
  },
  {
    name: "Emily Carter",
    text: "I’ve traveled with many companies, but this was by far the most stress-free and enjoyable. The guides were excellent!",
    location: "London, UK",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    stars: 5,
  },
  {
    name: "Liam Brown",
    text: "The team handled everything perfectly. Great hotels, smooth transfers, and amazing guides!",
    location: "Sydney, Australia",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    stars: 4,
  },
];

const Reviews = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase">What Our Travelers Say</h2>
        <p className="text-lg mt-4">Real stories from our happy explorers.</p>
      </motion.div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 h-auto flex flex-col"
            >
              {/* Top section: profile + name + stars */}
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex space-x-1 text-yellow-400 mt-1">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.401 8.176L12 18.897l-7.335 3.872 1.401-8.176L.132 9.211l8.2-1.193z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              {/* Review text */}
              <p className="text-sm leading-relaxed">“{review.text}”</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Prev
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Next
        </button>
      </div> */}
    </section>
  );
};

export default Reviews;
