import { motion } from "framer-motion";
import { NormalButton } from "../toggle-button";

const services = [
  "Services",
  "E-Commerce",
  "Website Design",
  "Web Development",
  "Digital Products",
  "Brand Identities",
  "SEO Optimisation",
];

export default function Skills() {
  return (
    <section className="py-24 px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex  gap-24">
          {/* Left Column */}
          <div className=" w-[400px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-semibold mb-12"
            >
              We're good at
            </motion.h2>

            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {index === 0 ? (
                    <span className="text-neutral-500 font-medium text-lg">
                      {service}
                    </span>
                  ) : (
                    <h3 className="text-[32px] font-bold group-hover:translate-x-2 transition-transform">
                      {service}
                    </h3>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="flex-1  flex items-end">
            <motion.div
              // initial={{ opacity: 0, y: 40 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7 }}
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{
                duration: 0.6,

                ease: "easeInOut",
              }}
              className="bg-[#545CFF] text-white   p-16 rounded-[32px] flex flex-col justify-between"
            >
              <h3 className="text-4xl font-semibold leading-tight mb-8">
                Let's start with a conversation about how we can help you! Get
                in touch, we're a nice bunch.
              </h3>

              <div className="flex gap-4">
                <NormalButton text={"Lets Talk"} />
                <NormalButton
                  bg="#545CFF"
                  color="white"
                  border="white"
                  text={"0207 112 82 85"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
