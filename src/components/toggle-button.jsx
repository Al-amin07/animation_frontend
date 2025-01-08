import { useState } from "react";
import "./toggle-button.css";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "../components/toggle-button.css";
export default function ToggleButton({ text }) {
  return (
    <div className="button-container">
      <button className="animated-button">
        <span className="button-text">{text}</span>
      </button>
    </div>
  );
}

export function NormalButton({
  text,
  border = "#4a53f9",
  color = "black",
  bg = "white",
  radius = "full",
  px = "45px",
  py = "15px",
}) {
  return (
    <div className="button-container">
      <button
        style={{
          padding: `${py} ${px}`,
          backgroundColor: bg,
          border: `1px solid ${border}`,
        }}
        className={`rounded-${radius} normal-button text-nowrap`}
      >
        <span style={{ color }} className="button-text text-2xl ">
          {text}
        </span>
      </button>
    </div>
  );
}

export function CircleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const array = ["Facebook", "Instagram", "Linkedin", "Twitter"];
  return (
    <>
      <div className="button-containe">
        <div className="circle-button" onClick={() => setIsOpen(true)}>
          <Menu className="h-4 w-4 circle-text" />
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay " onClick={() => setIsOpen(false)}>
          <div
            className="modal-content rounded-[25px] p-16 bg-neutral-900 text-white relative top-10 w-8/12 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex  justify-between items-center">
              <h1 className=" text-2xl font-medium text-white">Navigation</h1>
              <button
                className=" hover:scale-105 transition-transform duration-500 border p-1 rounded-full  border-slate-500 bg-slate-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className=" space-y-8 mt-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className=" flex gap-4 items-center"
              >
                <div className=" text-container ">
                  <h1 className=" text text-6xl  font-semibold">
                    Case Studies
                  </h1>
                </div>
                <div className="border border-slate-500 p-4 flex items-center justify-center rounded-full">
                  <span className=" text-2xl">13</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className=" text-container "
              >
                <h1 className=" text text-6xl  font-semibold">Our Agency</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className=" text-container "
              >
                <h1 className=" text text-6xl  font-semibold">Contact Us</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className=" text-container "
              >
                <h1 className=" text text-6xl  font-semibold">News</h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className=" flex justify-between items-center mt-12"
            >
              <div className=" ">
                <h2 className=" text-slate-500 font-medium">Follow us</h2>
                <div className=" flex gap-4">
                  {array.map((el) => (
                    <span
                      key={el}
                      className="text-lg cursor-pointer text-capitalize "
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>
              <NormalButton
                color="white"
                bg="#545CFF"
                px="40px"
                text={"Get in touch"}
                border="0"
              />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
