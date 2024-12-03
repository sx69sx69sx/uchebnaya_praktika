import React from "react";
import springImage from "../img/bgfirst.png"; // замените на реальное изображение
import numeroLogo from "../img/Numero.svg";
import businessInsiderLogo from "../img/BI.svg";
import kinfolkLogo from "../img/KF.svg";
import fashionBeansLogo from "../img/FB.svg";
import hypebeastLogo from "../img/HB.svg";
import arrow from "../img/Arrow.svg";

const SpringSeasonBlock = () => {
  return (
    <section className="w-full">
      <div className="relative">
        <img src={springImage} alt="Spring Season" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex pt-[600px] justify-between px-20 text-white">
          <div>
            <h2 className="text-3xl font-bold">Spring Season</h2>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center text-white text-base font-bold hover:underline"
            >
              View Collection <span className="ml-2"><img src={arrow} alt="Numéro" className="h-3" /></span>
            </a>
          </div>
        </div>
      </div>


      <div className="bg-[#FC7A1D] py-16">
        <div className="container mx-auto flex justify-around items-center px-50">
          <img src={numeroLogo} alt="Numéro" className="h-10" />
          <img src={businessInsiderLogo} alt="Business Insider" className="h-10" />
          <img src={kinfolkLogo} alt="Kinfolk" className="h-10" />
          <img src={fashionBeansLogo} alt="Fashion Beans" className="h-10" />
          <img src={hypebeastLogo} alt="Hypebeast" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default SpringSeasonBlock;
