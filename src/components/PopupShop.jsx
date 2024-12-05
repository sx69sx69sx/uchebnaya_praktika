import React, { useState, useEffect, useRef } from "react";
import shopImage from "../img/shop.png"; // Импорт изображения

const PopupShop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Устанавливаем видимость, когда секция в области просмотра
        }
      },
      { threshold: 0.2 } // Срабатывает, когда 20% секции видимо
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="bg-[#F3F3F3] flex justify-center py-12">
      <div
        ref={sectionRef}
        className="bg-white rounded-lg shadow-lg max-w-[1216px] w-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Левая часть - изображение */}
        <div className="w-full md:w-1/2">
          <img
            src={shopImage}
            alt="Popup Shop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая часть - текст */}
        <div className="w-full md:w-1/2 p-8">
          <h2
            className={`text-2xl font-bold mb-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Visit our popup shop
          </h2>
          <p
            className={`text-gray-700 mb-6 transition-all duration-700 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Willemsparkweg 63 <br />
            1071 GS Amsterdam <br />
            The Netherlands
          </p>
          <ul>
            {[
              { day: "Monday", hours: "12.00 - 19.00" },
              { day: "Tuesday", hours: "10.00 - 19.00" },
              { day: "Wednesday", hours: "10.00 - 19.00" },
              { day: "Thursday", hours: "10.00 - 21.00" },
              { day: "Friday", hours: "10.00 - 19.00" },
              { day: "Saturday", hours: "10.00 - 18.00" },
              { day: "Sunday", hours: "12.00 - 18.00" },
            ].map((item, index) => (
              <li
                key={item.day}
                className={`flex justify-between text-gray-600 mb-2 transition-all duration-700 ease-out ${
                  isVisible
                    ? `opacity-100 translate-y-0 delay-${(index + 1) * 700}`
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span>{item.day}</span>
                <span className="font-medium">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupShop;
