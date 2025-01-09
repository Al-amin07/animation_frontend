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
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.25, 0.75], ["0%", "-85%"]);

  if (isLoading)
    return (
      <div className="h-[300px] flex items-center justify-center">
        <p>loading...</p>
      </div>
    );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 pl-24"
          initial={{ x: "0%" }}
        >
          <FirstCard />
          {works?.map((el, ind) => (
            <Card key={el?._id} ind={ind} work={el} />
          ))}
          <LastCard />
        </motion.div>
      </div>
    </section>
  );
}

function FirstCard() {
  return (
    <div className="h-[400px] ml-24 flex flex-col justify-between w-[400px]">
      <div>
        <div className=" flex items-center gap-4">
          <h1 className=" text-5xl font-bold">Work</h1>
          <span className=" text-2xl h-[60px] w-[60px] p-3 font-bold border border-neutral-600 flex items-center justify-center rounded-full">
            13
          </span>
        </div>
        <p className=" text-2xl leading-10 mt-6 font-medium">
          A selection of our crafted <br /> work, built from scratch by <br />{" "}
          our talented in-house team.
        </p>
      </div>
      <div className="  flex ">
        <NormalButton text={"Case Stadies"} />
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

function Card({ work }) {
  return (
    <div className="relative w-[550px] h-[500px] overflow-hidden rounded-3xl">
      <Image
        src={work?.image}
        alt={work?.title || "Work showcase"}
        fill
        className="object-cover"
        sizes="(max-width: 550px) 100vw, 550px"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-medium mb-4">{work?.title}</h3>
        <div className="flex gap-3 flex-wrap">
          {work?.categories?.map((category, index) => (
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
