import './page.module.css'
import HomeBlock from "@/components/HomeBlock";
import AboutBlock from "@/components/AboutBlock";
import HowMakeMuxlisa from "@/components/HowMakeMuxlisa";

export default function Home() {
  return (
    <div>
        <HomeBlock />
        <AboutBlock />
        <HowMakeMuxlisa />
    </div>
  )
}
