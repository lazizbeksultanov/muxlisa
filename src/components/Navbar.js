import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"

export default function Navbar() {
    return(
        <nav className={"bg-white sticky top-0 z-20"}>
            <div className={"container mx-auto sm:px-0 px-2 py-5 flex items-center justify-between"}>
                <Link href={"/"} className={"flex items-center max-w-max text-black"}>
                    <Image src={Logo} width={50} height={40} alt={"Logo"} />
                    <div className={"ml-1"}>
                        <p className={"text-3xl leading-none"}>Muxlisa</p>
                        <p className={"leading-none text-sm"}>Ovozli yordamchi</p>
                    </div>
                </Link>
                <div className={"flex items-center text-gray-600"}>
                    <Link href={"/"} className={"mx-2 font-semibold text-md transition-all duration-300 hover:text-violet-800 after:w-0 after:h-[1.5px] after:block after:bg-violet-800 after:transition-all after:duration-300 hover:after:w-full"}>
                        NavLink
                    </Link>
                    <Link href={"/"} className={"mx-2 font-semibold text-md transition-all duration-300 hover:text-violet-800 after:w-0 after:h-[1.5px] after:block after:bg-violet-800 after:transition-all after:duration-300 hover:after:w-full"}>
                        NavLink
                    </Link>
                    <Link href={"/"} className={"mx-2 font-semibold text-md transition-all duration-300 hover:text-violet-800 after:w-0 after:h-[1.5px] after:block after:bg-violet-800 after:transition-all after:duration-300 hover:after:w-full"}>
                        NavLink
                    </Link>
                    <Link href={"/"} className={"mx-2 font-semibold text-md transition-all duration-300 hover:text-violet-800 after:w-0 after:h-[1.5px] after:block after:bg-violet-800 after:transition-all after:duration-300 hover:after:w-full"}>
                        NavLink
                    </Link>
                    <button className={"p-4"}>
                        <span className={"w-3.5 h-1 bg-violet-800 rounded-2xl block my-1"}></span>
                        <span className={"w-5 h-1 bg-violet-800 rounded-2xl block my-1"}></span>
                        <span className={"w-2.5 h-1 bg-violet-800 rounded-2xl block my-1"}></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}