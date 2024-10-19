import Features from "@/components/shared/FeatureSection/Features"
import HeroSection from "@/components/shared/HeroSection/HeroSection"
import Navbar from "@/components/shared/Navbar/Navbar"


const Home = () => {
  return (
    <div id="HomePage" className="font-inter  font-bold text-primary-200">
        <Navbar />

        <div id="sections">
            <HeroSection />
            <Features />
        </div>
    </div>
  )
}

export default Home