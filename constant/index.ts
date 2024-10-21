import SecondImg from "@/app/assets/images/Frame 427320626.svg";
import PersonImg from "@/app/assets/images/image 15.svg";
import TestimonialImg from "@/app/assets/images/Frame 42 (1).svg";
import TestimonialImg2 from "@/app/assets/images/Frame 42.svg";
import FacebookIcon from "@/app/assets/icons/facebook-fill.svg"
import InstagramIcon from "@/app/assets/icons/instagram-fill.svg"
import YoutubeIcon from "@/app/assets/icons/youtube-fill.svg"
import TwitterIcon from "@/app/assets/icons/twitter-fill.svg"
import {
  BenefitsArray,
  FooterIcon,
  FooterLink,
  MarketingArray,
  WorkingListArray,
} from "@/types";

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
        text: "Affordable Advertising Fees",
      },
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
        text: "Easy Monietzation",
      },
    ],
  },
];

export const WorkingLists: WorkingListArray[] = [
  {
    heading: "Agents",
    text1: "Register your Whisper.io Account",
    text2: "Create Engaging Posts",
    text3: "Set Targeting Options and Budgets",
    text4: "Done, lets continue the work",
  },
  {
    heading: "Advertisers",
    text1: "Sign Up",
    text2: "Receive notifications for new campaigns",
    text3: "Post on your Whatsapp status",
    text4: "Earn money based on  click-throughs",
  },
];

export const MarketingLists: MarketingArray[] = [
  {
    imgURL: TestimonialImg2,
    heading: "Happy Advertiser",
    text: "Whisper helped us reach 10,000 users in one day! We are happy they came through when we have already given up 👍👍👍👍",
    sub_text: "Prince d'Okorie",
  },
  {
    imgURL: TestimonialImg,
    heading: "Fully Sized Content",
    text: "Whisper.io helped us acheive creative and thrilling content, which helped us reach wider audience in less than three days.",
    sub_text: "Fortune Ishaku",
  },
];

export const FooterLinks: FooterLink[] = [
  {
    text: "About",
  },
  {
    text: "FAQ",
  },
  {
    text: "Blog",
  },
  {
    text: "Privacy Policy",
  },
  {
    text: "Terms of Services",
  },
];

export const FooterIcons : FooterIcon[] = [
  {
    icon: FacebookIcon,
    title: "Facebook"
  },
  {
    icon: InstagramIcon,
    title: "Instagram"
  },
  {
    icon: TwitterIcon,
    title: "Twitter"
  },
  {
    icon: YoutubeIcon,
    title: "Youtube"
  }
]

export default BenefitsList;
