import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import progImg1 from '../../public/programs/img1.svg'
import progImg2 from '../../public/programs/img2.svg'
import progImg3 from '../../public/programs/img3.svg'
import progImg4 from '../../public/programs/img4.svg'

const Programs = () => {
  return (
    <section id="programs" className="pt-12 pb-20 px-[80px]">
      <div className="flex justify-between items-center mb-[60px]">
        <h2 className="text-[#062144] text-center text-[36px] not-italic font-bold leading-[24px]">
          Our Programs
        </h2>
        <button className="flex items-center gap-2 text-[#062144] text-center text-[16px] not-italic font-bold leading-[24px]">
          See All <FaArrowRight className="text-[12px]" />
        </button>
      </div>
      <div>
        <Carousel
          opts={{
            align: "end",
          }}
          className="w-[90%] mx-auto"
        >
          <CarouselContent className="gap-10 pl-10">
            <CarouselItem className="basis-[22%] p-2 bg-[#5271FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg1} className="w-[150px] h-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                General program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#37C6FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg2} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                Intensive program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#5271FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg3} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                Kids program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#37C6FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg4} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                IELTS PREPARATION
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#5271FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg1} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                General program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#37C6FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg2} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                Intensive program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#5271FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg3} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                Kids program
              </h2>
            </CarouselItem>
            <CarouselItem className="basis-[22%] p-2 bg-[#37C6FF] flex flex-col gap-6 items-center justify-center rounded-[10px] py-6">
              <Image src={progImg4} className="w-[150px]" />
              <h2 className="text-[#FFF] text-center text-[20px] not-italic font-bold leading-[30px]">
                IELTS PREPARATION
              </h2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Programs;
