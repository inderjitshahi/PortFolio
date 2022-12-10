import Classes from './Footer.module.css'
import React from 'react';
import Image from 'next/image';
function Footer(props) {
    return (
        <div className={Classes['footer-container']}>
            <div className={Classes['footer-parent']}>
                <Image src={require('../../assets/Home/shape-bg.png')} alt="Loading"/>
            </div>
        </div>
    );
}

export default Footer;