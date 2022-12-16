import React, { useState } from 'react';
import Classes from './Header.module.css';
import { AiOutlineUnorderedList as MenuIcon } from "react-icons/ai";
import  link from 'next/link';
import { Link  } from 'react-scroll/modules';

const Header = (props) => {
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    const showHeaderOptionsHandler = (e) => {
        setShowHeaderOptions(!showHeaderOptions);
        console.log(showHeaderOptions);
    }


    return (
        <div className={Classes['header-container']} onClick={showHeaderOptionsHandler}>
            <div className={Classes['header-parent']}>
                <div className={Classes['header-hamburger']} onClick={showHeaderOptionsHandler}>
                   { <MenuIcon className={Classes['header-options-bars']}/>}
                </div>
                <div className={Classes['header-logo']} >
                    <span>~IS~</span>
                </div>
                <div className={showHeaderOptions ? `${Classes['header-options']} ${Classes['show-hamburger-options']}` : `${Classes['header-options']}`} >
                    <span className={Classes['header-option']}>
                        <a href='https://is-blog.vercel.app/' rel='noreferrer' target="_blank"  className=" text-white hover:text-black text-2xl no-underline">Blog</a>
                    </span>
                </div>
            </div>
        </ div>
    );
}

export default Header;