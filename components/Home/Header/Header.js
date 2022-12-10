import React, { useState } from 'react';
import Classes from './Header.module.css';
import { AiOutlineUnorderedList as MenuIcon } from "react-icons/ai";
import {Link} from 'react-scroll';



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
                        <Link to='home' smooth={true} duration={400} className=" text-white hover:text-black  no-underline">Home</Link>
                    </span>
                    <span className={Classes['header-option']}>
                        <Link to='aboutMe' smooth={true} duration={600} className="text-white hover:text-black no-underline">About Me</Link>
                    </span>
                    <span className={Classes['header-option']}>
                        <Link to='resume' smooth={true} duration={800} className="text-white hover:text-black  no-underline">Resume</Link>
                    </span>
                    <span className={Classes['header-option']}>
                        <Link to='contactMe' smooth={true} duration={1000} className="text-white hover:text-black hover:text no-underline">Contact Me</Link>
                    </span>
                </div>
            </div>
        </ div>
    );
}

export default Header;