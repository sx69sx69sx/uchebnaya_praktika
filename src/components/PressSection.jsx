import React from "react";
import BloombergLogo from "../img/Bloomberg.svg";
import ForbesLogo from "../img/Forbes.svg";
import FastCompanyLogo from "../img/Fastcompany.svg";

const PressSection = () => {
  const articles = [
    {
      logo: <img src={BloombergLogo} alt="Bloomberg Logo" className="w-28" />,
      text: "“First Light: Where great design and the finest materials unite in ultimate comfort”",
      link: "#",
    },
    {
      logo: <img src={ForbesLogo} alt="Forbes Logo" className="w-20" />,
      text: "“First light proves it is possible to combine great design with the finest materials available.”",
      link: "#",
    },
    {
      logo: (
        <img src={FastCompanyLogo} alt="Fast Company Logo" className="w-36" />
      ),
      text: "“Redefining excellence with premium materials and visionary robust design.”",
      link: "#",
    },
  ];

  return (
    <div className="py-12 px-40 bg-white">
      <h2 className="text-5xl font-bold text-center mb-24">Hot off the press</h2>
      <div className="flex justify-between items-stretch gap-6 border rounded-lg shadow-sm p-6 bg-white">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-between px-4 relative"
          >
            <div className="flex justify-center mb-4">{article.logo}</div>
            <p className="text-black text-center mb-6">{article.text}</p>
            <a
              href={article.link}
              className="text-purple-600 font-semibold text-center hover:underline"
            >
              READ ARTICLE &#8599;
            </a>
            {index < articles.length - 1 && (
              <div className="absolute top-4 bottom-4 right-0 border-r border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressSection;
