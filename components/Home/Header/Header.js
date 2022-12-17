import React, { useState } from 'react';
import Classes from './Header.module.css';
import { AiOutlineUnorderedList as MenuIcon } from "react-icons/ai";
import link from 'next/link';
import { Link } from 'react-scroll/modules';
import Image from 'next/image';
const Header = (props) => {
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    const showHeaderOptionsHandler = (e) => {
        setShowHeaderOptions(!showHeaderOptions);
        console.log(showHeaderOptions);
    }


    return (
        <div className={Classes['header-container']} onClick={showHeaderOptionsHandler}>
            <div className={Classes['header-parent']}>
                <div className={Classes['header-logo']} >
                    <span>~IS~</span>
                </div>
                <div className='flex justify-center items-center space-x-3 md:space-x-10'>
                    <a href='https://is-blog.vercel.app/' rel='noreferrer' target="_blank" className=" text-white hover:text-black text-2xl no-underline">Blog</a>
                    <div className='border-blue-600 relative  rounded-full overflow-hidden cursor-pointer'>
                        <a href='https://wa.me/+919953048059'>
                            <Image
                                src='/whatsapp.png'
                                alt="WhatsApp"
                                height={30}
                                width={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </ div>
    );
}

export default Header;