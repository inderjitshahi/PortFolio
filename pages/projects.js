import { Zoom } from 'react-awesome-reveal';
import Head from 'next/head';
import Header from '../components/Home/Header/Header';
import ScreenHeading from '../components/ScreenHeading';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
function experience({projects}) {
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
                    <Header/>
                </div>
                <div>
                    {projects.map((project,i)=>{
                        return      <div key={i} >
                        <ScreenHeading
                            subHeading={project.subheading}
                            title={project.title}
                        />
                        <div className='border-0 flex flex-col md:flex-row py-5 px-12 text-white] items-center md:justify-between min-h-[90vh] bg-gradient-to-r from-[#692CF3] to-[#8B5CF6]'>
                            <div className='flex flex-col items-center justify-center h-full'>
                                <div >
                                    <p className='text-white text-center text-[#5cf68b] text-md md:text-xl'>
                                        {project.begin} - {project.end}
                                    </p>
                                    <ul className='space-y-5 mt-5 list-disc'>
                                        {project.points.map((point,i)=>{
                                            return <li key={i} className='text-white'>
                                                {point}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='w-[50vw] h-[50vh] relative mt-10 md:mt-0'>
                                <Image src={project?.certificate?project?.certificate:'/not_found.svg'}
                                    loading="lazy"
                                    alt='Experience'
                                    fill
                                ></Image>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
                <Footer/>
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
            location: "Remote",
            begin: 'January, 2023',
            end:"May, 2023",
            image:'',
            github:"",
            website:"",
            points:[
                "Led cross-functional team to develop Jansuvai complaint tracking system, benefiting 2 million citizens.",
                "Demonstrated leadership and effective communication by coordinating design and client teams, ensuring seamless integration and timely delivery.",
                "Resolved 1000+ complaints, streamlining management and reducing response times by 30%."
            ]
        },
    ];
    return {
        props: {projects}
    }
}
