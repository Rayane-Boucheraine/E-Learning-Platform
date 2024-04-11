import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const footer = () => {
  return (
    <footer id="contact" className="px-[80px] py-8 bg-[#062144]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-[30px] text-[#FFF] tracking-[6px] text-[20px] not-italic font-bold leading-[24px] uppercase">
            CENTRE tizi-ouzou
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <FaMapMarkerAlt className="text-[#37C6FF] text-[16px] mb-[18px]" />
              Rue des frères Beggaz - Galerie Stiti au 1er etage - la tour{" "}
              <br /> Tizi Ouzou
            </li>
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <CgMail className="text-[#37C6FF] text-[16px]" />
              elitesalgerie@gmail.com
            </li>
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <FaPhoneAlt className="text-[#37C6FF] text-[16px]" />
              +213 770 307 515
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-[30px] text-[#FFF] tracking-[6px] text-[20px] not-italic font-bold leading-[24px] uppercase">
            CENTRE BEJAIA
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <FaMapMarkerAlt className="text-[#37C6FF] text-[16px] mb-[18px]" />
              Rue des frères Beggaz - Galerie Stiti au 1er etage - la tour{" "}
              <br /> Tizi Ouzou
            </li>
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <CgMail className="text-[#37C6FF] text-[16px]" />
              elitesalgerie@gmail.com
            </li>
            <li className="flex items-center gap-2 text-[#FFF] text-[16px] not-italic font-normal leading-[24px]">
              <FaPhoneAlt className="text-[#37C6FF] text-[16px]" />
              +213 770 307 515
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[40px]">
        <span className="text-[#EAEAEA] text-[14px] not-italic font-normal leading-[24px]">
          Elites School of English .
        </span>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100009942338594">
              <span className="block flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#37C6FF]">
                <FaFacebook />
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/rayane_boucheraine/">
              <span className="block flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#37C6FF]">
                <BsInstagram />
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rayane-boucheraine/">
              <span className="block flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#37C6FF]">
                <IoLogoLinkedin />
              </span>
            </Link>
          </li>
        </ul>
        <span className="text-[#EAEAEA] text-[14px] not-italic font-normal leading-[24px]">
          Copyright All rights reserved .
        </span>
      </div>
    </footer>
  );
};

export default footer;
