import { MetamaskIcon } from '@/components/atoms/Icons'
import HealthRecords from '@/components/molecules/HealthRecords'
import Navbar from '@/components/molecules/Navbar'
import ProfileView from '@/components/molecules/ProfileView'


function Profile() {
    return (
        <div className='bg-[#000F19]'>
            <Navbar />
            <ProfileView />
            <HealthRecords />
        </div>
    )
}


export default Profile
