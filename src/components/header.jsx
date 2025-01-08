"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NavigationModal from "./navigation-modal";
import ToggleButton, { CircleButton } from "./toggle-button";
// import NavigationModal from "./navigation-modal";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header
        className="flex bg-white justify-between items-center py-6 px-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-2xl font-bold">AW</div>
        <div className="flex items-center gap-4">
          <ToggleButton text={"Get in touch"} />
          <CircleButton onClick={() => setIsNavOpen(true)}></CircleButton>
        </div>
      </header>

      <NavigationModal isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
