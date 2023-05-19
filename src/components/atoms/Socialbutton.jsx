const Socialbutton = ({ title, link }) => {

    return (
        <button className='rounded-md text-left Gmorphism border border-[#DBDDE5] my-1 px-3 py-2  w-full'>
            <span className='text-xs capitalize'>{title} Profile</span>
            <div className='flex w-full'>
                {/* <MetamaskIcon /> */}
                <div className='flex items-center justify-between gap-x-2 '>
                    <span className='text-[#00b4b6] text-sm leading-6 inline-block  font-semibold'>{link}</span>
                </div>
            </div>
        </button>
    )
}

export default Socialbutton