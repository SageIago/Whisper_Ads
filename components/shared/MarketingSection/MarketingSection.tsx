import Image from "next/image"
import SectionImage from '@/app/assets/images/SectionImage.png'
import CarouselSection from "./CarouselSection"

const MarketingSection = () => {
  return (
    <section className=" flex-between section_padding flex-col bg-primary-300 text-primary-200">
        <div id="Content">
            <h3 className="h2_semi-bold mb-3 text-primary-200">Dont Take Our Words For It</h3>
            <p className="paragraph-regular text-primary-200">
            Whisper users are satisfied and always happy to share their experiences using the platform.
            </p>
        </div>

        <div id="carousel" className="ml-2 mt-3">
          <CarouselSection />
        </div>

        <div id="SectionImage" className="mt-10">
        <Image src={SectionImage} alt="SectionImage"/>
        </div>
    </section>
  )
}

export default MarketingSection