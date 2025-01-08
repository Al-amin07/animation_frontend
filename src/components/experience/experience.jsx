import { motion } from "framer-motion";
import HeroSection from "./heroSection";
export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-[1400px] mx-auto py-24 px-28"
    >
      <p className="text-5xl font-semibold leading-[70px] w-1/2">
        Let our experienced team elevate your digital goals
      </p>
      <div className="flex mt-16 justify-between items-center">
        <div className=" flex-1 flex gap-12">
          <div>
            <h1 className=" text-6xl font-bold mb-6">250</h1>
            <p className=" text-2xl font-medium text-neutral-700">
              Five-Star Reviews
            </p>
          </div>
          <div>
            <h1 className=" text-6xl font-bold mb-6">10</h1>
            <p className=" text-2xl font-medium text-neutral-700">
              In-House Experts
            </p>
          </div>
        </div>
        <div className=" flex-1 ">
          <p className="text-2xl font-medium text-neutral-700">
            We have successfully completed over 300+ projects from a variety of
            industries. In our team, designers work alongside developers and
            digital strategists, we believe this is our winning recipe for
            creating digital products that make an impact.
          </p>
        </div>
      </div>
      <HeroSection />
    </motion.div>
  );
}
