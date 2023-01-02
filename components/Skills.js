import React from 'react';
import ScreenHeading from './ScreenHeading';
import Image from 'next/image';
function Skills({ skills }) {
    return (
        <div>
            <ScreenHeading title='Skills' subHeading="How Much I Know" />
            <div className='flex gap-10 px-5 md:px-32  flex-wrap  items-center justify-center font-semibold text-xl z-10 relative '>
                {skills.map(({ level, logo }) => (
                    <div className='flex items-center justify-center group relative border-2 rounded-full overflow-hidden  hover:scale-125 transition duration-100 ease-in-out dark:bg-white'>
                        <div className='h-16 w-16  md:h-24 md:w-24 rounded-full overflow-hidden cursor-pointer group-hover:opacity-0 transition duration-100 ease-in-out'>
                            <Image
                                src={logo}
                                fill
                                alt="c++"
                            />
                        </div>
                        <span className='absolute text-2xl font-bold opacity-0 group-hover:opacity-80 transition duration-100 ease-in-out'>{level}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Skills;