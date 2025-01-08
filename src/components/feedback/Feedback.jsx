"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useScroll, useTransform, motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";

const feedbackData = [
  {
    id: 1,
    description:
      "Artistsweb are a great team of professionals to work with. They listened to our requirements very closely and delivered complex solutions with detail and outstanding creativity and more importantly to deadlines other agencies could not previously meet. We would highly recommend them to any corporation looking for a talented team of digital strategists, designers and developers.",
    name: "David Cortes",
    company: "Costa Coffee",
    image: "/costa.svg",
  },
  {
    id: 2,
    description:
      "In the years we've worked with Artistsweb, they have consistently been a solid, reliable, dedicated and effective partner. We value greatly their capacity to work quickly and the advice that they give us. Their knowledge and development skillset is unrivalled compared to other digital agencies we've worked with.",
    name: "Sarah Johnson",
    company: "Luxe Collective",
    image: "/luxe.svg",
  },
  {
    id: 3,
    description:
      "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable.",
    name: "Steven Glibbery",
    company: "TGA Mobility",
    image: "/tga.svg",
  },
];

export default function Feedback() {
  const containerRef = useRef(null);
  const { data: feedbacks, isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/feedback`
      );
      return data.data;
    },
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["33%", "100%"]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const feedbackY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section className="bg-neutral-900 relative">
      <div className="max-w-[1400px] mx-auto px-28 py-32">
        <div className="flex justify-between items-start mb-16">
          <div className="w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[64px] text-white font-medium mb-6"
            >
              Client Feedback
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-400 flex justify-between items-center"
            >
              <p className="text-neutral-100 text-xl">
                We're collaborators - We build tight-knit partnerships with our
                clients.
              </p>
              <div className="flex gap-2 items-center">
                <LoaderCircle className="animate-spin h-12 w-12" />
                <p className="text-neutral-400 text-xl">Keep Scrolling</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex flex-row-reverse gap-16">
          {/* Progress Indicator */}
          <div className="sticky top-32 h-screen pt-32">
            <div className="h-[300px] w-[7px] bg-neutral-800 relative">
              <motion.div
                style={{
                  height: progressHeight,
                  scale: progressScale,
                  originY: 0,
                }}
                className="absolute top-0 left-0 w-full bg-[#4F46E5] rounded-full"
              />
            </div>
          </div>

          {/* Feedback Content */}
          <div ref={containerRef} className="relative flex-1 h-[150vh]">
            <div className="sticky top-24 h-[100vh] overflow-hidden">
              <motion.div
                style={{
                  scrollBehavior: "smooth",
                  y: feedbackY,
                }}
                className="space-y-16 cursor-pointer"
              >
                {feedbacks?.map((feedback, index) => (
                  <motion.div
                    key={feedback?._id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    className="bg-transparent px-12 hover:scale-105 transition-transform duration-500 py-16 border-2 border-neutral-700 rounded-3xl"
                  >
                    <p className="text-3xl text-white font-medium leading-tight mb-12">
                      "{feedback?.description}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <img
                          src={feedback?.image}
                          alt={`company logo`}
                          className="w-16 h-16 rounded-full bg-neutral-200 p-2 object-contain"
                        />
                        <div>
                          <h4 className="text-white text-lg font-medium">
                            {feedback?.name}
                          </h4>
                          <p className="text-neutral-400">
                            {feedback?.workCompany}
                          </p>
                        </div>
                      </div>
                      <span className="text-[#4F46E5] text-2xl">
                        {feedback?.workCompany}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
