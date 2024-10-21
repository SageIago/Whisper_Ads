import FeatureImage from "@/app/assets/images/Group 427320630.png";
import BenefitsList from "@/constant";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="section_padding flex-between flex-col">
      <div id="Features_Image">
        <Image src={FeatureImage} alt="Features" />
      </div>

      <div className="mt-10 h-[465px]" id="Features-Content">
        <h2 className="h2_semi-bold mb-1.5 font-inter">Why Use Whisper.io</h2>
        <p className="paragraph-regular">
          Our platform helps businesses get the visibility they deserve while
          providing flexible and hassle-free earning opportunity for agents.
        </p>


        <h3 className="mt-10 text-[23px] leading-[20.11px] text-primary-200">Benefits</h3>
        <div id="Benefits" className="mt-3 flex flex-row justify-between">
            <div>
            {BenefitsList.map((benefits, index) => (
            <FeatureCard
              key={index}
              tags={benefits.tags}
              imgURL={benefits.imageURL}
              heading={benefits.heading}
              paragraph={benefits.paragraph}
            />
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
