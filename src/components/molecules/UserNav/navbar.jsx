import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CustomConnectBtn from "../CustomConnectBtn";
import { classNames } from "../../../helpers/classNames";
import Logo from "../../../assets/White2.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [userType, setUserType] = useState("");

  const updateUserType = (type) => {
    setUserType(type);
  };

  console.log(userType);

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

            <div className="relative">
              <CustomConnectBtn type={userType} />

              {/* <CustomConnectBtn text="Connect Doc Wallet" /> */}

              {!userType && (
                <Menu as="div" className="absolute top-0 left-0 ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-transparent text-sm outline-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-9 w-[140px] outline-none " />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={() => updateUserType("pat")}
                          >
                            As a Patient
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={() => updateUserType("doc")}
                          >
                            As a Doctor
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </div>
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
