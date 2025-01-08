import { motion } from "framer-motion";

const sponsors = [
  {
    id: 1,
    name: "TGA",
    image: "/tga.svg",
  },
  {
    id: 2,
    name: "Luxe Collective",
    image: "/luxe.svg",
  },
  {
    id: 3,
    name: "Richemont",
    image: "/richemont.svg",
  },
  {
    id: 4,
    name: "JB Capital Markets",
    image: "/jb.svg",
  },
];

export default function Sponsour() {
  return (
    <section className="py-24 px-28">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[57px] leading-[1.1] font-medium  mb-24"
        >
          From ambitious startups to global companies, we partner with great
          businesses and industry leaders.
        </motion.h2>

        <div className="grid grid-cols-4 gap-16 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-auto h-8 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
