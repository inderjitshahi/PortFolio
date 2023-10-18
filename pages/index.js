// import React, { Fragment } from 'react'
// import Component from '../components/Component';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Profile from '../components/Home/Homes'
import AboutMe from '../components/AboutMe/AboutMe';
import Project from '../components/Project';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
function Home({ projectDetails, skills }) {
    return (
        <main className='dark:bg-black'>
            <Head>
                <title>Inderjit Shahi</title>
                <meta name="description" content="Personal Portfolio WebSite For Inderjit Shahi"></meta>
                <meta name="author" content="Inderjit Shahi"></meta>
                <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
            </Head>
            
            <ToastContainer />  
            <Zoom>
                <Profile />
            </Zoom>
            <Zoom>
                <AboutMe />
            </Zoom>
            <Zoom>
                <Project projectDetails={projectDetails} />
            </Zoom>
            <Zoom>
                <Experience/>
            </Zoom>
            <Zoom>
                <Skills skills={skills} />
            </Zoom>
            <Zoom>
                <Footer />
            </Zoom>
            {/* <Zoom>
                <ContactMe />
            </Zoom> */}
        </main>
    );
}

export default Home;

export async function getStaticProps(context) {
    const projectDetails = [
        {
            title: "ISBlog",
            webUrl: "https://is-blog.vercel.app/",
            gitUrl: "/404",
            image: '/IsBlog.jpg'
        },
        {
            title: "Portfolio",
            webUrl: "https://port-folio-vxwv.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/PortFolio",
            image: '/is.jpg'
        },
        {
            title: "ISDoc",
            webUrl: "https://isdoc.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/ISDOc",
            image: '/ISDoc.jpg'
        },
        {
            title: "IS_AirBnB",
            webUrl: "https://is-air-bn-b.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/ISAirBnB",
            image: '/ISairBnb.jpg'
        },
        {
            title: "ISShop",
            webUrl: "/404",
            gitUrl: "https://github.com/inderjitshahi/ISShop",
            image: '/isshop.jpg'
        },
    ];
    const skills = [
        {
            logo: '/c-language-logo.png',
            level: '99%'
        },
        {
            logo: '/java-script.png',
            level: '95%'
        },
        {
            logo: '/react js_logo_react_react native_icon.svg',
            level: '95%'
        },
        {
            logo: '/nextjs-icon.svg',
            level: '98%'
        },
        {
            logo: '/google-firebase-icon.svg',
            level: '90%'
        },
        {
            logo: '/mongodb.svg',
            level: '90%'
        },
        {
            logo: '/mysql-icon.svg',
            level: '95%'
        },
        {
            logo: '/redux.png',
            level: '99%'
        },
        {
            logo: '/Expressjs.png',
            level: '90%'
        },
        {
            logo: '/tailwindcss-logotype.svg',
            level: '99%'
        },
        {
            logo: '/material-ui.svg',
            level: '99%'
        },
        {
            logo: '/numpy-seeklogo.com.svg',
            level: '80%'
        },
        {
            logo: '/python-programming-language-icon.svg',
            level: '80%'
        },
    ]
    // console.log(projectDetails);
    return {
        props: { projectDetails, skills }
    }
}