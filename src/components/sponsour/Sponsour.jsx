import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../../../public/brand/1.png";
import { useRef } from "react";
const sponsors = [
  {
    id: 1,
    name: "TGA",
    image: "https://i.ibb.co.com/JxHDYN8/1.png",
  },
  {
    id: 2,
    name: "Luxe Collective",
    image: "https://i.ibb.co.com/nn7Jrtk/2.png",
  },
  {
    id: 3,
    name: "Richemont",
    image: "https://i.ibb.co.com/8cGHd94/3.png",
  },
  {
    id: 4,
    name: "JB Capital Markets",
    image: "https://i.ibb.co.com/TRZWLqj/4.png",
  },
  {
    id: 5,
    name: "JB Capital Markets",
    image: "https://i.ibb.co.com/XFVyx9k/5.png",
  },
];

export default function Sponsour() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  const text =
    "From ambitious startups to global companies, we partner with great businesses and industry leaders.";
  const words = text.split(" ");
  const lastTexts = "Elevate your digital presence".split(" ");

  return (
    <section className="py-24 px-28">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="  flex gap-5 flex-wrap mb-16"
        >
          {words.map((el, ind) => (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: ind * 0.1 }}
              className="text-[57px] leading-[1.1] font-medium"
              key={ind * Math.random()}
            >
              {el}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-5 gap-12 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              className="  h-48 w-48 cursor-pointer "
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full transition-all hover:scale-110  duration-500 bg-blend-multiply h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
        <section ref={targetRef} className="relative mt-12 h-[100vh]">
          <div className="sticky top-16 h-[200px] flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-16 pl-24"
              initial={{ x: "0%" }}
              transition={{ duration: 0.8 }}
              // scrollYProgress={scrollYProgress}
            >
              {lastTexts?.map((el, ind) => (
                <h1 key={el} className="text-[200px] leading-[1.1] font-medium">
                  {el}
                </h1>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
