"use client";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const fontTwo = localFont({
  src: "../../../public/Fonts/first.woff2",
  display: "swap",
});

export default function Roller() {
  const items = Array(15).fill("Work");

  return (
    <div className="workBorder h-[calc(100vh-80px)] w-15 border-2 border-[#f0ecda] rounded-md hidden lg:flex lg:flex-col justify-center items-center overflow-hidden mx-2">
      
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: ["0%", "-40%"] }} // FIXED
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // slow + smooth
        }}
      >
        {[...items, ...items].map((text, index) => (
          <h1
            key={index}
            className={`text-[#f0ecda] uppercase ${fontTwo.className} text-2xl font-extrabold -rotate-90 mb-15`}
          >
            {text}
          </h1>
        ))}
      </motion.div>

    </div>
  );
}
