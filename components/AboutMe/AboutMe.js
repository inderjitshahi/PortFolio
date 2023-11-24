import React from 'react';
import ScreenHeading from '../ScreenHeading';
import Classes from './AboutMe.module.css';
import Image from 'next/image';
import { AboutMeDescription } from '../../data';
function AboutMe(props) {
    const SCREEN_CONSTANT = {
        description: AboutMeDescription,
        highlights: {
            bullets: [
                "MERN Stack Development",
                "API Integration and Advancement (REST APIs)",
                "Front-end Development",
                "Database Management",
                "UI/UX Design",
                "Version Control and Collaboration",
                "Problem Solving and Algorithm Design",
                "Technical Consultation and Project Guidance",
            ],
            heading: "Services Offered:"
        },
    };
    const renderHighlight = SCREEN_CONSTANT.highlights.bullets.map((ele, i) => {
        return <div className={Classes.highlight} key={i}>
            <div className={Classes['highlight-blob']}></div>
            <div>{ele}</div>
        </div>
    })
    return (

        <div id={'aboutMe'} className={`${Classes['about-me-container']} ${Classes['screen-container']} dark:text-white`}>
            <div className={`${Classes['about-me-parent']}`}>
                <ScreenHeading title={"About Me"} subHeading={'Why Choose Me?'} />
                <div className={Classes['about-me-card']} >
                    <div className="relative w-[100%] h-[20rem] md:h-auto md:w-[50%]">
                        <Image
                            src="/me.jpg"
                            objectFit='cover'
                            fill
                            alt="profile image"
                        />
                    </div>
                    <div className={Classes['about-me-details']}>
                    <p className={`${Classes['about-me-description']} leading-loose whitespace-pre-line font-rubik`}>
                            {SCREEN_CONSTANT.description}
                        </p>
                        <div className={Classes['about-me-highlights']} >
                            <div className={Classes['highlights-heading']}>
                                <span>{SCREEN_CONSTANT.highlights.heading}</span>
                            </div>
                            {renderHighlight}
                        </div>
                        {/* <div className='flex flex-col sm:flex-row' >
                            <a className='button sm:ml-2 text-center' href='https://drive.google.com/uc?id=10pnEXBJazd-MsOARzoWoqGBGwpRYztmd
' download="Inderjit_Shahi_Resume.pdf">
                                <button >Get Resume</button>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;