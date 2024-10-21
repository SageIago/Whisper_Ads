import Image from "next/image";
import ShowcaseImage from "@/app/assets/images/how-it-works-header 2.svg";
import { WorkingLists } from "@/constant";
import BenefitsCard from "./BenefitsCard";

const BenefitsSection = () => {
  return (
    <section className="section_padding flex-between flex-col rounded-md bg-primary-100">
      <div id="Benefits-Content">
        <h1 className="h2_bold mb-1.5">How It Works</h1>
        <p className="paragraph-regular text-primary-300">
          In just few easy step, you are all set for a simple and effective way
          of driving sales and earning massively with Whisper.
        </p>
      </div>

      <div id="Showcase-Image" className="mt-10 ">
        <Image src={ShowcaseImage} alt="ShowcaseImg" />
      </div>

      <div id="Showcase" className="flex flex-col justify-between">
        {WorkingLists.map((item, index) => (
          <BenefitsCard key={index + item.heading} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
