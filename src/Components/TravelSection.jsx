import React from "react";

export default function TravelSection({
  title,
  description,
  buttonText,
  image,
  alignment = "left",
}) {
  const isLeft = alignment === "left";

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center md:items-stretch w-full`}
    >
      {/* IMAGE */}
      <div
        className={`relative w-full md:w-1/2 ${
          isLeft ? "order-1" : "order-2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* subtle gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isLeft
              ? "bg-gradient-to-r from-white/80 via-white/0 to-transparent"
              : "bg-gradient-to-l from-white/80 via-white/0 to-transparent"
          }`}
        />
      </div>

      {/* TEXT */}
      <div
        className={`relative flex flex-col justify-center p-8 md:w-1/2 bg-white ${
          isLeft ? "order-2" : "order-1"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
