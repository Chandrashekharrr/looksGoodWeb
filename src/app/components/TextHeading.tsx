import localFont from "next/font/local"


const myFont = localFont({
  src: "../../../public/Fonts/GrandBold.woff2",
  display: "swap",
});


interface TextProps {
    text: string;
    textSize: string;
    textColor: string;
}


export default function Text({ text,textSize,textColor }: TextProps){


    return(

        <button className={`${myFont.className} uppercase ${textColor} leading-none ${textSize}`}>{text}</button>
    )
}