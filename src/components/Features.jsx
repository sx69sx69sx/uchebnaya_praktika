import React from "react";
import "../features.css";

import cotton from "../img/hlopok.png";
import fabric from "../img/fabric.png";
import nails from "../img/nails.png";

import dropwater from "../img/dropwater.svg";
import box from "../img/box.svg";
import box2 from "../img/box2.svg";
import star from "../img/star.svg";

const Features = () => {
  const topFeatures = [
    {
      img: cotton,
      title: "100% Premium Cotton",
      subtitle: "We use ethically sourced cotton only.",
    },
    {
      img: nails,
      title: "Made in Portugal",
      subtitle: "With hand finished details",
    },
    {
      img: fabric,
      title: "Breathable material",
      subtitle: "Keeping you cool throughout the day",
    },
  ];

  const bottomFeatures = [
    {
      icon: dropwater,
      title: "Premium stain resistant fabrics",
    },
    {
      icon: box,
      title: "Free Express Shipping",
    },
    {
      icon: box2,
      title: "Free returns within 30 days",
    },
    {
      icon: star,
      title: "Customers rate us 4.8 / 5.0",
    },
  ];

  return (
    <div className="features-container">

      <h2 className="features-title">We always have your back</h2>
      <div className="features-top">
 
        <div className="feature-left">
          <img src={cotton} alt="100% Premium Cotton" className="feature-img" />
          <div className="feature-overlay">
            <h3>100% Premium Cotton</h3>
            <p>We use ethically sourced cotton only.</p>
          </div>
        </div>
 
        <div className="feature-right">
          <div className="feature-item">
            <img src={nails} alt="Made in Portugal" className="feature-img" />
            <div className="feature-overlay">
              <h3>Made in Portugal</h3>
              <p>With hand finished details</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={fabric} alt="Breathable material" className="feature-img" />
            <div className="feature-overlay">
              <h3>Breathable material</h3>
              <p>Keeping you cool throughout the day</p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="features-bottom">
        {bottomFeatures.map((feature, index) => (
          <div key={index} className="bottom-feature">
            <div className="icon-container">
              <img src={feature.icon} alt={feature.title} className="bottom-icon" />
            </div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Features;
