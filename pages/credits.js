import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { FaBullseye } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';
function credits(props) {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-5 space-y-10'>
            <Head>
                <title>Inderjit Shahi</title>
                <meta name="description" content="Personal Portfolio WebSite For Inderjit Shahi"></meta>
                <meta name="author" content="Inderjit Shahi"></meta>
                <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
            </Head>
            <ul className='p-5 rounded-lg flex flex-col space-y-5 border-2 border-gray-400'>
                <li className='p-2 flex space-x-2 items-center'>
                    <FaBullseye />
                    <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">Whatsapp icons created by Freepik - Flaticon</a>
                </li>
            </ul>
            <Link href='/' className='flex space-x-3' >
                <BsFillArrowLeftSquareFill className='text-2xl' />
                <span>Back To Main Page</span>
            </Link>

        </div>
    );
}

export default credits;