import { Tags } from "@/types"
import Image from "next/image"


interface FeatureCardProps {
    imgURL: string
    heading: string,
    tags: Tags[],
    paragraph: string,
}

const FeatureCard = ({imgURL, heading, tags, paragraph}: FeatureCardProps) => {
  return (
    <div className="flex-between m-3">
        <Image src={imgURL} alt={paragraph} className="mr-5"/>

        <div className="flex-col items-start">
            <h3 className="text-start font-Roboto text-[14px] font-bold leading-[18.56px] text-primary-200">{heading}</h3>
            
             <div className="flex flex-row  justify-center">
             {tags.map((item, index)=> (
                <div key={index + item.id} className="tags mr-3 mt-2.5 bg-primary-100 px-[8.5px] py-[2.71px]">
                   <p className="text-[11px] leading-[11.65px] max-sm:text-[9px]">{item.text}</p>
                </div>
             ))}
             </div>

             <p className="paragraph-regular mt-2">{paragraph}</p>   
        </div>
    </div>
  )
}

export default FeatureCard