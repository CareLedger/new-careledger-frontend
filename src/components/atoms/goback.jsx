import React from "react";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

function Goback() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <div
        className="w-full lg:ml-[70px] ml-5 text-[#00b4b6] font-bold"
        onClick={goBack}
      >
        <div className="flex items-center gap-x-3 ">
          <BiArrowBack size={30} />
          <button>Go Back</button>
        </div>
      </div>
    </>
  );
}

export default Goback;
