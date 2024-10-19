import { BenefitsArray} from "@/types";
import PersonImg from "@/app/assets/images/image 15.svg";
import SecondImg from "@/app/assets/images/Frame 427320626.svg";

const BenefitsList: BenefitsArray[] = [
  {
    heading: "Advertiser",
    imageURL: PersonImg,
    paragraph: "Targeted reach and increased brand awareness.",
    tags: [
      {
        id: 1,
        text: "Measurable ROI",
      },
      {
        id: 2,
        text: "Affordable Advertising Fees"
      }
    ],
  },
  {
    heading: "Agent",
    imageURL: SecondImg,
    paragraph: "Passive income from WhatsApp status",
    tags: [
      {
        id: 1,
        text: "No Content Creation",
      },
      {
        id: 2,
        text: "Easy Monietzation"
      }
    ],
  },
];

export default BenefitsList;
