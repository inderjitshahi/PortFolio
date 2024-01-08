import React from 'react';
import Classes from './Profile.module.css'
import { TypeAnimation } from 'react-type-animation'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { SiLeetcode } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';
import me from '../../assets/Home/Me_Compressed.jpg'

function Profile(props) {
    return (
        <div className={Classes['profile-container']}>
            <div className='flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row w-full justify-center gap-x-5 xl:gap-x-40 md:translate-y-[-0px] px-5 items-center py-5'>
                <div className={`${Classes['profile-details']} flex flex-col justify-center text-white font-bold`} >
                    <div className={Classes['colz']}>
                        <div className="flex flex-wrap px-4 gap-3 items-center justify-center cursor-pointer scale-150 mb-4">
                            <a href='https://www.linkedin.com/in/inderjit-shahi-b9880a201/' target='blank' className='hover:scale-125'>
                                <BsLinkedin className='hover:text-white hover:scale-125' />
                            </a>
                            <a href='https://github.com/inderjitshahi' target='blank' className='hover:scale-125'>
                                <AiFillGithub className='hover:text-white hover:scale-125' />
                            </a>
                            <a href='https://leetcode.com/inderjitshahi' target='blank' className='hover:scale-125'>
                                <SiLeetcode className='hover:text-white hover:scale-125' />
                            </a>
                            <a href='https://www.instagram.com/inderjitshahi/?hl=en' target='blank' className='hover:scale-125'>
                                <AiFillInstagram className='hover:text-white hover:scale-125' />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100011757080675' target='blank' className='hover:scale-125'>
                                <BsFacebook className='hover:text-white hover:scale-125' />
                            </a>
                            <a href="mailto:inderjeetkmcs@gmail.com" target='blank' className='hover:scale-125'>
                                <AiFillMail className='hover:text-white hover:scale-125' />
                            </a>
                        </div>
                    </div>
                    <div className={Classes['profile-details-name']}>
                        <span className="text-3xl sm:text-4xl md:text-6xl text-center">
                            {" "}
                            Hello, IM <span className={Classes['highlighted-text']}>Inderjit Shahi</span>
                        </span>
                    </div>
                    <div className={Classes['profile-details-role']}>
                        {" "}
                        <h1 className='overflow-hidden text-center h-10'>
                            {" "}
                            <TypeAnimation
                                sequence={[
                                    "MERN Developer",
                                    1000,
                                    "Competitive Programmer",
                                    1000,
                                    "Freelancer",
                                    1000,
                                ]}
                                // wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h1>
                        <span className={`${Classes['profile-role-tagline']} text-center`}>
                            Code, Design, Inspire
                        </span>
                    </div>
                </div>
                <div className="h-64 w-64 md:w-64 md:h-64 lg:w-96 lg:h-96 border-2 rounded-full overflow-hidden hover:scale-125 transition-all ease-in-out duration-300">
                    <Image src={me} alt="Loading" className=' object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Profile;