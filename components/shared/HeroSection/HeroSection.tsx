import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="section_padding flex flex-col items-center bg-primary-100">
      <h1 className="h1_bold my-3 text-primary-300">
        Earn From Your WhatsApp Status
      </h1>
        <p className="mt-3 font-Roboto font-normal text-primary-300">
        Unlock the Power of WhatsApp Marketing. 
        Advertise to thousands or monetize your status updates with Whisper.io.
        </p>

        <div id="button-sections" className="mt-5 inline-flex flex-col items-center">
          <Button className="bg-primary-300 px-10 py-[15px] text-primary-200 hover:border-primary-300 hover:bg-primary-100 hover:text-primary-300"><span className="text-[15px] font-[500] leading-[20.41px]">Sign Up as Agent</span></Button>
          <Button className="mt-2.5 border border-primary-300 bg-primary-100 px-6 py-[15px] hover:bg-primary-300 hover:text-primary-200"><span className="text-[15px] font-[500] leading-[20.41px]">Sign Up as Advertiser</span></Button>
        </div>
    </section>
  );
};

export default HeroSection;
