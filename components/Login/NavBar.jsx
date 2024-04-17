import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[80px]">
        <li>
          <Link
            href="#"
            className="text-[#062144] text-[14px] not-italic font-bold leading-[24px]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#programs"
            className="text-[#062144] text-[14px] not-italic font-bold leading-[24px]"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-[#062144] text-[14px] not-italic font-bold leading-[24px]"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar