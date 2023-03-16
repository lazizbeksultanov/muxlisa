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
                <div className={"mt-10 flex min-w-max mx-auto justify-evenly items-center"}>
                    <div className={"relative flex items-center justify-center max-w-[50%]"}>
                        <Image src={SttImg} alt={"STT Image"} className={"w-80 z-10"}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.7"}/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow2 ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.6"}/>
                        </svg>
                    </div>
                    <div className={"max-w-[40%]"}>
                        <p className={"text-gray-200 text-[8rem] font-semibold leading-none mb-2"}>01</p>
                        <p className={"text-gray-300 font-semibold text-3xl mb-4"}>Speech to Text</p>
                        <p className={"text-3xl text-black font-extralight whitespace-normal"}>O`zbek tilidagi nutqni sifatli va til qoidalariga <br/> asoslangan holda <span className={"font-normal text-violet-800 whitespace-normal"}>matnga o`girish</span></p>
                        <p className={"text-sm text-gray-600 font-normal whitespace-normal mt-5"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <ul className={"mt-12"}>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"max-w-max mx-auto -mt-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="542" height="266" viewBox="0 0 542 266" fill="none">
                        <path d="M0.499939 1C73.1675 277.507 470.316 79.2685 528.5 240.5" stroke="#A549B3" strokeDasharray="11 11"/>
                        <path d="M541.5 266L539.5 239L531.5 248.5L520 250L541.5 266Z" fill="#A549B3"/>
                    </svg>
                </div>
                <div className={"mt-10 flex min-w-max mx-auto justify-evenly items-center"}>
                    <div className={"max-w-[40%]"}>
                        <p className={"text-gray-200 text-[8rem] font-semibold leading-none mb-2"}>02</p>
                        <p className={"text-gray-300 font-semibold text-3xl mb-4"}>Text to Speach</p>
                        <p className={"text-3xl text-black font-extralight whitespace-normal"}>O`zbek tilidagi matnlarni sifatli va til qoidalariga asoslangan holda <span className={"font-normal text-violet-800 whitespace-normal"}>nutqqa o`girish</span></p>
                        <p className={"text-sm text-gray-600 font-normal whitespace-normal mt-5"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <ul className={"mt-12"}>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                        </ul>
                    </div>
                    <div className={"relative flex items-center justify-center max-w-[50%]"}>
                        <Image src={SttImg} alt={"STT Image"} className={"w-80 z-10"}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.7"}/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow2 ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.6"}/>
                        </svg>
                    </div>
                </div>
                <div className={"max-w-max mx-auto -mt-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="542" height="266" viewBox="0 0 542 266" fill="none" style={{transform: "rotateY(3.142rad)"}}>
                        <path d="M0.499939 1C73.1675 277.507 470.316 79.2685 528.5 240.5" stroke="#A549B3" strokeDasharray="11 11"/>
                        <path d="M541.5 266L539.5 239L531.5 248.5L520 250L541.5 266Z" fill="#A549B3"/>
                    </svg>
                </div>
                <div className={"mt-10 flex min-w-max mx-auto justify-evenly items-center"}>
                    <div className={"relative flex items-center justify-center max-w-[50%]"}>
                        <Image src={SttImg} alt={"STT Image"} className={"w-80 z-10"}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.7"}/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="550" viewBox="0 0 274 250" fill="none" className={"absolute animate-spin-slow2 ml-10 origin-[50%_55%] mt-20"}>
                            <path d="M93.6987 25C112.944 -8.33333 161.056 -8.33333 180.301 25L266.904 175C286.149 208.333 262.093 250 223.603 250H50.3975C11.9074 250 -12.1488 208.333 7.09619 175L93.6987 25Z" fill="#9C39BE" fillOpacity={"0.6"}/>
                        </svg>
                    </div>
                    <div className={"max-w-[40%]"}>
                        <p className={"text-gray-200 text-[8rem] font-semibold leading-none mb-2"}>03</p>
                        <p className={"text-gray-300 font-semibold text-3xl mb-4"}>Smart Assistant</p>
                        <p className={"text-3xl text-black font-extralight whitespace-normal"}>O`zbek tiliga asoslangan <span className={"font-normal text-violet-800 whitespace-normal"}>aqlli yordamchi</span></p>
                        <p className={"text-sm text-gray-600 font-normal whitespace-normal mt-5"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <ul className={"mt-12"}>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                            <li className={"my-4"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className={"inline-block mr-4"}><path d="M11.7727 1.83334L6.0685 9.57418C5.93246 9.75467 5.7296 9.87293 5.50552 9.90239C5.28143 9.93185 5.0549 9.87004 4.87683 9.73084L0.803497 6.47418C0.444052 6.18653 0.385849 5.66195 0.673497 5.30251C0.961146 4.94306 1.48572 4.88486 1.84516 5.17251L5.24183 7.89001L10.431 0.847509C10.6012 0.592168 10.8979 0.450995 11.2033 0.480041C11.5088 0.509086 11.7736 0.703651 11.8926 0.986486C12.0116 1.26932 11.9655 1.59466 11.7727 1.83334Z" fill="#515AE4"></path></svg>
                                <strong className={"inline-block text-base text-black"}>
                                    Contrary to popular belief :
                                </strong>
                                <span className={"font-light text-gray-600 text-base"}> Amet minim mollit non deserunt ullamco</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}