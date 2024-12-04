import React from "react";
import Slider from "react-slick";

import m1 from "../img/m1.png";
import m2 from "../img/m2.png";
import m3 from "../img/m3.png";
import m4 from "../img/m5.png";

import "../carousel.css"; 


const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-arrow next-arrow"
    onClick={onClick}
    aria-label="Next"
  >
    ➡
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="custom-arrow prev-arrow"
    onClick={onClick}
    aria-label="Previous"
  >
    ⬅
  </button>
);

const Carousel = () => {
  const items = [
    { img: m1, title: "Basic Shirt", price: "€49" },
    { img: m2, title: "Beige Jumper", price: "€99" },
    { img: m3, title: "Signature Jacket", price: "€249" },
    { img: m4, title: "Navy Jumper", price: "€249" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 px-6 bg-white">
      <h2 className="text-5xl font-bold text-center mb-6">
        Women — Must Haves
      </h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4">
            <div className="p-4 text-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto mb-4 "
              />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-700 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
