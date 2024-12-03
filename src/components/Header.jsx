import React from "react"; 
import dots from "../img/Dots.svg";
import sun from "../img/Sun.svg";
import first from "../img/FIRST.svg";
import light from "../img/LIGHT.svg";

const Header = () => {
  return (
    <header className="w-full">
      {/* Верхняя полоса */}
      <div className="bg-[#FC7A1D] text-black flex items-center justify-between py-1 px-4">
        <img src={dots} alt="Dots"  />
        <span 
          className="font-bold text-[14px] leading-[20px] tracking-[0.04em] uppercase text-center font-inter">
          Summer Sale Up To 50% Off
        </span>
        <img src={dots} alt="Dots" />
      </div>

      {/* Основной логотип */}
      <div className="bg-gray-100 flex items-center justify-center py-4">
        <div className="flex items-center space-x-3">
          <img src={first} alt="First" />
          <img src={sun} alt="Sun"/>
          <img src={light} alt="Light" />
        </div>
      </div>
    </header>
  );
};

export default Header;