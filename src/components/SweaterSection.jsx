import React from "react";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 
import sweaterImage from "../img/sweater.png"; 

const SweaterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 }); 


  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02 }, 
    }),
  };

  const quote =
    "First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase.";
  const author = "— Guera Latissa, Creative Director";

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center p-40">

      <div className="flex-1 relative max-w-xl bg-[#E7E7E7] rounded-lg">
        <img
          src={sweaterImage}
          alt="Man wearing sweater"
          className="w-full h-full object-cover rounded-md "
        />

        <button className="absolute bottom-7 left-7 bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-800">
          Shop Sweaters
        </button>
      </div>


      <div
        ref={ref} 
        className="flex-1 bg-[#FC7A1D] p-16 rounded-md shadow-lg text-black h-[600px] flex flex-col justify-center"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"} 
          className="text-5xl font-bold leading-relaxed"
        >

          {quote.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: quote.length * 0.03 }}
          className="mt-40 text-2xl font-medium text-black"
        >
          {author}
        </motion.p>
      </div>
    </div>
  );
};

export default SweaterSection;
