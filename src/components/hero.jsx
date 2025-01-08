"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedButton from "./AnimatedButton";
import ToggleButton, { NormalButton } from "./toggle-button";

export default function Hero() {
  return (
    <div className="px-16 py-12 md:py-24  bg-white">
      <div className="space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="text-[120px] leading-[120px] mb-32 mt-4 font-semibold tracking-tight"
        >
          Crafting <span className="text-[#4B4BF5]">Digital</span>
          <br />
          Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className=" flex justify-between items-center "
        >
          <div className="flex  items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-black text-white rounded-full h-16 w-16 flex items-center justify-center font-bold">
                500
              </div>
              <span className="text-gray-600 text-2xl">
                Satisfied Customers
              </span>
            </div>
          </div>

          <div
            className=" flex items-center  w-[610px]  
          "
          >
            <p className="text-[22px] w-[550px]  font-medium   text-gray-800 ">
              We build engaging websites, powerful applications and e-commerce
              solutions.
            </p>
            <NormalButton
              border="0"
              bg="#545CFF"
              color="white"
              text={"Case Studies Two"}
            ></NormalButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
