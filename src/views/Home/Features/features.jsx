import React from "react";
import uploadImage from "../../../assets/upload.png";
import controlacces from "../../../assets/smart-lock.png";
import wallet from "../../../assets/wallet.png";
import Lines from "../../../assets/lines.svg";
import Image from "next/image";

function Features() {
  return (
    <>
      <Image src={Lines} alt="" className="w-full absolute z-0 mt-[50px] md:mt-0" />
      <div className="w-full mt-[30px] relative pb-[70px]">
        <div className=" w-full max-w-[85%] m-auto flex flex-col items-center justify-center py-[30px] sm:py-[60px] ">
          <h1 className="font-bold text-[23px] sm:text-[30px] text-white">Our Features</h1>
          <p className="text-[14px] text-center text-white font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex flex-wrap  justify-between text-white gap-x-[3%] py-7 mt-[30px] sm:mt-[100px]">
            <div className="flex h-[300px] card-shadow w-full sm:w-[48%] lg:w-[31%] mt-[25px] lg:mt-[0px] flex-col items-center justify-center px-5 py-7 gap-y-3 rounded-[7px]">
              <Image src={uploadImage} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">Upload/Update</h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>

            <div className="flex flex-col h-[300px] w-full sm:w-[48%] lg:w-[31%] mt-[30px] lg:mt-[0px] card-shadow items-center justify-center px-5 py-7 gap-y-3  rounded-[7px]">
              <Image src={controlacces} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">
                Controlled Access
              </h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>

            <div className="flex flex-col h-[300px] w-full sm:w-[48%] lg:w-[31%] mt-[25px] lg:mt-[0px] card-shadow items-center justify-center px-5 py-7 gap-y-3 rounded-[7px]">
              <Image src={wallet} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">Celo Wallet</h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
