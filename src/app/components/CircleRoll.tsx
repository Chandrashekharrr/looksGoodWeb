"use client";

import { motion } from "framer-motion";
import Image from "next/image";


interface imgsrc {

  src:string
}

export default function CircleRoll({src}:imgsrc) {
  return (
    <div className="imageWrapper flex justify-center items-center py-10 w-full relative">
      <Image alt="ewe" src="/Images/arrow-right.svg" width={40} height={40} className="absolute z-20" />

      <motion.div
        className="wrpperImage w-40 h-40 relative z-10 flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 9,        // change speed here
          ease: "linear"
        }}
      >
        <Image src={src} alt="Circle Roll" fill />


      </motion.div>

     
    </div>
  );
}
