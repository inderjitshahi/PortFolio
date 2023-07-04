import { Zoom } from 'react-awesome-reveal';
import Head from 'next/head';
import Header from '../components/Home/Header/Header';
import ScreenHeading from '../components/ScreenHeading';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
function experience({exps}) {
    // console.log(exps);
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
                    {exps.map((exp,i)=>{
                        return      <div key={i} >
                        <ScreenHeading
                            subHeading={exp.company}
                            title={exp.title}
                        />
                        <div className='border-0 flex flex-col md:flex-row py-5 px-12 text-white] items-center md:justify-between min-h-[90vh] bg-gradient-to-r from-[#692CF3] to-[#8B5CF6]'>
                            <div className='flex flex-col items-center justify-center h-full'>
                                <div >
                                    <p className='text-white text-center text-[#5cf68b] text-md md:text-xl'>
                                        {exp.location}
                                    </p>
                                    <p className='text-white text-center text-[#5cf68b] text-md md:text-xl'>
                                        {exp.begin} - {exp.end}
                                    </p>
                                    <ul className='space-y-5 mt-5 list-disc'>
                                        {exp.points.map((point,i)=>{
                                            return <li key={i} className='text-white'>
                                                {point}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='w-[50vw] h-[50vh] relative mt-10 md:mt-0'>
                                <Image src={exp?.certificate?exp?.certificate:'/not_found.svg'}
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
    const exps = [
        {
            title: "Software Development Engineer Intern",
            company: "Katihar Police",
            location: "Remote",
            begin: 'January, 2023',
            end:"May, 2023",
            certificate:'',
            points:[
                "Led cross-functional team to develop Jansuvai complaint tracking system, benefiting 2 million citizens.",
                "Demonstrated leadership and effective communication by coordinating design and client teams, ensuring seamless integration and timely delivery.",
                "Resolved 1000+ complaints, streamlining management and reducing response times by 30%."
            ]
        },
        {
            title: "Research Intern",
            company: "Delhi Technological University",
            location: "Delhi, India",
            begin: 'June, 2023',
            end:"July, 2023",
            certificate:'',
            points:[
                "Implemented Python machine learning with NumPy for K-means clustering, achieving 92% accuracy.",
                "Enhanced FCM clustering with FCM Special, achieving 15% lower error than traditional FCM on benchmarks.",
                "Excelled an IoU score of 0.85 using the enhanced Fuzzy C-Means Special algorithm for image segmentation on 100 images, accurately identifying and segmenting distinct regions."
            ]
        },
        {
            title: "MERN Stack Intern",
            company: "Wereon",
            location: "Remote",
            begin: 'July, 2023',
            end:"August, 2023",
            certificate:'',
            points:[
                "Implemented MERN-based user authentication, reducing login errors by 30% and enhancing user experience",
                "Boosted web app performance through server-side caching, cutting load time by 40% and enhancing responsiveness",
            ]
        },
    ];
    return {
        props: {exps}
    }
}
