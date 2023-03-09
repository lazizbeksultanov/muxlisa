import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={"bg-[#080D1F] w-full"}>
            <div className={"container mx-auto sm:px-0 px-2 flex w-full py-24"}>
                <div className={"max-w-[25%] w-full"}>
                    <Link href={"/"} className={"flex items-center max-w-max text-white"}>
                        <Image src={Logo} width={50} height={40} alt={"Logo"} />
                        <div className={"ml-1"}>
                            <p className={"text-3xl leading-none"}>Muxlisa</p>
                            <p className={"leading-none text-sm"}>Ovozli yordamchi</p>
                        </div>
                    </Link>
                    <Link href={"/"} className={"text-gray-500 font-semibold mt-8 mb-4 block hover:text-violet-800 transition-colors duration-500 max-w-max"}>
                        1234 North Avenue Luke Lane, South Bend, IN 360001
                    </Link>
                    <Link href={"tel:+998999932354"} className={"my-4 text-gray-500 font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max"}>
                        +998999932354
                    </Link>
                    <Link href={"mailto:support@muxlisa.uz?subject = Feedback&body = Message"} className={"my-4 text-gray-500 font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max"}>
                        support@muxlisa.uz
                    </Link>
                </div>
                <div className={"max-w-[25%] w-full"}>
                    <p className={"text-white text-2xl"}>Foydali havolalar</p>
                    <div className={"flex items-center mt-7"}>
                        <div className={"text-gray-500 mr-8"}>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                        </div>
                        <div className={"text-gray-500"}>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                            <Link href={"/"} className={"font-semibold block hover:text-violet-800 transition-colors duration-500 max-w-max my-5 flex items-center [&:hover>svg>path]:stroke-violet-800"}>
                                <svg width="7.5" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="#6F7E92" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                                <span className={"ml-2"}>Bosh sahifa</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"max-w-[25%] w-full"}>
                    <p className={"text-white text-2xl"}>So'nggi yangiliklar</p>
                    <div className={"mt-12"}>
                        <div className={"flex items-center my-3"}>
                            <Image src={Logo} className={"w-20"} />
                            <div className={"ml-3"}>
                                <p className={"text-gray-600 text-sm font-semibold"}>Dekabr 17, 2021</p>
                                <Link href={"/"} className={"text-xl text-white hover:text-violet-800 transition-colors duration-500"}>
                                    Artificial Intelligence In Space Exploration
                                </Link>
                            </div>
                        </div>
                        <div className={"flex items-center my-3"}>
                            <Image src={Logo} className={"w-20"} />
                            <div className={"ml-3"}>
                                <p className={"text-gray-600 text-sm font-semibold"}>Dekabr 17, 2021</p>
                                <Link href={"/"} className={"text-xl text-white hover:text-violet-800 transition-colors duration-500"}>
                                    Artificial Intelligence In Space Exploration
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"max-w-[25%] w-full"}>
                    <p className={"text-white text-2xl"}>Kuzatib borish</p>
                    <p className={"text-gray-500 mt-12"}>
                        It’s The Bright One, It’s The Right One, That’s Newsletter.
                    </p>
                    <form action="" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
                        <input type="email" name="email" id="email"
                               className="grow rounded border text-white border-gray-500 py-3 px-3 bg-transparent focus:border-violet-800 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0 transition-colors duration-500"
                               placeholder="Email Manzil"/>
                        <button type="submit"
                                className="rounded bg-gradient-to-r from-[rgba(167,51,187,1)] to-[rgba(125,74,199,1)] px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04999 0.975414L7.09999 6.99941L1.04999 13.0244" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transition: "stroke 500ms ease-in-out"}}></path></svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className={"w-full bg-[#080D1F] py-4 border-t border-gray-600"}>
                <div className={"container mx-auto sm:px-0 px-2"}>
                    <div className={"text-gray-500"}>
                        <span>© 2023</span>
                        <a href={"https://uzinfocom.uz"} className={"ml-2 hover:text-violet-800 transition-colors duration-500"}>Uzinfocom - barcha huquqlar himoyalangan.</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}