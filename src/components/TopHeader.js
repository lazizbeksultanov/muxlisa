export default function TopHeader() {
    return(
        <div className={"w-full bg-white border-b border-gray-200"}>
            <div className={"container mx-auto sm:px-0 px-2 flex items-center justify-between"}>
                <div className={"flex items-center text-sm font-semibold font-sans text-gray-500"}>
                    <div className={"flex items-center py-4"}>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4107 6.11377L11.3377 9.42572C10.5682 10.0362 9.48547 10.0362 8.71594 9.42572L4.60855 6.11377" stroke="#6F7F92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4998 17.25C17.2877 17.2577 19.1667 14.9671 19.1667 12.1518V5.85584C19.1667 3.04059 17.2877 0.75 14.4998 0.75H5.50022C2.71231 0.75 0.833344 3.04059 0.833344 5.85584V12.1518C0.833344 14.9671 2.71231 17.2577 5.50022 17.25H14.4998Z" stroke="#6F7F92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <a href="mailto:support@muxlisa.uz?subject = Feedback&body = Message" className={"mx-2"}>support@muxlisa.uz</a>
                    </div>
                    <div className={"flex items-center border-l border-gray-200 py-4 pl-2"}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1569 1.2915C15.5495 1.66825 18.2298 4.34492 18.6102 7.7375" stroke="#6F7F92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.1569 4.53906C13.7803 4.8544 15.049 6.12398 15.3652 7.7474" stroke="#6F7F92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.11222 10.4329C12.7688 14.0885 13.5983 9.85933 15.9265 12.1859C18.171 14.4299 19.462 14.8794 16.6172 17.7225C16.261 18.0088 13.9978 21.4529 6.04409 13.5012C-1.91063 5.5485 1.53143 3.28291 1.81778 2.92679C4.66845 0.0758626 5.11125 1.37344 7.35577 3.61739C9.68295 5.94496 5.45565 6.77722 9.11222 10.4329Z" stroke="#6F7F92" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <a href="tel:+998999999999" className={"mx-2"}>+998 99 999 99 99</a>
                    </div>
                </div>
                <div className={"flex items-center py-4"}>
                    <a href={"https://facebook.com"} className={"mx-1 hover:-translate-y-0.5 transition-all duration-200"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.500122 3.50015C0.500122 2.70446 0.816208 1.94136 1.37885 1.37872C1.94148 0.816086 2.70458 0.5 3.50027 0.5H12.5007C13.2964 0.5 14.0595 0.816086 14.6221 1.37872C15.1848 1.94136 15.5009 2.70446 15.5009 3.50015V12.5006C15.5009 13.2963 15.1848 14.0594 14.6221 14.622C14.0595 15.1847 13.2964 15.5007 12.5007 15.5007H3.50027C2.70458 15.5007 1.94148 15.1847 1.37885 14.622C0.816208 14.0594 0.500122 13.2963 0.500122 12.5006V3.50015ZM3.50027 2.00007C3.10243 2.00007 2.72088 2.15812 2.43956 2.43944C2.15824 2.72075 2.0002 3.1023 2.0002 3.50015V12.5006C2.0002 12.8984 2.15824 13.28 2.43956 13.5613C2.72088 13.8426 3.10243 14.0007 3.50027 14.0007H8.00049V8.75041H7.25046C7.05153 8.75041 6.86076 8.67139 6.7201 8.53073C6.57944 8.39007 6.50042 8.19929 6.50042 8.00037C6.50042 7.80145 6.57944 7.61067 6.7201 7.47002C6.86076 7.32936 7.05153 7.25033 7.25046 7.25033H8.00049V6.12528C8.00049 5.42905 8.27707 4.76134 8.76938 4.26903C9.26168 3.77672 9.9294 3.50015 10.6256 3.50015H11.0756C11.2746 3.50015 11.4653 3.57917 11.606 3.71983C11.7467 3.86049 11.8257 4.05126 11.8257 4.25019C11.8257 4.44911 11.7467 4.63988 11.606 4.78054C11.4653 4.9212 11.2746 5.00022 11.0756 5.00022H10.6256C10.4779 5.00022 10.3316 5.02932 10.1951 5.08586C10.0586 5.1424 9.93456 5.22527 9.83009 5.32974C9.72562 5.43422 9.64275 5.55824 9.58621 5.69474C9.52967 5.83124 9.50057 5.97753 9.50057 6.12528V7.25033H11.0756C11.2746 7.25033 11.4653 7.32936 11.606 7.47002C11.7467 7.61067 11.8257 7.80145 11.8257 8.00037C11.8257 8.19929 11.7467 8.39007 11.606 8.53073C11.4653 8.67139 11.2746 8.75041 11.0756 8.75041H9.50057V14.0007H12.5007C12.8986 14.0007 13.2801 13.8426 13.5614 13.5613C13.8427 13.28 14.0008 12.8984 14.0008 12.5006V3.50015C14.0008 3.1023 13.8427 2.72075 13.5614 2.43944C13.2801 2.15812 12.8986 2.00007 12.5007 2.00007H3.50027Z" fill="#6F7F92"></path></svg>
                    </a>
                    <a href={"https://twitter.com"} className={"mx-1 hover:-translate-y-0.5 transition-all duration-200"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.1382 2.24384C9.79553 2.2437 9.45712 2.31963 9.14738 2.46617C8.83765 2.6127 8.56431 2.82617 8.34709 3.09117C8.12988 3.35618 7.97422 3.6661 7.89133 3.99857C7.80845 4.33105 7.80042 4.67777 7.86781 5.01373C7.89102 5.13013 7.88627 5.25038 7.85395 5.36459C7.82163 5.4788 7.76266 5.58371 7.6819 5.6707C7.60114 5.75768 7.50089 5.82425 7.38939 5.86495C7.27789 5.90564 7.15833 5.91929 7.04052 5.90477C5.42774 5.70666 3.90741 5.0437 2.66481 3.99668C2.68806 4.4482 2.84481 4.92823 3.18458 5.43075L3.69386 6.18379L2.85756 6.54006L2.69631 6.60906C2.81631 6.74632 2.96032 6.88657 3.12158 7.02533C3.33715 7.20984 3.5652 7.37925 3.80411 7.53235L3.81236 7.5376H3.81311L4.97417 8.24189L3.75911 8.84942C3.69911 8.87942 3.6391 8.90642 3.5791 8.93042C3.84037 9.14752 4.12819 9.3305 4.43564 9.47495L5.47819 9.96773L4.60515 10.7208C4.12888 11.1318 3.6496 11.4385 3.02782 11.6006C3.98145 12.1085 5.04576 12.3731 6.12623 12.3708C9.73091 12.3708 12.6336 9.49445 12.6336 5.97003V5.58001L12.9523 5.35575C13.4503 5.00623 13.8021 4.53371 14.0541 3.99293H12.434L12.23 3.56541C12.0422 3.16989 11.746 2.83577 11.3758 2.60184C11.0057 2.36792 10.5768 2.24378 10.1389 2.24384H10.1382ZM1.67776 7.71911C1.60698 7.80017 1.55447 7.89551 1.5238 7.99865C1.49313 8.1018 1.48501 8.21033 1.5 8.31689C1.58475 8.91767 1.94402 9.4352 2.34154 9.83047C2.44954 9.93772 2.56505 10.0405 2.68656 10.1387L2.6303 10.1537C2.26954 10.2437 1.78276 10.2625 0.971971 10.1837C0.818858 10.1687 0.664828 10.2011 0.530765 10.2766C0.396702 10.3521 0.289092 10.467 0.222525 10.6057C0.155958 10.7444 0.133654 10.9002 0.158638 11.052C0.183622 11.2038 0.254684 11.3442 0.362191 11.4543C1.11281 12.2215 2.00949 12.8306 2.99934 13.2457C3.98918 13.6608 5.05214 13.8733 6.12548 13.8709C10.4104 13.8709 13.9251 10.5438 14.1239 6.34505C15.0914 5.53276 15.5752 4.43245 15.8362 3.43265C15.8652 3.32168 15.8684 3.20554 15.8455 3.09315C15.8226 2.98076 15.7742 2.87512 15.7041 2.78435C15.634 2.69358 15.544 2.62011 15.441 2.56957C15.3381 2.51904 15.2249 2.49279 15.1102 2.49285H13.3453C12.9136 1.82256 12.2828 1.30438 11.5414 1.01111C10.8 0.717836 9.98541 0.664226 9.21199 0.857807C8.43858 1.05139 7.74525 1.48243 7.22944 2.09037C6.71363 2.6983 6.40127 3.45258 6.33624 4.24719C4.95366 3.88729 3.71661 3.10774 2.79531 2.01583C2.71372 1.91936 2.60908 1.84507 2.49111 1.79984C2.37314 1.75462 2.24565 1.73993 2.12048 1.75714C1.99531 1.77434 1.87652 1.82289 1.77513 1.89827C1.67374 1.97366 1.59303 2.07343 1.5405 2.18834C1.08598 3.17989 0.998972 4.32295 1.506 5.4855L1.33049 5.56051C1.16254 5.63207 1.02645 5.76244 0.947747 5.92717C0.869042 6.0919 0.853121 6.27967 0.902968 6.4553C1.04247 6.94433 1.35599 7.37635 1.67701 7.71911H1.67776Z" fill="#6F7F92"></path></svg>
                    </a>
                    <a href={"https://linkedin.com"} className={"mx-1 hover:-translate-y-0.5 transition-all duration-200"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3.5021 0.5C2.70641 0.5 1.94331 0.816086 1.38068 1.37872C0.818039 1.94136 0.501953 2.70446 0.501953 3.50015V12.5006C0.501953 13.2963 0.818039 14.0594 1.38068 14.622C1.94331 15.1847 2.70641 15.5007 3.5021 15.5007H12.5025C13.2982 15.5007 14.0613 15.1847 14.624 14.622C15.1866 14.0594 15.5027 13.2963 15.5027 12.5006V3.50015C15.5027 2.70446 15.1866 1.94136 14.624 1.37872C14.0613 0.816086 13.2982 0.5 12.5025 0.5H3.5021ZM2.00203 3.50015C2.00203 3.1023 2.16007 2.72075 2.44139 2.43944C2.72271 2.15812 3.10426 2.00007 3.5021 2.00007H12.5025C12.9004 2.00007 13.2819 2.15812 13.5633 2.43944C13.8446 2.72075 14.0026 3.1023 14.0026 3.50015V12.5006C14.0026 12.8984 13.8446 13.28 13.5633 13.5613C13.2819 13.8426 12.9004 14.0007 12.5025 14.0007H3.5021C3.10426 14.0007 2.72271 13.8426 2.44139 13.5613C2.16007 13.28 2.00203 12.8984 2.00203 12.5006V3.50015ZM5.75221 7.25033C5.75221 7.05141 5.67319 6.86064 5.53253 6.71998C5.39187 6.57932 5.2011 6.5003 5.00218 6.5003C4.80325 6.5003 4.61248 6.57932 4.47182 6.71998C4.33116 6.86064 4.25214 7.05141 4.25214 7.25033V11.7506C4.25214 11.9495 4.33116 12.1403 4.47182 12.2809C4.61248 12.4216 4.80325 12.5006 5.00218 12.5006C5.2011 12.5006 5.39187 12.4216 5.53253 12.2809C5.67319 12.1403 5.75221 11.9495 5.75221 11.7506V7.25033ZM6.12723 4.6252C6.12723 4.92359 6.0087 5.20975 5.79771 5.42074C5.58672 5.63173 5.30056 5.75026 5.00218 5.75026C4.70379 5.75026 4.41763 5.63173 4.20664 5.42074C3.99565 5.20975 3.87712 4.92359 3.87712 4.6252C3.87712 4.32682 3.99565 4.04066 4.20664 3.82967C4.41763 3.61868 4.70379 3.50015 5.00218 3.50015C5.30056 3.50015 5.58672 3.61868 5.79771 3.82967C6.0087 4.04066 6.12723 4.32682 6.12723 4.6252ZM8.00232 6.5003C8.25734 6.5003 8.48235 6.6278 8.61735 6.82131C9.00393 6.61063 9.43716 6.50026 9.87742 6.5003C11.4975 6.5003 12.5025 7.94487 12.5025 9.17868V11.7506C12.5025 11.9495 12.4235 12.1403 12.2829 12.2809C12.1422 12.4216 11.9514 12.5006 11.7525 12.5006C11.5536 12.5006 11.3628 12.4216 11.2222 12.2809C11.0815 12.1403 11.0025 11.9495 11.0025 11.7506V9.17793C11.0025 8.6019 10.5074 7.99962 9.87742 7.99962C9.4844 7.99962 9.05013 8.21338 8.75236 8.72191V11.7506C8.75236 11.9495 8.67334 12.1403 8.53268 12.2809C8.39202 12.4216 8.20125 12.5006 8.00232 12.5006C7.8034 12.5006 7.61263 12.4216 7.47197 12.2809C7.33131 12.1403 7.25229 11.9495 7.25229 11.7506V7.25033C7.25229 7.05141 7.33131 6.86064 7.47197 6.71998C7.61263 6.57932 7.8034 6.5003 8.00232 6.5003Z" fill="#6F7F92"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}