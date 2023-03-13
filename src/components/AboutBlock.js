import SttImg from "../../public/STT.png"
import Image from "next/image";

export default function AboutBlock() {
    return (
        <div className={"w-full min-h-screen py-20"}>
            <div className={"container mx-auto sm:px-0 px-2"}>
                <div className={"text-center"}>
                    <p><span className={"text-5xl text-violet-800 font-semibold"}>Muxlisa AI</span> <span
                        className={"text-3xl text-gray-600 font-semibold"}>bu nima?</span></p>
                </div>
                <div>
                    <p className={"text-center text-gray-500 mt-4 text-xl"}>O`zbek tilidagi nutqni va matnlarni sun’iy
                        intellekt yordamida qayta ishlash va o`zbek tilida muloqot qiladigan aqlli yordamchi</p>
                </div>
                <div className={"mt-10 flex min-w-max mx-auto"}>
                    <div className={"relative flex items-center justify-center"}>
                        <Image src={SttImg} alt={"STT Image"} className={"w-80 z-10 opacity-10"}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="494" height="448" viewBox="0 0 494 448"
                             fill="none" className={"absolute animate-spin-slow ml-10 flex justify-center"}>
                            <path
                                d="M177.767 40.5739C208.581 -12.6456 285.419 -12.6457 316.233 40.5738L482.312 327.415C513.192 380.748 474.707 447.5 413.079 447.5H80.9206C19.2928 447.5 -19.1918 380.748 11.6879 327.415L177.767 40.5739Z"
                                fill="#AD49C3" fillOpacity={"0.4"}/>
                        </svg>
                    </div>
                    <div>
                        <p className={"text-gray-200 text-[8rem] font-semibold"}>01</p>
                    </div>
                </div>
            </div>
        </div>
    )
}