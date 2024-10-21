import BenefitsSection from "@/components/shared/BenefitsSection/BenefitsSection"
import Features from "@/components/shared/FeatureSection/Features"
import Footer from "@/components/shared/Footer/Footer"
import HeroSection from "@/components/shared/HeroSection/HeroSection"
import MarketingSection from "@/components/shared/MarketingSection/MarketingSection"
import Navbar from "@/components/shared/Navbar/Navbar"


const Home = () => {
  return (
    <div id="HomePage" className="font-inter  font-bold text-primary-200">
        <Navbar />

        <div id="sections">
            <HeroSection />
            <Features />
            <BenefitsSection />
            <MarketingSection />
            <Footer />
        </div>
    </div>
  )
}

export default Home