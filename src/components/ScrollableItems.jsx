import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NormalButton } from "./toggle-button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function ScrollableItems() {
  return (
    <div className="mt-16 relative mx-16">
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
    offset: ["start center", "end center"],
  });

  const x = useTransform(scrollYProgress, [0, 0.95], ["0%", "-85%"]);

  if (isLoading)
    return (
      <div className="h-[300px] flex items-center justify-center">
        <p>loading...</p>
      </div>
    );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-1/2 -translate-y-1/2 h-[500px] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
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
    <div className="h-[500px] flex flex-col justify-between w-[400px]">
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
    <div className="h-[400px] flex flex-col items-center  justify-center w-[400px]">
      <h2 className="text-5xl font-bold mb-6">View more</h2>

      <NormalButton text={"View All Work"} />
    </div>
  );
}

function Card({ work, ind }) {
  return (
    <div className="group relative w-[550px] h-[500px] overflow-hidden rounded-3xl ">
      <div className="absolute inset-0 rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.02] " />
      <div className="absolute inset-[3px] rounded-3xl overflow-hidden bg-white">
        <Image
          src={work?.image}
          alt={work?.title || "Work showcase"}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 550px) 100vw, 550px"
          priority={true}
        />
        {ind === 0 && (
          <div className="absolute top-6 px-7 rounded-full py-2 right-7 bg-[#545CFF] text-white text-lg">
            Latest
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-3xl font-medium mb-4 transition-transform duration-500 ease-out group-hover:translate-y-[-5px]">
            {work?.title}
          </h3>
          <div className="flex gap-3 flex-wrap">
            {work?.tags?.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-neutral-600 transition-all duration-500 ease-out group-hover:bg-white/20"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
