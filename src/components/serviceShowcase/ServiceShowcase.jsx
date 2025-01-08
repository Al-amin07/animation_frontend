import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import Image from "../../../public/images.jpeg";
import { motion } from "framer-motion";
import { NormalButton } from "../toggle-button";
export default function ServicesShowcase() {
  return (
    <div className="bg-black text-white min-h-screen px-16 pt-16 pb-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl  mb-7 font-light">
          Our team of experts can help you with...
        </h2>

        <div className=" mb-16 ">
          <div className=" flex  py-5 justify-between items-center group ">
            <h3 className="text-6xl  group-hover:scale-95 transition-transform duration-500  cursor-pointer">
              E-commerce
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden group-hover:flex"
            >
              <div className="  flex gap-8 items-center justify-between  cursor-pointer">
                <div className="">
                  <p className=" text-slate-500">Latest case study</p>
                  <p className=" text-xl text-white font-medium">
                    Alveena Casa
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Alveena Casa icon"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <ArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
          <div className=" flex  py-5 justify-between items-center group ">
            <h3 className="text-6xl  group-hover:scale-95 transition-transform duration-500  cursor-pointer">
              Website Designs
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden group-hover:flex"
            >
              <div className="  flex gap-8 items-center justify-between  cursor-pointer">
                <div className="">
                  <p className=" text-slate-500">Latest case study</p>
                  <p className=" text-xl text-white font-medium">
                    Alveena Casa
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Alveena Casa icon"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <ArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
          <div className=" flex  py-5 justify-between items-center group ">
            <h3 className="text-6xl  group-hover:scale-95 transition-transform duration-500  cursor-pointer">
              Digital Products
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden group-hover:flex"
            >
              <div className="  flex gap-8 items-center justify-between  cursor-pointer">
                <div className="">
                  <p className=" text-slate-500">Latest case study</p>
                  <p className=" text-xl text-white font-medium">
                    Alveena Casa
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Alveena Casa icon"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <ArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
          <div className=" flex  py-5 justify-between items-center group ">
            <h3 className="text-6xl group-hover:scale-95 transition-transform duration-500  cursor-pointer">
              Brand Identities
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden group-hover:flex"
            >
              <div className="  flex gap-8 items-center justify-between  cursor-pointer">
                <div className="">
                  <p className=" text-slate-500">Latest case study</p>
                  <p className=" text-xl text-white font-medium">
                    Alveena Casa
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Alveena Casa icon"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <ArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
        </div>
        <hr />
        <div className="mt-12 flex justify-between">
          <div className=" flex-1">
            <h2 className=" text-6xl font-medium bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 text-transparent bg-clip-text">
              Creative Agency
            </h2>
            <p className=" text-xl w-3/4 mt-6">
              We’re an award-winning creative agency based in London, focused on
              E-Commerce, Web Design London, Digital Products, Branding and SEO.
            </p>
          </div>
          <div className="flex items-end gap-5 justify-end flex-1">
            <NormalButton bg="black" color="white" text={"300+ Projects"} />
            <NormalButton bg="black" color="white" text={"15 Awards"} />
          </div>
        </div>
      </div>
    </div>
  );
}
