import React from "react";
import Navbar from "../../../components/molecules/UserNav/navbar";
import doctor from "../../../assets/c.svg";
import Link  from "next/link";
import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full max-w-[85%] m-auto flex-col-reverse md:flex-row flex max-h-[700px] md:max-h-[100vh] h-[100vh] pt-[100px] pb-[50px] justify-center items-center">
        <div className="md:w-[50%] w-full flex mt-[20px] flex-col hero-box ">
          <h1 className="text-[color:var(--text-color)] mt-[40px] text-[25px] md:text-[50px] md:w-[90%] max-w-[405px]  leading-[1.2] font-bold">
            Take Your{" "}
            <span className="bg-gradient-to-r from-[#00b4b6] to-[#ff6982] text-transparent bg-clip-text">
              Clinical Trials
            </span>{" "}
            To The{" "}
            <span className="bg-gradient-to-r from-[#00b4b6] to-[#ff6982] text-transparent bg-clip-text">
              Next Level
            </span>
          </h1>
          <p className="text-[color:var(--text-color)] text-[15px] w-full md:w-[80%] mt-[20px] leading-[25px]">
            Careledger is a blockchain medical online platform designed to help Users and medical Personnel
            manage patient's information efficiently.{" "}
          </p>
          <Link href="/signup">
            <button className="border mt-[30px] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ] border-[#00b4b6] bg-[#00b4b6] w-full md:max-w-[30%] text-[color:var(--text-color)] px-3 py-[8px] rounded-[7px] hover:bg-[#00b4b6]">
              Get started
            </button>
          </Link>

          {/* <button className='bg-[#63C5D2] text-[color:var(--text-color)] px-3 py-2 rounded-[5px]' >Get started</button> */}
        </div>

        <div className="md:w-[50%] w-full">
          <div className="hero-box2 w-full mt-[30px] sm:mt-0 flex justify-center ">
            <Image src={doctor} alt="" srcset="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
