import { Card, CardContent } from "@/components/ui/card"
import PhoneFill from "@/app/assets/icons/phone-fill.svg"
import MailFill from "@/app/assets/icons/mail-fill.svg"
import Image from "next/image"

const CTA = () => {
  return (
   <Card className="bg-primary-300 text-primary-200 shadow-md">
       <CardContent>
            <div className="flex flex-col items-center justify-between">
                <div className="mt-3 rounded-[70px] bg-primary-100 px-5 py-4">
                <Image src={MailFill}  alt="Mail" className="items-center"/>
                </div>
                
                <h3 className="mt-5 text-[18px] font-medium leading-[30px]">HELLO @WHISPER.COM</h3>
            </div>
            <div className={`CTA_background mt-5 rounded-[6px] p-px`}></div>

            <div className="mt-3 flex flex-col items-center justify-between">
                <div className="rounded-[70px] bg-primary-100 px-5 py-4">
                <Image src={PhoneFill}  alt="Mail" className="items-center"/>
                </div>
                
                <h3 className="mt-5 text-[18px] font-medium leading-[30px]">+2348136559985</h3>
            </div>         
        </CardContent> 
   </Card>
  )
}

export default CTA