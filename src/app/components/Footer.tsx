import Image from "next/image";
import TextHeading from "./TextHeading";
import CircleRoll from "./CircleRoll";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footerWrapper w-full bg-[#f0ecda] px-1 py-5 mt-10">
            <div className="wrapperOne w-full flex flex-col lg:flex-row justify-center items-center">
                <div className="imagewrapper w-full h-[30vh] relative">
                    <Image src="/Fonts/teeth.png" alt="Footer Image" fill className="" />
                </div>

                <div className="heading w-full">
                    <TextHeading
                        text="hit us"
                        textSize="text-[18vw]"
                        textColor="text-[#2a2f36]"
                    />
                    <TextHeading
                        text="up"
                        textSize="text-[62vw]"
                        textColor="text-[#d43535] leading-none"
                    />
                </div>
            </div>

            <div className="divide w-full h-0.5 bg-[#2a2f36]"></div>

            <div className="wrapperSecond w-full">
                <div className="childone w-full ">
                    <div className="w-full">
                        <div className="childone">
                            <TextHeading
                                text="stiff films"
                                textSize="text-[10vw]"
                                textColor="text-[#2a2f36]"
                            />
                            <p className="uppercase text-xl font-normal">baltimore, md</p>
                        </div>

                        <div className="childone mt-5 flex flex-row gap-1">
                            <div className="iconwrapper w-15 h-15 bg-[#2a2f36] rounded-md flex justify-center items-center text-[#f0ecda] text-[9vw]">
                                <FaInstagram />
                            </div>
                            <div className="iconwrapper w-15 h-15 bg-[#2a2f36] rounded-md flex justify-center items-center text-[#f0ecda] text-[9vw]">
                                <GrLinkedinOption />
                            </div>
                            <div className="iconwrapper w-15 h-15 bg-[#2a2f36] rounded-md flex justify-center items-center text-[#f0ecda] text-[9vw]">
                                <FaSpotify />
                            </div>
                            <div className="iconwrapper w-15 h-15 bg-[#2a2f36] rounded-md flex justify-center items-center text-[#f0ecda] text-[9vw]">
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>

                    <div className="names w-full mt-25">

                        <div className="wrapperclass w-full mb-3">
                            <div className="namewrapper w-full flex flex-col gap-2 mb-3">
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Matthew Pittroff
                                </h1>
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Director/Managing Partner
                                </h1>
                            </div>

                            <div className="divide w-full h-0.5 bg-[#2a2f36]"></div>
                        </div> 
                        
                        <div className="wrapperclass w-full mb-3">
                            <div className="namewrapper w-full flex flex-col gap-2 mb-3">
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Matthew Pittroff
                                </h1>
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Director/Managing Partner
                                </h1>
                            </div>

                            <div className="divide w-full h-0.5 bg-[#2a2f36]"></div>
                        </div>

                        <div className="wrapperclass w-full mb-3">
                            <div className="namewrapper w-full flex flex-col gap-2 mb-3">
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Matthew Pittroff
                                </h1>
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Director/Managing Partner
                                </h1>
                            </div>

                            <div className="divide w-full h-0.5 bg-[#2a2f36]"></div>
                        </div>

                        <div className="wrapperclass w-full mb-3">
                            <div className="namewrapper w-full flex flex-col gap-2 mb-3">
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Matthew Pittroff
                                </h1>
                                <h1 className="uppercase text-[#2a2f36] font-bold tracking-tight leading-none">
                                    Director/Managing Partner
                                </h1>
                            </div>

                            <div className="divide w-full h-0.5 bg-[#2a2f36]"></div>
                        </div>

                    </div>


                </div>

                <div className="childone w-full p-20">
                    <CircleRoll src="/Images/circle-contact.svg" />
                </div>
            </div>
        </div>
    );
}
