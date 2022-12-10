import React from 'react';
import ScreenHeading from '../Utilities/ScreenHeading/ScreenHeading';
import Classes from './AboutMe.module.css';
import {scroller} from 'react-scroll';
function AboutMe(props) {
    const SCREEN_CONSTANT = {
        description: "Full stack web and mobile developer with background knowledge of MERN stack with redux, along with a knock of building application with utmost efficiency, strong professional with a B.Tech willing to be an asset far an organization. ",
        highlights: {
            bullets: [
                "Full Stack web and mobile Development",
                "Proficient in Data Structure and Algorithms",
                "Problem Solving",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux for State Management",
                "Building REST API, Managing database",
            ],
            heading: "Here are few highlights:"
        },
    };
    const renderHighlight = SCREEN_CONSTANT.highlights.bullets.map((ele, i) => {
        return <div className={Classes.highlight} key={i}>
            <div className={Classes['highlight-blob']}></div>
            <div>{ele}</div>
        </div>
    })
    return (

        <div id={'aboutMe'} className={`${Classes['about-me-container']} ${Classes['screen-container']}`}>
            <div className={Classes['about-me-parent']}>
                <ScreenHeading title={"About Me"} subHeading={'Why Choose Me?'} />
                <div className={Classes['about-me-card']} >
                    <div className={Classes['about-me-profile']}></div>
                    <div className={Classes['about-me-details']}>
                        <span className={Classes['about-me-description']}>{SCREEN_CONSTANT.description}
                        </span>
                        <div className={Classes['about-me-highlights']} >
                            <div className={Classes['highlights-heading']}>
                                <span>{SCREEN_CONSTANT.highlights.heading}</span>
                            </div>
                            {renderHighlight}
                        </div>
                        <div className={Classes['about-me-options']} >
                            <button className={`btn primary-btn ${Classes.btn}`} onClick={() => {
                            scroller.scrollTo('contactMe', {
                                duration: 600,
                                delay: 0,
                                smooth: 'easeInOutQuart'
                            })
                        }}>
                                {" "}
                                Hire Me{" "}
                            </button>
                            <a href='Resume-Inderjit-Shahi.pdf' download="Inderjit_Shahi_Resume.pdf">
                                <button className={`btn highlighted-btn ${Classes['highlighted-btn']}`}>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;