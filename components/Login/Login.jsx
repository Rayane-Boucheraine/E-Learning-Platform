import Image from "next/image";
import img from '../../public/Frame.svg'

const Login = () => {
  return (
    <div className="flex gap-[240px] px-[80px] mt-[40px]">
      <div>
        <h1 className="text-[#062144] text-[40px] font-bold z-50 relative">
          Elites School E-learning platform
        </h1>
        <Image src={img} className="absolute w-[550px] bottom-0" />
      </div>
      <div className="flex flex-col gap-[20px] mt-[26px]">
        <h2 className="text-[#062144] text-center text-[28px] not-italic font-bold leading-[24px]">
          Login to your account
        </h2>
        <form
          action=""
          className="flex flex-col justify-center items-center mt-[10px]"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[#062144] text-[14px] not-italic font-normal leading-[20px] mb-[6px]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Elitesstudent@gmail.com"
              required
              className="rounded-[10px] w-[360px] outline-none border-[1px] border-[solid] border-[#C5C6CE] bg-[#FFF] p-[8px] px-[14px] text-[#D4D4D4] text-[14px] not-italic font-normal leading-[24px] mb-[28px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-[#062144] text-[14px] not-italic font-normal leading-[20px] mb-[6px]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="rounded-[10px] w-[360px] outline-none border-[1px] border-[solid] border-[#C5C6CE] bg-[#FFF] p-[8px] px-[14px] text-[#D4D4D4] text-[14px] not-italic font-normal leading-[24px]"
            />
          </div>
          <input
            type="submit"
            value="Sign In"
            className="cursor-pointer flex w-[360px] py-[8px] mt-[60px] justify-center items-center gap-[5px] rounded-[10px] border-[0px] border-[solid] border-[#5271FF] bg-[#5271FF] text-[#FFF] text-center text-[14px] not-italic font-bold leading-[24px]"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
