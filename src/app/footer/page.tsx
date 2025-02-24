import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Clock from '../../../public/images/time-svgrepo-com.svg'

export default function page() {
    return (
        <main className='flex flex-col justify-center items-center bg-[#1b1b1b] text-white py-5 px-4'>
            <div className='w-full text-center space-y-2'>
                <hr className='w-[98%] mx-auto border-[#b6b4ae]' />
                <p className='italic text-[#b6b4ae] text-base font-normal'>Your cup of tea?</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white">Let&apos;s Start</h1>
            </div>

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-2 w-full max-w-4xl mt-3">
                {/* Email */}
                <div className='text-center md:text-left'>
                    <Link href="mailto:oduwoleadetohlar@gmail.com">
                        <h2 className='text-lg md:text-xl font-bold break-words'>
                            oduwoleadetohlar@gmail.com
                        </h2>
                    </Link>
                    <hr className='w-full mx-auto md:mx-0 border-[#b6b4ae]' />
                </div>

                {/* Clock Icon */}
                <div>
                    <Image src={Clock} alt='Clock Icon' className='w-16 h-16 md:w-20 md:h-20' />
                </div>

                {/* Contact Info */}
                <div className='text-center md:text-right'>
                    <p className='text-lg md:text-xl font-bold whitespace-nowrap'>+234-90-29-47-5762</p>
                    <hr className='w-full mx-auto md:mx-0 border-[#b6b4ae]' />
                    <p className='text-[#b6b4ae] text-sm md:text-base whitespace-nowrap'>
                        Lagos, Nigeria (WAT)
                    </p>
                </div>
            </div>
        </main>
    )
}
