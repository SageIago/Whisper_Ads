import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/Logo.svg"
import MenuBar from "@/app/assets/icons/Vector.png";

const Navbar = () => {
  return (
    <nav className="flex-between h-[116px] gap-2 border-b-[0.5px] border-b-green-500 bg-primary-100 px-5 py-6 font-Roboto font-bold text-primary-300">
      <Link href={"/"} className="mr-3 flex h-[22.37px]  w-[108.68px] items-center gap-1">
        <Image src={Logo} alt="Whisper Ads Logo" className="" />
        <span className="font-Roboto text-[16px] font-bold leading-[14.4px] tracking-[-0.03px]">
            Whisper.io
        </span>
      </Link>

      <div id="Navbar-Links" className="">
        <Image
          src={MenuBar}
          alt="MenuBar"
          className="mr-3 h-[13px] w-[18px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
