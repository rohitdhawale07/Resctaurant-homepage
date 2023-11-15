import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("restaurants.json");
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setRestaurants([]);
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const renderStars = (rating) => {
    const totalStars = 6;
    const filledStars = Math.round(rating); // Assuming rating is out of 5
    const emptyStars = totalStars - filledStars;

    const starElements = [];

    // Adding filled stars
    for (let i = 0; i < filledStars; i++) {
      starElements.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M8 0l2 5 5.5.5-4 4 1 5-4.5-2L3 14l1-6L0 6l4-4z" />
        </svg>
      );
    }

    // Adding empty stars
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(
        <svg
          key={i + filledStars}
          xmlns="http://www.w3.org/2000/svg"
          fill="#B0B0B0"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M8 0l2 5 5.5.5-4 4 1 5-4.5-2L3 14l1-6L0 6l4-4z" />
        </svg>
      );
    }

    return <div className="flex">{starElements}</div>;
  };

  return (
    <div class="bg-gray-100 p-8">
      <Navbar />
      <hr/>
      <h1 className="text-3xl font-bold underline">Restaurants:</h1>
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="search"
      >
        Search for restaurants:{" "}
      </label>
      <input
        class="w-full p-2 border border-gray rounded-md mb-4"
        type="text"
        id="search"
        placeholder="Enter keywords"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <li
            class="bg-white p-4 rounded-md shadow-md"
            key={restaurant._id.$oid}
          >
            <h2 className="text-xl font-bold mb-2 flex items-center">
              {restaurant.name}
              <p className="text-gray-600 mr-2"></p>
              {renderStars(restaurant.rating)}
            </h2>
            <p className="text-gray-600 mb-2">
              Cuisine: {restaurant.type_of_food}
            </p>
            <p className="text-gray-600 mb-2">
              Location: {restaurant.address}
              {restaurant.address_line_2}, {restaurant.outcode}{" "}
              {restaurant.postcode}
            </p>
            <br />
            {/* <strong>Rating:</strong> {(restaurant.rating)} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
