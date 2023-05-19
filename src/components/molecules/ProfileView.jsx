import { user } from "@/data/user"
import BioItem from "../atoms/BioItem"
import Socialbutton from "../atoms/Socialbutton"

const ProfileView = () => {
    return (
        <div className="">

        
        <div className='p-4 justify-centerlg:p-10 text-white m-4 rounded-md  '>
            <div className="">
                <div className='flex items-center gap-x-3 lg:gap-x-5'>
                    <img className='h-16 w-16 lg:h-28 lg:w-28 rounded-full border-2 border-[#ffffff] p-[2px] lg:p-1' src="/images/user.jpg" alt="User" />
                    <div className='flex flex-col'>
                        <span className='text-xl lg:text-3xl font-bold'>{user.name}</span>
                        <span className="text-[#00b4b6]">{user.country}</span>
                    </div>
                </div>

                <div className='flex flex-col justify-between lg:flex-row'>
                    <div className='py-2 my-4'>
                        <h3 className='text-lg font-medium lg:text-xl'>Bio</h3>
                        <BioItem title={"Address"} value={user.address} />
                        <BioItem title={"Email address "} value={user.email} />
                        <BioItem title={"Phone Number"} value={user.phonenumber} />

                    </div>
                    <div className='py-2 my-4 lg:w-96'>
                        <h3 className='text-lg font-medium lg:text-xl'>Social</h3>

                        {
                            user.socials.map((social) => <Socialbutton {...social} />)
                        }

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileView