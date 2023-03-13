import SttImg from "../../public/STT.png"
import Image from "next/image";

export default function AboutBlock() {
    return(
        <div className={"w-full min-h-screen py-20"}>
            <div className={"container mx-auto sm:px-0 px-2"}>
                <div className={"text-center"}>
                    <p><span className={"text-5xl text-violet-800 font-semibold"}>Muxlisa AI</span> <span className={"text-3xl text-gray-600 font-semibold"}>bu nima?</span></p>
                </div>
                <div>
                    <p className={"text-center text-gray-500 mt-4 text-xl"}>O`zbek tilidagi nutqni va matnlarni sun’iy intellekt yordamida qayta ishlash va o`zbek tilida muloqot qiladigan aqlli yordamchi</p>
                </div>
                <Image src={SttImg} alt={"STT Image"} />
            </div>
        </div>
    )
}