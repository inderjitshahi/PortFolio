import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScreenHeading from './ScreenHeading'
function Experience() {
    return (
        <div >
            <ScreenHeading
                subHeading={"Unleashing Expertise"}
                title={"Projects"}
            />
            <div className='border-0 flex flex-col-reverse md:flex-row p-2 md:p-5 text-white] items-center md:justify-between md:pl-48 max-h-[90vh] bg-gradient-to-r to-[#B30AF5] from-[#F50AC2]'>
                <div className='w-[50vw] h-[50vh] relative mt-5 md:mt-0'>
                    <Image src={'/projects.svg'}
                        loading="lazy"
                        alt='Experience'
                        fill
                    ></Image>
                </div>
                <div className='flex flex-col items-center justify-center md:h-full md:w-full'>
                    <div >
                        <h3 className='text-2xl md:text-6xl text-[#0AF5B3] text-center'>Projects</h3>
                        <p className='text-center text-[#0AF5B3] text-md md:text-xl'>
                            Delve into Impressive Portfolio
                        </p>
                    </div>
                    <Link href={'/projects'}>
                        <button
                            type="button"
                            className="inline-block mt-5 md:mt-10 rounded-full border-2 border-[#0AF5B3] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#0AF5B3] transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 font-extrabold"
                            data-te-ripple-init>
                            Explore
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Experience