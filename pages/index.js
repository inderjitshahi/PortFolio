import React, { Fragment } from 'react'
import Component from '../components/Component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
function Home() {
    return (
        <Fragment>
            <Head>
                <title>Inderjit Shahi</title>
            </Head>
            <ToastContainer />
            <Component />
        </Fragment>
    );
}

export default Home;