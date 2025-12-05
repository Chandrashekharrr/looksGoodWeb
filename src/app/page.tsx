import ArrowButton from "../../public/Fonts/ArrowButton";
import Cards from "./components/Cards";
import CircleRoll from "./components/CircleRoll";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Roller from "./components/Roller";

export default function HomePage() {
  return (
    <main className="w-full h-full z-10 px-1 flex flex-col lg:flex-row overflow-x-scroll">
      <div className="wrapper w-full lg:w-4/6 h-full flex justify-start gap-2 items-start pt-[70px] lg:items-end pb-0 lg:pb-1.5 ">
        <Hero />
        <Roller />
      </div>

      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <ArrowButton />
      <CircleRoll src="/Images/Roller.svg"/>

      <div className="text w-full h-full ">
        <h1 className={`uppercase text-[#f0ecda] font-bold text-lg leading-none text-center p-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </h1>
        <p className="uppercase text-xs font-bold text-[#f0ecda] text-center">we aint so stiff after all...</p>
      </div>

      <Feed />
      

    </main>
  );
}
