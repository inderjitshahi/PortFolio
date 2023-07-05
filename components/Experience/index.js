import React from 'react'
import ScreenHeading from '../ScreenHeading'
import Link from 'next/link'
import Image from 'next/image'
function Experience() {
    return (
        <div >
            <ScreenHeading
                subHeading={"Professional Journey"}
                title={"Experience"}
            />
            <div className='border-0 flex flex-col md:flex-row  p-3 md:p-5 text-white] items-center md:justify-between md:pl-48 max-h-[90vh] bg-gradient-to-r from-[#692CF3] to-[#8B5CF6]'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div >
                        <h3 className='text-white text-3xl md:text-6xl text-[#5cf68b] text-center'>Experience</h3>
                        <p className='text-white text-center text-[#5cf68b] text-md md:text-xl'>
                            Explore a Trail of Accomplishments
                        </p>
                    </div>
                    <Link href={'/experience'}>
                        <button
                            type="button"
                            className="inline-block mt-5 md:mt-10 rounded-full border-2 border-[#5cf68b] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#5cf68b] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 font-extrabold"
                            data-te-ripple-init>
                            Get Inspired
                        </button>
                    </Link>
                </div>
                <div className='w-[50vw] h-[50vh] relative mt-5 md:mt-0'>
                    <Image src={'/experience.svg'}
                        loading="lazy"
                        alt='Experience'
                        fill
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export default Experience