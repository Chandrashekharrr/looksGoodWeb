import Image from "next/image"


export default function ArrowButton() {


    return(

        <button className="border-2 border-[#f0ecda] rounded-md text-[#f0ecda] uppercase text-lg font-bold flex justify-between items-center px-5 py-5 mt-2"> view all work 
        <Image src="/Images/arrow-right.svg" alt="Arrow Icon" width={40} height={40} />
        </button>
    )
}