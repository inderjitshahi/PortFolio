import React from 'react';

function ScreenHeading({title,subHeading}) {
    return (
        <div className='my-10 space-y-5 flex flex-col justify-center items-center font-bold dark:text-white'>
            <h1 className='text-2xl'>{title}</h1>
            <h2 className='text-xl'>{subHeading}</h2>
            <div className='h-[.1rem] w-[10rem] sm:w-[20rem] bg-purple-500 flex justify-center items-center'>
                <div className='h-[.5rem] w-1/2 bg-pink-500 rounded-full'></div>
            </div>
        </div>
    );
}

export default ScreenHeading;