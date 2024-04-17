import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="flex gap-[260px] py-2 px-[80px] items-center [box-shadow:0px_-17px_72px_0px_#C2C2C2]">
      <Link href="#">
        <Image src={logo} className="w-[70px]" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header