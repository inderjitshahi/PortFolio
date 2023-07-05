import { Zoom } from 'react-awesome-reveal';
import Head from 'next/head';
import Header from '../components/Home/Header/Header';
import ScreenHeading from '../components/ScreenHeading';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import { ImGithub } from 'react-icons/im';
import { BsGlobe } from 'react-icons/bs'
function experience({ projects }) {
    return (
        <main className='dark:bg-black'>
            <Head>
                <title>Inderjit Shahi</title>
                <meta name="description" content="Personal Portfolio WebSite For Inderjit Shahi"></meta>
                <meta name="author" content="Inderjit Shahi"></meta>
                <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
            </Head>
            <section>
                <div className='bg-gradient-to-r from-[#E949A9] to-[#A148E9]'>
                    <Header />
                </div>
                <div>
                    {projects.map((project, i) => {
                        return <div key={i} >
                            <ScreenHeading
                                subHeading={project.subheading}
                                title={project.title}
                            />
                            <div className='border-0 flex flex-col md:space-x-5 md:flex-row px-3 pt-3 md:py-5  md:px-12 text-white] items-center md:justify-between min-h-[90vh] bg-gradient-to-r to-[#B30AF5] from-[#F50AC2]'>
                                <div className='flex flex-col items-center justify-center h-full px-3'>
                                    <div >
                                        <p className='text-white text-center text-[#0AF5B3] text-md md:text-xl'>
                                            {project.begin} - {project.end}
                                        </p>
                                        <ul className='space-y-5 mt-5 list-disc'>
                                            {project.points.map((point, i) => {
                                                return <li key={i} className='text-[#F5B30A] text-sm md:text-lg'>
                                                    {point}
                                                </li>
                                            })}
                                        </ul>
                                        <div className='flex space-x-12 items-center justify-center  mt-5 md:mt-16'>
                                            <Link href={project?.website} target='_blank'>
                                                <ImGithub className=' h-8 w-8 md:h-12 md:w-12 text-[#0AF5B3]' />
                                            </Link>
                                            <Link href={project?.github} target='_blank'>
                                                <BsGlobe className='h-8 w-8 md:h-12 md:w-12 text-[#0AF5B3]' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-screen h-[60vh] p-0 m-0 md:w-[75vw] md:h-[60vh] relative mt-5 md:mt-0 rounded-t-lg  overflow-hidden'>
                                    <Image src={project?.image ? project?.image : '/not_found.svg'}
                                        loading="lazy"
                                        alt='Experience'
                                        fill
                                    ></Image>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <Footer />
            </section>
        </main>
    );
}

export default experience;

export async function getStaticProps(context) {
    const projects = [
        {
            title: "CourseCove",
            subheading: "A REST API",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/coursecove.png',
            github: "https://github.com/inderjitshahi/coursecove",
            website: "https://coursecove.onrender.com/",
            points: [
                "Led cross-functional team to develop Jansuvai complaint tracking system, benefiting 2 million citizens.",
                "Demonstrated leadership and effective communication by coordinating design and client teams, ensuring seamless integration and timely delivery.",
                "Resolved 1000+ complaints, streamlining management and reducing response times by 30%."
            ]
        },
        {
            title: "ISDashPro",
            subheading: "A MERN Admin Dashboard",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/isdashpro.png',
            github: "https://github.com/inderjitshahi/ISDashPro/",
            website: "https://isdashpro.onrender.com/",
            points: [
                "Designed data-intensive MERN project, Ishdashpro, using 1000+ data points for analysis and visualization. Integrated RESTful APIs into React admin dashboard, enabling comprehensive insights and data-driven decision-making.",
                "Attained <50ms response time, seamlessly integrating Ishdashpro’s RESTful API backend with the frontend."
            ]
        },
        {
            title: "ISShop",
            subheading: "An Express E-commerce",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/isshop1.png',
            github: "https://github.com/inderjitshahi/ISShop",
            website: "https://isshop1.onrender.com/",
            points: [
                "Developed a secure and feature-rich web application using Express.js, MongoDB, and EJS, incorporating user authentication, payment processing with Stripe, and PDF generation.",
                "Implemented robust security measures, including input sanitization, password hashing, and CSRF protection, to ensure the safety of user data.",
                "Designed a responsive and user-friendly interface, optimizing the application for seamless usage across devices of different screen sizes."
            ]
        },
    ];
    return {
        props: { projects }
    }
}
