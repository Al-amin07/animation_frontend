import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <Link
        href="#"
        className="relative group p-2 rounded-full transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500" />
        <Instagram className="w-6 h-6 relative z-10" />
      </Link>

      <Link
        href="#"
        className="relative group p-2 rounded-full transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-400" />
        <Facebook className="w-6 h-6 relative z-10" />
      </Link>

      <Link
        href="#"
        className="relative group p-2 rounded-full transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-600" />
        <Twitter className="w-6 h-6 relative z-10" />
      </Link>

      <Link
        href="#"
        className="relative group p-2 rounded-full transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-500" />
        <span className="font-semibold relative z-10">w.</span>
      </Link>
    </div>
  );
}
