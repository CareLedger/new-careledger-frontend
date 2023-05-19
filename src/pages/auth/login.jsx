import WalletButton from '@/components/atoms/WalletButton'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

function Login() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <div className='lg:w-[344px]  shadow-xl bg-white rounded-lg p-6'>
        <div className=' flex justify-between items-start mb-4'>
          <div>
            <h1 className='text-lg leading-6 font-medium'>Connect To Wallet</h1>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9199B1" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
        <div className=' py-4'>
          <WalletButton />
        </div>
      </div>
    </main>
  )
}





export default Login