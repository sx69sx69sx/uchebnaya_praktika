import React, { useState, useEffect } from "react";
import shirt1 from "../img/shirt1.png";
import shirt2 from "../img/skirt4.png";
import shirt3 from "../img/skirt5.png";
import prevIcon from "../img/ArrowLeft.svg";
import nextIcon from "../img/ArrowRight.svg";
import womanShirt from "../img/model1.jpg";

const ProductSection = () => {
  const images = [shirt1, shirt2, shirt3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <div className="relative w-80 h-96 mx-auto">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <img src={prevIcon} alt="Previous" className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <img src={nextIcon} alt="Next" className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">Basic Shirt</h2>
          <p className="text-gray-600">€49</p>
        </div>
      </div>


      <div className="flex-1 relative">
        <img
          src={womanShirt}
          alt="Woman wearing a white shirt"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />

        <button className="absolute bottom-4 left-20 bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-800">
          Shop Shirts
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
