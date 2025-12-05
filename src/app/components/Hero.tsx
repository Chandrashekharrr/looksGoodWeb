'use client';
import Text from "./TextHeading";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const fontTwo = localFont({
  src: "../../../public/Fonts/first.woff2",
  display: "swap",
});

export default function Hero() {

  const items = Array(15).fill("Work");

  return (
    <>
      <div className="wrapperHorizontalpageScroller w-full h-fit lg:h-[calc(100vh-80px)] ">
        <div className="wrapper w-full h-full flex flex-col justify-start lg:justify-between gap-20 lg:gap-0">

          <div className="HeadingWrapper w-full flex flex-col justify-center items-center">
            <h1>
              <Text
                text="we make"
                textSize="text-[10vw] lg:text-[6vw]"
                textColor="text-[#f0ecda]"
              />
            </h1>
            <h1>
              <Text
                text="Laughs"
                textSize="text-[20vw] lg:text-[12vw]"
                textColor="text-[#d43535]"
              />
            </h1>
            <h1>
              <Text
                text="that look"
                textSize="text-[10vw] lg:text-[5vw]"
                textColor="text-[#f0ecda]"
              />
            </h1>
            <h1>
              <Text
                text="damn"
                textSize="text-[10vw] lg:text-[5vw]"
                textColor="text-[#f0ecda]"
              />
            </h1>
          </div>

          <div className="wrapper w-full overflow-hidden">
            <div className="goodEmoji w-full flex flex-col items-end lg:flex-row lg:justify-between overflow-hidden pr-5 lg:pr-0 ">
              <h1>
                <Text
                  text="go"
                  textSize="text-[25vw] lg:text-[15vw]"
                  textColor="text-[#f0ecda]"
                />
              </h1>

              {/* <div className="Images w-52 relative hidden lg:block">
              <Image
                src="/Fonts/teeth.png"
                alt="Good Emoji 1"
                fill
                className="object-cover object-center"
              />
            </div> */}

              <h1>
                <Text
                  text="od"
                  textSize="text-[25vw] lg:text-[15vw]"
                  textColor="text-[#f0ecda]"
                />
              </h1>
            </div>

            <div className="rail w-full h-15 border-2 border-[#f0ecda] rounded-md block lg:hidden mt-2 lg:mt-0">

              <motion.div
                className="flex items-center justify-center"
                animate={{ x: ["0%", "-50%"] }} // FIXED
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 10, // slow + smooth
                }}
              >
                {[...items, ...items].map((text, index) => (
                  <h1
                    key={index}
                    className={`text-[#f0ecda] uppercase ${fontTwo.className} text-lg font-extrabold mx-5 mt-3`}
                  >
                    {text}
                  </h1>
                ))}
              </motion.div>

            </div>



          </div>

        </div>
      </div>
    </>
  );
}
