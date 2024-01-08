import Classes from './Footer.module.css'
import React from 'react';
import Image from 'next/image';
import Canvas from '../Canvas/Canvas';
function Footer(props) {
    return (
        <div className={Classes['footer-container']}>
            <div className={Classes['footer-parent']}>
                <Image src={require('../../assets/Home/shape-bg.png')} alt="Loading" className='dark:hidden' />
            </div>
            {/* <Canvas /> */}
        </div>
    );
}

export default Footer;