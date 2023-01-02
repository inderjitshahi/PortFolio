import React from 'react';
import Link from 'next/link';

function Footer(props) {
    return (
        <div className='p-2 text-sm flex justify-center bg-purple-500 space-x-2 dark:text-white'>
            <p>CopyRight Reserved To Inderjit Shahi</p>
            <Link 
            href='/credits'
            >
                Credits
            </Link>
        </div>
    );
}

export default Footer;