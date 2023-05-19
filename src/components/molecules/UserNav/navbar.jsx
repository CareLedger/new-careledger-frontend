import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import CustomConnectBtn from "../CustomConnectBtn";
import Logo from "../../../assets/White2.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full flex justify-center navBg fixed z-10  py-4 ">
      {openMenu && (
        <div className="absolute w-full">
          <MobileMenu handleOpen={handleOpen} />
        </div>
      )}
      <div className="w-[85%]">
        <ul className="flex justify-between cursor-pointer">
          <div className="">
            <li className="">
              <Image src={Logo} alt="" srcset="" className="w-[100px]" />
            </li>
          </div>

          <div className="hidden sm:flex gap-x-5 items-center  ">
            <li className="text-[color:var(--text-color)] ">Home</li>
            <li className="text-[color:var(--text-color)]">Features</li>
            <li className="text-[color:var(--text-color)]">Offers</li>
            <li className="text-[color:var(--text-color)]">Contact Us</li>
          </div>

          <div className="sm:flex hidden gap-x-5">
            {/* <Link to="/signup">
              <li className="hover:bg-[#00b4b6] border [ transition-colors duration-500 ] border-[#00b4b6] text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]">
                <button>Connect to Cello wallet</button>
              </li>
            </Link> */}

            <CustomConnectBtn />

            <Link href="/signup">
              <li className="bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]">
                <button>Get started</button>
              </li>
            </Link>
          </div>

          <HiMenuAlt3
            className="flex md:hidden"
            color="white"
            size={30}
            onClick={handleOpen}
          />
        </ul>
      </div>
    </div>
  );
}

const MobileMenu = ({ handleOpen }) => {
  return (
    <ul className="flex bg-[#000F19] py-[20px] px-[7%] h-[80vh] w-full flex-col">
      <div className="flex justify-between items-center">
        <li className="text-[color:var(--text-color)] text-[20px] font-bold">
          <Image src={Logo} alt="" srcset="" className="w-[100px]" />
        </li>

        <AiOutlineClose size={30} color="white" onClick={handleOpen} />
      </div>

      <div className="flex-col flex gap-y-5 items-start mt-[50px] ">
        <li className="text-[color:var(--text-color)] ">Home</li>
        <li className="text-[color:var(--text-color)]">Features</li>
        <li className="text-[color:var(--text-color)]">Offers</li>
        <li className="text-[color:var(--text-color)]">Contact Us</li>
      </div>

      <div className="flex flex-col gap-y-5 mt-[50px]">
        {/* <Link to="/signup">
          <li className="hover:bg-[#00b4b6] border [ transition-colors duration-500 ] border-[#00b4b6] text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]">
            <button className="w-full">Connect to Cello wallet</button>
          </li>
        </Link> */}

        {/* <ConnectButton /> */}

        <CustomConnectBtn />

        <Link href="/signup">
          <li className="bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]">
            <button className="w-full">Get started</button>
          </li>
        </Link>
      </div>
    </ul>
  );
};

export default Navbar;
