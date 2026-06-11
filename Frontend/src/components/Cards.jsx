
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition transform hover:scale-105 duration-300">
      
      <img
        src={item.coverImage || item.image}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      
      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2 text-gray-800">
          {item.title}
        </h2>

        {/* Author & Price */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-600">
            {item.author}
          </p>

          {item.price === "Free" ? (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Free
            </span>
          ) : (
                    <button
  onClick={() =>
    navigate("/buy", {
      state: item,
    })
  }
  className="bg-[#895129] text-white text-xs px-3 py-2 rounded-full"
>
  Buy Course ₹{item.price}
</button>
          )}
        </div>

        {/* Description */}
        {showDetails && (
          <p className="text-gray-600 text-sm mb-3">
            {item.description || "No description available"}
          </p>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full border border-gray-300 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
    </div>
  );
}

export default Cards;