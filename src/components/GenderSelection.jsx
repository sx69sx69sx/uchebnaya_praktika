import React from 'react';
import womensImage from '../img/woman.png';
import mensImage from '../img/man.png';
import arrowb from '../img/arrowblack.svg';

const GenderSelection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-40">

      <div className="group relative w-1/2 overflow-hidden rounded-l-xl">
        <img
          src={womensImage}
          alt="Women"
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex items-end via-transparent to-transparent left-20 bottom-10">
        <p className="text-black text-xl flex font-semibold uppercase tracking-wide transition-transform duration-300 ease-in-out group-hover:scale-110">
            Women <img src={arrowb} alt="arrow" className="ml-2" />
          </p>
        </div>
      </div>

      <div className="group relative w-1/2 overflow-hidden rounded-r-xl ">
        <img
          src={mensImage}
          alt="Men"
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex items-end via-transparent to-transparent left-20 bottom-10">
          <p className="text-black text-xl flex font-semibold uppercase tracking-wide transition-transform duration-300 ease-in-out group-hover:scale-110">
            Men <img src={arrowb} alt="arrow" className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
