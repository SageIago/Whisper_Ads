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
    <div className="m-3 flex items-center">
        <Image src={imgURL} alt={paragraph} className="mr-5"/>

        <div className="flex flex-col justify-between">
            <h3 className="text-start font-Roboto text-[16px] font-bold leading-[18.56px] text-primary-200">{heading}</h3>
            
             <div className="inline-flex flex-row">
             {tags.map((item, index)=> (
                <div key={index + item.id} className="tags mr-3 mt-3  bg-primary-100 px-[15.5px] py-[2.71px]">
                   <p className="text-center text-[8.5px] leading-[11.65px]">{item.text}</p>
                </div>
             ))}
             </div>

             <p className="paragraph-regular mt-2">{paragraph}</p>   
        </div>
    </div>
  )
}

export default FeatureCard