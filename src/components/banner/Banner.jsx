import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Banner() {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={bannerRef}
      className="relative h-[90vh] rounded-[30px] mx-28 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute  inset-0 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      />
      <div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-[700px] lg:items-center lg:px-8"></div>
    </section>
  );
}
