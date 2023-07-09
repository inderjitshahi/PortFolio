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
                            <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3  overflow-hidden place-items-center bg-gradient-to-r to-[#B30AF5] from-[#F50AC2]'>
                                <div className='flex flex-col  items-center justify-center p-3  md:p-8'>
                                    <div className='px-5' >
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
                                            {project?.website && <Link href={project?.website} target='_blank'>
                                                <BsGlobe className=' h-8 w-8 md:h-12 md:w-12 text-[#0AF5B3]' />
                                            </Link>}
                                            {project?.github && <Link href={project?.github} target='_blank'>
                                                <ImGithub className='h-8 w-8 md:h-12 md:w-12 text-[#0AF5B3]' />
                                            </Link>}
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[100%] w-[100%]  md:h-[95%] md:w-[95%] relative rounded mt-5 md:mt-0 shadow-2xl overflow-hidden'>
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
        {
            title: "Portfolio",
            subheading: "A Next.js UI Portfolio",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/portfolio.png',
            github: "https://github.com/inderjitshahi/PortFolio",
            website: "https://inderjitshahi.vercel.app/",
            points: [
                "Next.js and Tailwind-powered portfolio website showcasing my skills and projects in a modern and visually appealing manner.",
                "Seamless user experience and responsive design achieved through the combination of Next.js's server-side rendering and Tailwind's utility-first CSS framework, ensuring optimal performance across devices."
            ]
        },
        {
            title: "OlympISights",
            subheading: "Data Visualization",
            begin: 'June, 2023',
            end: "Under Progress",
            image: '/project_images/olympic.png',
            github: "https://github.com/inderjitshahi/OlympISights",
            website: "https://olympisights.onrender.com/",
            points: [
                "Utilize the power of Python libraries such as Pandas, Matplotlib, NumPy, and Streamlit to create an interactive Olympic data visualization project. Explore and analyze historical Olympic data to uncover patterns, trends, and insights.",
                "Leverage Pandas for data manipulation and analysis, Matplotlib for creating visually appealing charts and graphs, NumPy for efficient numerical operations, and Streamlit for building a user-friendly interface to showcase your Olympic data visualizations. Gain valuable insights into the Olympic Games and present them in an engaging and informative manner."
            ]
        },
        {
            title: "ISBlog",
            subheading: "A Next.js and Firebase Blog App",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/isblog.jpg',
            github: "https://github.com/inderjitshahi/ISBlog",
            website: "https://is-blog.vercel.app/",
            points: [
                '"IsBlog" is a feature-rich blogging app built with Next.js and powered by Firebase, providing a seamless platform for users to publish and share their thoughts, stories, and expertise.',
                'Leveraging the capabilities of Next.js and Firebase, "IsBlog" offers real-time updates, secure user authentication, and database functionalities, enabling users to create, edit, and manage their blog posts effortlessly while ensuring a fast and reliable experience.'
            ]
        },
        {
            title: "ISDoc",
            subheading: "Doc Editing",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/isdoc.jpg',
            github: "https://github.com/inderjitshahi/ISDOc",
            website: "https://isdoc.vercel.app/",
            points: [
                'Experience streamlined document editing with our robust app powered by Next.js, Firebase, Material UI, and React Quill. Collaborate in real-time, format text effortlessly, and enhance productivity like never before.',
                "Enjoy a seamless editing experience with Next.js's server-side rendering, Firebase's real-time database, Material UI's sleek and intuitive design components, and React Quill's rich text editor capabilities. Create, edit, and collaborate on documents with ease while ensuring data integrity and a responsive user interface."
            ]
        },
        {
            title: "Dihadi",
            subheading: "A Next.js and Firebase Employment App",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '',
            github: "https://github.com/inderjitshahi/Dihadi",
            website: "",
            points: [
                'Revolutionize the job market for local and less-educated laborers with our Next.js-powered employment app. Built on a foundation of Firebase and NextAuth, it provides a user-friendly platform for job seekers and employers to connect and thrive.',
                'With a visually appealing and intuitive interface crafted using Tailwind CSS, our employment app enables laborers to browse and apply for suitable jobs effortlessly. NextAuth ensures secure and seamless authentication, while Firebase facilitates real-time communication between job seekers and employers, fostering meaningful employment opportunities for the less-educated workforce.'
            ]
        },
        {
            title: "Portfolio 2",
            subheading: "A Vanilla Javascript App",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/portfolio2.png',
            github: "https://github.com/inderjitshahi/Porfolio_Secondary",
            website: "https://inderjitshahi.netlify.app/",
            points: [
                'Showcase your skills and projects with a professionally designed portfolio website built entirely with the power of vanilla JavaScript, CSS, and HTML. Highlight your expertise and captivate visitors with a clean and elegant user interface.',
                'Crafted with a combination of JavaScript for interactivity, CSS for stylish and responsive layouts, and HTML for structuring content, your portfolio website delivers a seamless browsing experience, allowing potential clients and employers to explore your work and achievements effortlessly.'
            ]
        },
        {
            title: "Web Calculator",
            subheading: "A Vanilla Javascript App",
            begin: 'January, 2023',
            end: "May, 2023",
            image: '/project_images/calculator.png',
            github: "https://github.com/inderjitshahi/Scientific-Web-Calculator-and-More",
            website: "https://inder-cal.netlify.app/",
            points: [
                'Explore the power of scientific calculations with our web calculator built using vanilla JavaScript, CSS, and HTML. Perform complex mathematical operations, scientific functions, and calculations with ease.',
                'Enjoy a clean and intuitive user interface designed with CSS and HTML, while the functionality of the calculator is implemented using vanilla JavaScript. Experience precise calculations, advanced mathematical functions, and a user-friendly design tailored to meet your scientific computing needs.'
            ]
        },
    ];
    return {
        props: { projects }
    }
}
