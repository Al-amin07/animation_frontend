"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NavigationModal({ isOpen, onClose }) {
  return (
    <motion.div
      className="fixed  h-[700px] inset-0 bg-black z-50"
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-white text-xl">Navigation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:text-white/80"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="space-y-8">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white text-5xl font-bold hover:text-white/80"
            >
              Case Studies
            </a>
            <span className="text-white/60 text-xl">13</span>
          </div>
          <a
            href="#"
            className="block text-white text-5xl font-bold hover:text-white/80"
          >
            Our Agency
          </a>
          <a
            href="#"
            className="block text-white text-5xl font-bold hover:text-white/80"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block text-white text-5xl font-bold hover:text-white/80"
          >
            News
          </a>
        </nav>

        <div className="mt-auto pt-24">
          <h3 className="text-white/60 mb-4">Follow us</h3>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-white/80">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-white/80">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-white/80">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-white/80">
              Awwwards
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Button
            className="rounded-full bg-[#4B4BF5] hover:bg-[#4B4BF5]/90 text-white px-8"
            size="lg"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
