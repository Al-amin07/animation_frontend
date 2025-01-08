import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { NormalButton } from "../toggle-button";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-7xl mx-auto px-8 py-16"
    >
      <div className="flex ">
        <div className="space-y-12 flex-1">
          <h2 className="text-4xl font-[700] leading-tight">
            We love crafting unforgettable digital experiences, brands and
            websites with people like you.
          </h2>

          <div className="space-y-6 mt-6">
            <h3 className="text-neutral-700 font-semibold">Get in touch</h3>
            <div className="space-y-2">
              <p className="text-xl font-semibold">+44 207 112 82 85</p>
              <p className="text-xl font-semibold">contact@artistsweb.com</p>
            </div>
            <p className="text-xl font-semibold">
              Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
            </p>
          </div>
        </div>

        <div className="space-y-8  w-[500px]">
          <div className="bg-black text-white rounded-full py-4 px-8">
            <div className="flex  items-center justify-between">
              <span className="text-xl font-medium ">Follow us</span>
              <SocialLinks />
            </div>
          </div>

          {/*  */}
          <div className="bg-[#ECF1F4] flex flex-col items-center rounded-3xl p-12 space-y-5">
            <h3 className="text-4xl font-medium text-neutral-800">
              Let&apos;s get started
            </h3>
            <p className="text-gray-600">
              We&apos;d love to hear about your project.
            </p>
            <NormalButton
              text={"Get in touch"}
              px="80px"
              border="0"
              bg="#545CFF"
              color="white"
              className="inline-block bg-[#6366f1] text-white rounded-full px-8 py-4 text-lg hover:bg-[#5558e6] transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-4 text-gray-500">
        <p>© 2025 Artistweb Ltd · All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
