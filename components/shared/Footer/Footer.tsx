import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/Logo.svg";
import { FooterIcons, FooterLinks } from "@/constant";
import SendIcon from "@/app/assets/icons/send-plane-2-fill.svg"
import CTA from "../CTA/CTA";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="section_padding flex flex-col bg-primary-100 text-primary-300">
      <div>
        <CTA />
      </div>

      <div id="Footer_Logo" className="mt-10 flex flex-col items-start gap-1">
        <Link
          href={"/"}
          className="mb-3 mr-3 flex  h-[22.37px] w-[108.68px] items-center gap-1"
        >
          <Image src={Logo} alt="Whisper Ads Logo" className="" />
          <span className="font-Roboto text-[16px] font-bold leading-[14.4px] tracking-[-0.03px]">
            Whisper.io
          </span>
        </Link>

        <p className="paragraph-regular mt-3">
          Unlock the Power of WhatsApp Marketing. Advertise to thousands or
          monetize your status updates with Whisper.io.
        </p>

        <div id="Navbar_Links" className="flex flex-row gap-2">
          {FooterIcons.map((icon, index) => (
            <div key={index + icon.title} className="mt-3 p-3">
              <Image src={icon.icon} alt={icon.title} />
            </div>
          ))}
        </div>
      </div>

      <div id="Footer_Links" className="mb-4 mt-3">
        <h3 className="mt-2 font-Roboto text-[16px] font-bold uppercase leading-[37.5px]">
          quick link
        </h3>
        {FooterLinks.map((item, index) => (
          <p
            className="mt-3 font-Roboto text-[14px] font-normal leading-[21px]
             text-primary-300"
            key={item.text + index}
          >
            {item.text}
          </p>
        ))}
      </div>

      <div id="NewsLetter" className="mb-4 mt-2">
        <h3 className="mt-2 font-Roboto text-[16px] font-bold uppercase leading-[37.5px]">
          News Letter
        </h3>

        <p className="my-3 font-Roboto text-[14px] font-normal leading-[21px] text-primary-300">
          Subscribe our newsletter to get our latest update & news
        </p>

        <div className="flex flex-row gap-2 rounded-[8px] bg-primary-300 px-[20px] py-[10px]">
          <Input
            placeholder="Your Email Address"
            className="cursor-pointer border-none border-primary-300 text-primary-200 shadow-none"
          />
          <div className="ml-2 rounded-[5px] bg-primary-100 px-[10px] py-[6px]">
          <Image src={SendIcon} alt={"Send Icon"} />
          </div>
        </div>
      </div>

      <div className="bg-primary-300 p-px"></div>

      <p className="ml-3 mt-3 text-center text-[12px] font-normal leading-[14.06px] text-primary-300">
        © 2024 WhisperAds. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
