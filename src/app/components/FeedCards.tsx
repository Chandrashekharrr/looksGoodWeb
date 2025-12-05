import Image from "next/image";
export default function FeedCards(){



    return(
        <div className="feedCardWrapper w-full flex flex-col justify-center items-center mb-3 ">
            <div className="imageWrapper relative w-full h-[50vh] rounded-md overflow-hidden z-10">
                <Image src="/Images/image1.avif" alt="Feed card image" fill />
            </div>

            <div className="infowrapper w-[90vw] bg-[#f0ecda] p-5 rounded-md -mt-20 z-20 flex flex-col gap-5">
                <p className="text-lg  leading-none">Balls, bets, and brilliance: Matt Pittroff&apos;s Greenball rolls back into Jersey, tongue firmly in cheek.</p>

                <div className="dateext w-full flex justify-between text-sm font-bold uppercase">
                    <p>july 10, 2025</p>
                    <p className="text-[#d43535]">Read more</p>
                </div>

            </div>


        </div>
    )
}