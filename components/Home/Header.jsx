import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../public/logo.png";
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="flex justify-between py-2 px-[80px] items-center [box-shadow:0px_-17px_72px_0px_#C2C2C2]">
      <Link href="#">
        <Image src={logo} className="w-[70px]" />
      </Link>
      <NavBar />
      <Link
        href="login"
        className="flex items-center gap-2 py-2 px-7 rounded-[10px] bg-[var(--color1,_#5271FF)] text-[#FFF] text-[14px] font-bold leading-[24px]"
      >
        Get Started <FaArrowRight className="text-[14px]" />
      </Link>
    </header>
  );
}

export default Header