import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log({ isHovered });
  return (
    <div className="flex items-center justify-center  ">
      <motion.button
        className="relative overflow-hidden px-16 py-5 rounded-2xl  text-black "
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={isHovered ? { y: -100 } : { y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {text}
        </motion.span>

        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "100%" }}
          animate={isHovered ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
