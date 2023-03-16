import './page.module.css'
import HomeBlock from "@/components/HomeBlock";
import AboutBlock from "@/components/AboutBlock";
import HowMakeMuxlisa from "@/components/HowMakeMuxlisa";
import { Inter } from 'next/font/google'
import WhereUseUs from "@/components/WhereUseUs";
import OurTeam from "@/components/OurTeam";
import Statistics from "@/components/Statistics";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
        <HomeBlock />
        <AboutBlock />
        <HowMakeMuxlisa />
        <WhereUseUs />
        <OurTeam />
        <Statistics />
    </main>
  )
}
