import './globals.css'
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>Muxlis</title>
        </head>
        <body>
            <TopHeader/>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>

        </body>
        </html>
    )
}
