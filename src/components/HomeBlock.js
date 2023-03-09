import PresentasionImage from "../../public/image.png"
import Image from "next/image";

export default function HomeBlock() {
    return(
        <div className={"w-full h-screen bg-gradient-to-r from-[#8B42C2] to-[#8345C5]"}>
            <div className={"container mx-auto h-full sm:px-0 px-2 flex items-center justify-between"}>
                <div className={"text-white max-w-[35%]"}>
                    <p className={"text-6xl leading-tight"}>Muxlisa AI & Aqlli Yordamchi</p>
                    <p className={"text-sm leading-relaxed mt-4 mb-6"}>O`zbek tilidagi nutqni va matnlarni sun’iy intellekt yordamida qayta ishlash va o`zbek tilida muloqot qiladigan aqlli yordamchi</p>
                    <button type={"button"} className={"py-3 px-6 rounded-lg bg-black text-white flex items-center hover:bg-white hover:text-black transition-colors duration-700 [&:hover>svg>path]:stroke-black"}>
                        <span className={"mr-2.5"}>Sinab ko`rish</span>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 700ms ease-in-out"}}></path></svg>
                    </button>
                </div>
                <Image src={PresentasionImage} className={"w-1/2"} alt={"PresentasionImage"} />
            </div>
        </div>
    )
}