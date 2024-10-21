/* eslint-disable tailwindcss/no-custom-classname */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Timeline from "./Timeline";

interface Props {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  heading: string;
}

const BenefitsCard = ({ text1, text2, text3, text4, heading }: Props) => {
  return (
    <Card className="mt-5 rounded">
      <CardHeader className="mt-3 font-Roboto text-primary-200">{heading}</CardHeader>
      <CardContent className="rounded-none bg-primary-300 text-primary-200">
        <ol className="relative ml-2 border-s border-primary-100">
          <Timeline index={1} text={text1} />
          <Timeline index={2} text={text2} />
          <Timeline index={3} text={text3} />
          <Timeline index={4} text={text4} />
        </ol>
      </CardContent>
    </Card>
  );
};

export default BenefitsCard;
