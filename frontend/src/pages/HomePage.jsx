import React from "react";
import Navbar from "../components/Navbar";

const categories = [
  { id: 1, name: "Ahşap", image: "deneme.jpg" },
  { id: 2, name: "Metal", image: "deneme.jpg" },
  { id: 3, name: "Custom", image: "deneme.jpg" },
  { id: 4, name: "Canvas", image: "deneme.jpg" },
  { id: 5, name: "Halı", image: "deneme.jpg" },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);

  const handleMouseEnter = (id) => {
    setActiveCategory(id);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="bg-gray-[#FAF9F6] min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-full xl:mt-36 space-y-4 md:flex-row * md:justify-center md:items-center md:space-y-0 md:space-x-2 md:">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative transition-all duration-300 overflow-hidden bg-gray-200 cursor-pointer rounded-lg shadow-lg w-full h-64 md:rounded-full md:shadow-lg md:w-36 md:h-[576px] ${
              activeCategory === category.id ? "md:w-72 md:h-[576px]" : ""
            } ${
              activeCategory ? (activeCategory === category.id ? "z-10" : "md:transform md:scale-90") : ""
            }`}
            onMouseEnter={() => handleMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={category.image}
              alt={category.name}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                activeCategory === category.id ? "scale-100" : "scale-150"
              }`}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-xl transition-opacity duration-300 ${
                activeCategory === category.id ? "opacity-0" : "opacity-100"
              }`}
            >
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
