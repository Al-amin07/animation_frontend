"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full h-[550px] 
     bg-white flex items-center mt-16 justify-center overflow-hidden"
    >
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="relative  w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute  w-full inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto  px-4 py-32 sm:px-6 flex  justify-center items-center lg:px-8">
          <div className="relative z-10 text-center">
            <h1 className="text-[80px] font-bold leading-tight text-neutral-100 tracking-tight">
              Crafting digital
              <br />
              <span className="bg-gradient-to-r ml-16 from-blue-400 via-indigo-500 to-blue-400 text-transparent bg-clip-text">
                experiences
              </span>
              <br />
              <span className="mr-32"> since 2004</span>
            </h1>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
