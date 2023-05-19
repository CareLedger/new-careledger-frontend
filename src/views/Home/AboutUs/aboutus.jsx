import React from "react";
import aboutUs from "../../../assets/whatweoffer.jpg";
import Lines from "../../../assets/lines.svg";
import { RiRestartFill } from "react-icons/ri";
import digitalStorage from "../../../assets/digitalStore.png";
import recordTracker from "../../../assets/tracker.png";
import id from "../../../assets/id.png";
import securePrivacy from "../../../assets/smart-lock.png";
import Image from "next/image"

const offerInfo = [
  {
    icon: digitalStorage,
    title: "Digital Storage",
    description:
      "A digital storage where doctors and hospitals, gets to store each patient details.",
  },
  {
    icon: recordTracker,
    title: "Record tracker",
    description:
      "A track Record where doctors get to check the progress of each patient in the digital storage.",
  },
  {
    icon: id,
    title: "Unique ID",
    description:
      "A unique identification number issued to every patient on the digital storage dashboard to use to acess and i dentifiy each patient",
  },
  {
    icon: securePrivacy,
    title: "Privacy & Security",
    description:
      "Patient and hospital information are stored in the blochchain were its being secured and private to those who are authorisede.",
  },
];

function Aboutus() {
  return (
    <>
      <Image src={Lines} alt="" className="w-full absolute z-0" />
      <div className="w-full pb-[120px]">
        <div className="w-full max-w-[85%] m-auto flex flex-col items-center justify-center py-[20px] md:py-[60px]">
          <p className="text-[#00b4b6] font-semibold">How it works</p>
          <h1 className="font-bold text-[23px] sm:text-[30px] my-[5px] text-white">
            what We Offer
          </h1>
          <p className="text-[14px] text-white w-full md:w-[400px]  text-center font-[300]">
            
          </p>

          <div className="flex w-full md:flex-row flex-col items-center gap-x-[100px] mt-[50px]">
            <div className=" md:w-[50%]">
              <Image
                src={aboutUs}
                alt=""
                srcset=""
                className="rounded-tr-[40px] rounded-bl-[30px] inline-block shadow-lg shadow-[#00b4b6]"
              />
            </div>

            <div className="w-full md:w-[50%] md:mt-[0px] mt-[25px]">
              {offerInfo.map((item, i) => {
                return (
                  <div className="flex w-full items-center mt-[25px]">
                    <div className="h-[40px] w-[40px] max-w-[40px] bg-[#121212] card-shadow  border border-[#00b4b6] rounded-[50px] flex items-center justify-center">
                      <Image src={item.icon} className="w-[60%]" alt="" />
                    </div>

                    <div className="ml-[20px] flex-1">
                      <h3 className="font-semibold text-[18px] text-white ">
                        {item.title}
                      </h3>
                      <p className="mt-[8px] text-[14px] w-full md:w-[400px] text-white font-[300]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
