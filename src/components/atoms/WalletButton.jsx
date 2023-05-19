import { InfoIcon, MetamaskIcon } from "./Icons"

const WalletButton = () => {
    return (
        <button className='rounded-md flex justify-between items-center bg-[#F2F3F5] border border-[#DBDDE5] px-3 py-4 w-full'>
            <div className='flex items-center justify-between gap-x-2'>
                <span className='text-[#070707] text-base leading-6 inline-block  font-semibold'>Metamask</span>
                <span className='text-[#5A6689] text-sm leading-6'>Networks</span>
                <InfoIcon info={"Celo Wallet"} />
            </div>
            <MetamaskIcon />
        </button>)
}
export default WalletButton