"use client";
import localFont from "next/font/local";

const fontTwo = localFont({
  src: "../../../public/Fonts/first.woff2",
  display: "swap",
});

const MyFont = localFont({
  src: "../../../public/Fonts/GrandBold.woff2",
  display: "swap",
});

export default function Cards() {
  return (
    <div className="cardWrapper w-full lg:w-[60vw] h-fit p-2 lg:p-5 mt-2 lg:mt-19 bg-[#f0ecda] hover:bg-[#d43535] transition-all duration-500 ease-in-out rounded-md flex flex-col justify-between items-center">

      <video
        src="/Videos/Vid1.mp4"
        loop
        muted
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
        className="rounded-md"
      ></video>

      <p className={`${fontTwo.className} uppercase text-xl para mt-5`}>re/max</p>
      <h1 className={`${MyFont.className} uppercase text-[#d43535] heading text-[5vw] leading-none`}>
        astrology
      </h1>
    </div>
  );
}
