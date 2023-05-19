import React from "react";
import PatientTableData from "../../components/molecules/patientTableData";
import Navbar from "@/components/molecules/Navbar";
import { FaUser } from "react-icons/fa";

const PatientsDashboard = () => {
  return (
    <div className="bg">
      <Navbar />
      <div className="px-5">
        <div className=" shadow rounded-lg px-4 mt-[40px] py-[20px] w-full sm:max-w-[300px]  flex items-center card-shadow">
          <div className="w-full flex flex-col gap-y-2">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-x-2 w-full">
                <div className="mb-2">
                  <FaUser color="white" />
                </div>
                <div>
                  <h2 className=" text-white text-sm font-medium mb-2">
                    Overall Accessed patients
                  </h2>
                </div>
              </div>

              <div className="flex gap-x-1 mb-1 ">
                <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
                <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
                <div className="w-[6px] h-[6px] rounded-[50%] bg-white" />
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="text-gray-400 text-3xl font-bold">1,000</p>
              <p className="bg-[#ffffff10] py-1 px-2 text-[#46f0f3] rounded-[14px]">
                + 10.4%
              </p>
            </div>
            <p className="text-[11px] leading-2 text-white">
              Data obtained from the last 7days from 1,040 Visitors to 2,587
              Visitors.
            </p>
            <div className="">
              <div className="w-[100px] h-[7px] bg-[#ffffff] rounded-[6px] absolute" />
              <div className="w-full h-[7px] bg-[#00000040] relative rounded-[6px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow py-[20px] bg-[#000f19] px-[30px]">
        <h1 className="text-[25px] text-white mt-[5px]">Patients List</h1>
        <p className="text-[15px] text-gray-400">Get all patients lists</p>

        <PatientTableData />
      </div>
    </div>
  );
};

export default PatientsDashboard;
