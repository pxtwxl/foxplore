import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import toursData from "../data/tours.json";
import BestTours from "../Components/BestTours";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


export default function TourDetail() {
  const { id } = useParams();
  const tour = toursData.tours.find((t) => t.id === id);

  const [openDay, setOpenDay] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slideshow every 5s
  useEffect(() => {
    if (tour?.gallery?.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tour.gallery.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [tour]);

  if (!tour) {
    return (
      <div className="max-w-3xl mx-auto mt-20 p-8 text-center text-xl">
        Tour not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slideshow */}
<div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] mt-16 overflow-hidden">
  {tour.gallery && tour.gallery.length > 0 ? (
    <div
      className="flex transition-transform duration-700 ease-in-out h-full"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {tour.gallery.map((img, idx) => (
        <div key={idx} className="w-full h-full flex-shrink-0">
          <img
            src={`/images/${img}`} // ✅ from public/images
            alt={`${tour.title} ${idx}`}
            className="w-full h-full object-cover"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/1200x600?text=Tour+Image")
            }
          />
        </div>
      ))}
    </div>
  ) : (
    <img
      src="/images/base-img.jpg" // ✅ fallback
      alt={tour.title}
      className="w-full h-full object-cover"
    />
  )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            {tour.title}
          </h1>
          <button
          onClick={() => navigate(`/booking/${tour.id}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition"
        >
          Book Now
        </button>
        </div>

        {/* Prev / Next Buttons */}
        {tour.gallery && tour.gallery.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + tour.gallery.length) % tour.gallery.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % tour.gallery.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
            >
              ›
            </button>
          </>
        )}

        {/* Slideshow Dots */}
        {tour.gallery && tour.gallery.length > 1 && (
          <div className="absolute bottom-5 flex justify-center w-full space-x-2">
            {tour.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 py-12">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-10">
          {/* Gallery Section */}
{tour.gallery && tour.gallery.length > 0 && (
  <section>
    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Gallery</h2>

    <div className="relative overflow-hidden">
      {/* Image Row */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${(tour.gallery.length / 3) * 100}%`,
          transform: `translateX(-${(100 / tour.gallery.length) * currentIndex}%)`,
        }}
      >
        {tour.gallery.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-2 cursor-pointer"
            style={{ width: "200px", height: "180px" }} // fixed size
            onClick={() => setLightboxIndex(idx)}
          >
            <img
              src={`/images/${img}`}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover rounded shadow hover:opacity-80 transition"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x300?text=Image")
              }
            />
          </div>
        ))}
      </div>

                {/* Prev/Next Controls */}
                {tour.gallery.length > 3 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentIndex(
                          (prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-opacity-10 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % tour.gallery.length)
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-opacity-10 text-white px-3 py-2 rounded-full hover:bg-opacity-10"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </section>
          )}







          {/* Highlights */}
          {tour.highlights && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white rounded shadow px-4 py-2 text-gray-700 flex items-start gap-2"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Itinerary */}
          {tour.itinerary && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Itinerary & Details
              </h2>
              <div className="space-y-4">
                {tour.itinerary.map((day, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded shadow overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenDay(openDay === idx ? null : idx)
                      }
                      className="w-full flex justify-between items-center p-4 text-left font-semibold text-blue-600 hover:bg-blue-50 transition"
                    >
                      <span>
                        Day {idx + 1}: {day.title}
                      </span>
                      <span>{openDay === idx ? "−" : "+"}</span>
                    </button>
                    {openDay === idx && (
                      <div className="p-4 border-t text-gray-700 leading-relaxed space-y-2">
                        {day.details ? (
                          Array.isArray(day.details) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {day.details.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{day.details}</p>
                          )
                        ) : (
                          <p>{day.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Description */}
          {tour.description && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Description
              </h2>
              <div className="bg-white rounded shadow p-6 text-gray-800 leading-relaxed">
                {tour.description}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Booking Box */}
          <div className="bg-white rounded shadow p-6" id="booking">
            <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
            <div className="mb-2">
              <span className="font-semibold">Duration: </span>
              {tour.duration}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Price: </span>
              <span className="text-green-600 font-bold">{tour.price}</span>
            </div>
            <button
            onClick={() => navigate(`/booking/${tour.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition"
          >
            Book Now
          </button>
          </div>

          {/* Trip Facts */}
          <div className="bg-white rounded shadow p-6">
            <h4 className="text-xl font-semibold mb-4 text-blue-700">
              Trip Facts
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Country:</span> {tour.country}
              </li>
              {tour.groupSize && (
                <li>
                  <span className="font-semibold">Group Size:</span>{" "}
                  {tour.groupSize}
                </li>
              )}
              {tour.meals && (
                <li>
                  <span className="font-semibold">Meals:</span> {tour.meals}
                </li>
              )}
              {tour.accommodation && (
                <li>
                  <span className="font-semibold">Accommodation:</span>{" "}
                  {tour.accommodation}
                </li>
              )}
            </ul>
          </div>

          {/* Help Box */}
          <div className="bg-blue-50 rounded shadow p-6">
            <h5 className="text-lg font-semibold mb-2 text-blue-700">
              Need Help?
            </h5>
            <p className="text-gray-700 mb-2">
              Contact our travel experts for customizations and queries.
            </p>
            <a
              href="mailto:info@yourdomain.com"
              className="text-blue-600 underline"
            >
              info@yourdomain.com
            </a>
          </div>
        </div>
      </div>
      <BestTours />
      <Reviews />
      <Footer />
    </div>
  );
}
