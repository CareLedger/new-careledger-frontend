import { user } from "@/data/user";
import BioItem from "../atoms/BioItem";
import Socialbutton from "../atoms/Socialbutton";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const ProfileView = () => {
  return (
    <div className="">
      <div className="p-4  justify-centerlg:p-10 text-white m-4 rounded-md  ">
        <div className="">
          <div className="flex items-center gap-x-3 lg:gap-x-5">
            <img
              className="h-16 w-16 lg:h-28 lg:w-28 rounded-full border-2 border-[#ffffff] p-[2px] lg:p-1"
              src="/images/user.jpg"
              alt="User"
            />
            <div className="flex flex-col">
              <span className="text-xl lg:text-3xl font-bold">{user.name}</span>
              <span className="text-[#00b4b6]">{user.country}</span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-800 rounded-[10px] p-6 mt-[30px]  justify-between lg:flex-row">
            <div className="py-2 my-4">
              <h3 className="text-lg font-medium lg:text-xl">Bio</h3>

              <div className="flex gap-x-[20px] cursor-pointer mt-[20px]">
                <BsFacebook color="white" size={20} />{" "}
                <BsTwitter color="white" size={20} />{" "}
                <BsInstagram color="white" size={20} />
              </div>

              <BioItem title={"Address"} value={user.address} />
              <BioItem title={"Email address "} value={user.email} />
              <BioItem title={"Phone Number"} value={user.phonenumber} />
            </div>
            <div className="py-2 my-4 lg:w-[500px]">
              <h3 className="text-lg font-medium lg:text-xl">Health Record</h3>

              {/* {
                            user.socials.map((social) => <Socialbutton {...social} />)
                        } */}

              <div className=" Gmorphism rounded-[15px] mt-[20px] p-[20px] ">
                <div className="w-full border-b-[bg-green-500] border border-x-0 border-t-0">
                  <p className="w-[200px] text-[#00b4b6] font-bold pb-[5px] border-b-[#00b4b6] border border-x-0 border-t-0 ">
                    Recent updates
                  </p>
                </div>

                <div className="w-full relative">
                  <div className="absolute w-[1px] left-[10px] top-[10px] bg-emerald-500/20  h-full" />
                  <div className="py-[20px]">
                    <div className="flex">
                      <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                        <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                      </div>
                      <p className="ml-[20px] text-white text-[15px] ">
                        19th May 2023 - Dr. Lesile
                      </p>
                    </div>

                    <div className="ml-[40px]">
                      <p className="text-[18px] font-semibold text-white my-[8px] ">
                        Spinal Osteomyelitis Surgery
                      </p>

                      <p className="text-[#ffffff90] text-[14px]">
                        Sugery conducted sucessfully.
                      </p>
                    </div>
                  </div>

                  <div className="py-[20px]">
                    <div className="flex">
                      <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                        <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                      </div>
                      <p className="ml-[20px] text-white text-[15px] ">
                      19th May 2023 - Dr. Micheal
                      </p>
                    </div>

                    <div className="ml-[40px]">
                      <p className="text-[18px] font-semibold text-white my-[8px] ">
                        Typhoid and Malaria Found
                      </p>

                      <p className="text-[#ffffff90] text-[14px]">
                        Malaria significant and Typhoid 1/160 1/80 1/80 1/180
                      </p>
                    </div>
                  </div>

                  {/* <div className="py-[20px]">
                    <div className="flex">
                      <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                        <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                      </div>
                      <p className="ml-[20px] text-white text-[15px] ">
                        02 Jun 2018 - Dr. Osass
                      </p>
                    </div>

                    <div className="ml-[40px]">
                      <p className="text-[18px] font-semibold text-white my-[8px] ">
                        Spinal Osteomyelitis Surgery
                      </p>

                      <p className="text-[#ffffff90] text-[14px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
