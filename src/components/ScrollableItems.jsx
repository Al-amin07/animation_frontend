import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NormalButton } from "./toggle-button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function ScrollableItems() {
  return (
    <div className="mt-16">
      <HorizontalScroll />
    </div>
  );
}

function HorizontalScroll() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const { data: works, isLoading } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/work`
      );
      return data.data;
    },
  });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start center", "end center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  if (isLoading)
    return (
      <div className="h-[300px] flex items-center justify-center">
        <p>loading...</p>
      </div>
    );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div
        ref={containerRef}
        className="sticky top-1/2 -translate-y-1/2 h-[500px] flex items-center overflow-hidden"
      >
        <motion.div style={{ x }} className="flex gap-8">
          <div className="pl-24">
            <FirstCard />
          </div>
          {works?.map((el, index) => (
            <Card key={el?._id} index={index} work={el} />
          ))}
          <LastCard />
        </motion.div>
      </div>
    </section>
  );
}

function FirstCard() {
  return (
    <div className="h-[400px] flex flex-col justify-between w-[400px]">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-5xl font-bold">Work</h1>
          <span className="text-2xl h-[60px] w-[60px] p-3 font-bold border border-neutral-600 flex items-center justify-center rounded-full">
            13
          </span>
        </div>
        <p className="text-2xl leading-10 mt-6 font-medium">
          A selection of our crafted <br /> work, built from scratch by <br />{" "}
          our talented in-house team.
        </p>
      </div>
      <div className="flex">
        <NormalButton text={"Case Studies"} />
      </div>
    </div>
  );
}
function LastCard() {
  return (
    <div className="h-[400px] w-[400px]">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-5xl font-medium mb-4">View More</h1>
        <NormalButton text={"Case Studies"} />
      </div>
    </div>
  );
}

function Card({ work, index }) {
  return (
    <div className="relative  w-[550px] h-[500px] overflow-hidden rounded-3xl hover:scale-95  transition-all duration-500">
      <Image
        src={work?.image}
        alt={work?.title || "Work showcase"}
        fill
        className="object-cover rounded-3xl "
        sizes="(max-width: 550px) 100vw, 550px"
        priority={true}
      />
      {index === 0 && (
        <div className="absolute text-white font-medium top-6 right-6 bg-[#545CFF] py-2 px-6 rounded-full">
          Latest
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-medium mb-4">{work?.title}</h3>
        <div className="flex gap-3 flex-wrap">
          {work?.tags?.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
    // <div className="w-[500px] h-[500px] bg-green-500"></div>
  );
}
