import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MarketingLists } from "@/constant";

const CarouselSection = () => {
  return (
    <Carousel className="">
      <CarouselContent className="ml-4">
        {MarketingLists.map((item, index) => (
          <CarouselItem key={index} className="flex-between card-shadow ml-3 rounded border border-gray-500 p-5 sm:basis-2/5">
            <div className="m-2">
              <Image src={item.imgURL} alt={item.heading + index} className="mr-2"/>
            </div>

            <div className="flex flex-col justify-between">
              <h3 className="h3-carousel mb-2">{item.heading}</h3>
              <p className="mt-3 text-[10px] font-normal leading-[10px]">{item.text}</p>
              <h4 className="mt-4 text-[10.37px] font-bold leading-[3.77px]">
                {item.sub_text}
              </h4>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselSection;
