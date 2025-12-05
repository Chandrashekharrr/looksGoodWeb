import TextHeading from "./TextHeading";
import FeedCards from "./FeedCards";

export default function Feed(){


    return(

        <div className="feddComp w-full h-full mt-60">

        <TextHeading text="in your" textSize="text-[12vw] leading-none" textColor="text-[#f0ecda]" />
        <TextHeading text="feed" textSize="text-[35vw] leading-none" textColor="text-[#d43535]" />
        <FeedCards />
        <FeedCards />
        <FeedCards />
        <FeedCards />

        </div>
    )
}