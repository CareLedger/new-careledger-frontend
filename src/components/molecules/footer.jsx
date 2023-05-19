import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full  border border-[#63C5D260] border-x-0 py-[20px] ">
        <div className="w-full max-w-[85%] m-auto">
          <ul className="flex sm:flex-row flex-col justify-between cursor-pointer">
            <div>
              <li className="text-[color:var(--text-color)] text-[20px] font-bold">
                Logo
              </li>
            </div>
            <div className="flex gap-x-5 items-center mt-[30px] sm:mt-[0px] text-[12px] md:text-[13px]">
              <li className="text-[color:var(--text-color)]">Home</li>
              <li className="text-[color:var(--text-color)]">About</li>
              <li className="text-[color:var(--text-color)]">Features</li>
              <li className="text-[color:var(--text-color)]">Contact Us</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[85%] m-auto py-[15px]">
        <div className="flex justify-between sm:flex-row flex-col items-center ">
          <div className="flex gap-x-[25px]">
            <div className="h-[35px] w-[35px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsFacebook color="#63C5D2" size={15} />
            </div>

            <div className="h-[35px] w-[35px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <AiOutlineTwitter color="#63C5D2" size={20} />
            </div>

            <div className="h-[35px] w-[35px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsInstagram color="#63C5D2" size={15} />
            </div>

            <div className="h-[35px] w-[35px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsLinkedin color="#63C5D2" size={15} />
            </div>
          </div>

          <div className="mt-[20px] sm:mt-[0px] text-[12px] md:text-[14px]">
            <p className="text-white">&copy; CareLedger 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
