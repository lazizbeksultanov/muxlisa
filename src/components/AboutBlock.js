import Image from "next/image";
import Gif from "../../public/gSDFG.gif"

export default function AboutBlock() {
    return(
        <div className={"w-full h-screen"}>
            <Image src={Gif} alt={"Gif"} className={"h-full w-1/4"} />
        </div>
    )
}