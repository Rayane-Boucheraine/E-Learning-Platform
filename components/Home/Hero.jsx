import Image from "next/image"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import women from '../../public/women.png'

const Hero = () => {
  return (
    <section className="relative px-[80px] py-12 flex items-center justify-between  after:h-[1px] after:w-[70%] after:absolute after:bg-[#37C6FF] after:left-[50%] after:translate-x-[-50%] after:bottom-0">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#062144] text-center text-[50px] not-italic font-bold leading-[24px]">
          Elites School E-learning platform
        </h1>
        <h2 className="text-[#062144] mb-[10px] mt-[30px] text-[40px] italic font-bold leading-[119.5%]">
          “To have another{" "}
          <span className="text-[#5271FF] text-[40px] italic font-bold leading-[119.5%]">
            language
          </span>{" "}
          is to <br /> possess a{" "}
          <span className="text-[#5271FF] text-[40px] italic font-bold leading-[119.5%]">
            second soul
          </span>{" "}
          ”
          <span className="text-[#000] text-center pl-[80px] text-[18px] italic font-normal leading-[24px]">
            Charlemagne .
          </span>
        </h2>
        <p className="text-[#000] text-[16px] not-italic font-normal leading-[24px]">
          Lorem ipsum dolor sit amet consectetur. In duis habitant ac <br />{" "}
          nisi. Id odio nec vivamus id gravida. A nisl elit lorem posuere <br />{" "}
          venenatis auctor.
        </p>
        <Link
          href="login"
          className="flex items-center w-fit gap-2 py-2 px-7 rounded-[10px] bg-[var(--color1,_#5271FF)] text-[#FFF] text-[14px] font-bold leading-[24px]"
        >
          Start learning <FaArrowRight className="text-[14px]" />
        </Link>
      </div>
      <div>
        <Image src={women} />
      </div>
    </section>
  );
}

export default Hero