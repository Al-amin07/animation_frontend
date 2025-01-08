"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function NavigationMenu() {
  return (
    <Dialog>
      <DialogContent className="max-w-full h-full sm:h-[100vh] sm:max-w-none border-0">
        <div className="bg-black text-white min-h-screen p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-2xl font-light">Navigation</h2>
              <DialogTrigger asChild>
                <button className="rounded-full p-2 hover:bg-gray-800 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </DialogTrigger>
            </div>

            <nav className="mb-24">
              <ul className="space-y-6">
                <li className="group">
                  <a
                    href="/case-studies"
                    className="flex items-center gap-4 text-4xl md:text-6xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    Case Studies
                    <span className="text-2xl md:text-3xl text-gray-500 group-hover:text-gray-300 transition-colors">
                      13
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/agency"
                    className="text-4xl md:text-6xl font-semibold hover:text-gray-300 transition-colors block"
                  >
                    Our Agency
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-4xl md:text-6xl font-semibold hover:text-gray-300 transition-colors block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-4xl md:text-6xl font-semibold hover:text-gray-300 transition-colors block"
                  >
                    News
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <p className="text-gray-400">Follow us</p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-lg hover:text-gray-300 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-lg hover:text-gray-300 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-lg hover:text-gray-300 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-lg hover:text-gray-300 transition-colors"
                  >
                    Awwwards
                  </a>
                </div>
              </div>

              <Button
                className="bg-[#6366f1] hover:bg-[#5558e6] text-white rounded-full px-8 py-6 text-lg"
                size="lg"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
