import React, { useState } from 'react';
import Classes from './Resume.module.css';
import ScreenHeading from '../Utilities/ScreenHeading/ScreenHeading';

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOfSetStyle] = useState({});


    const ResumeHeading = (props) => <div className={Classes['resume-heading']}>
        <div className={Classes['resume-main-heading']}>
            <div className={Classes['heading-bullet']}></div>
            <span>{
                props.heading ?
                    (props.url ? <a href={props.url} target="blank">{props.heading}</a> :props.heading) :
                    ''}</span>
            {props.fromDate && props.toDate ?
                <div className={Classes['heading-date']}>{props.fromDate + "-" + props.toDate}</div>
                : <div></div>
            }
        </div>
        <div className={Classes['resume-sub-heading']}>
            <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className={Classes['resume-heading-description']}>
            <span>{props.description ? props.description : ""}</span>
        </div>
    </div>

    const resumeBullets = [
        { label: "Education", logo: "education.svg", },
        // { label: "Work History", logo: "work-history.svg", },
        { label: "Programming Skills", logo: "programming-skills.svg", },
        { label: "Projects", logo: "projects.svg", },
        { label: "Interests", logo: "interests.svg", },
    ];

    const programmingSkillsDetails = [
        { skill: "C++", ratingPercentage: 90 },
        { skill: "Data Structure and Algorithm", ratingPercentage: 90 },
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React Js", ratingPercentage: 80 },
        { skill: "React Native", ratingPercentage: 50 },
        { skill: "Express JS", ratingPercentage: 85 },
        { skill: "Node JS", ratingPercentage: 85 },
        { skill: "SQL", ratingPercentage: 90 },
        { skill: "MongoDB", ratingPercentage: 70 },
        { skill: "Material UI", ratingPercentage: 90 },
        { skill: "NextJS", ratingPercentage: 70 },
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: 2022, toDate: 2022 },
            description: "A Personal Portfolio website to showcase all my details and projects at one place",
            subHeading: "Technology Used: React JS | Redux | Material UI | React-Scroll | React-reveal | ExpressJS | SendGrid",
            url:"https://inderjitshahi.herokuapp.com/"
        },
        {
            title: "ISSHOP",
            duration: { fromDate: 2020, toDate: 2021 },
            description: "An E-commerce website that allows buying/Selling products to strengthen small vendors to enhance their business",
            subHeading: "Technology Used: MongoDB | Express.js | Stripe | SendGrid | PDFKit | Bcrypt",
            url:"https://isshop.herokuapp.com/"
        },
        {
            title: "ISMovies",
            duration: { fromDate: 2022, toDate: 2023 },
            description: " A MERN stack Movie Review Application that allows you to Rate, Upload, and Review movies of different Genres, Actors/Actresses, and many more features",
            subHeading: "Technology Used: : React.js | Redux | Node.js| MongoDB | Express.js | SendGrid | Mongoose | Bcrypt | Material UI",
            url:""
        },
    ];

    const resumeDetails = [
        <div className={`${Classes['resume-screen-container']} ${Classes['education-container']}`} key="education">
            <ResumeHeading
                heading={"Delhi Technological University, Delhi"}
                subHeading={"Bachelor of Technology, Mathematics and Computing"}
                fromDate={"2020"}
                toDate={"2024"}
                url={"http://www.dtu.ac.in/"}
            />
            <ResumeHeading
                heading={"Salwan Boys Senior Secondary School, Delhi"}
                subHeading={"Senior Secondary School Examination, CBSE"}
                fromDate={"2017"}
                toDate={"2019"}
                url={"https://salwanboysschool.in/"}
            />
            <ResumeHeading
                heading={"Bapu Adarsh Vidyalaya, Delhi"}
                subHeading={"Secondary School Examination, CBSE"}
                fromDate={"2015"}
                toDate={"2017"}
            />
        </div>,
        // <div className={`${Classes['resume-screen-container']} ${Classes['work-experience-container']}`} key="work-experience">
        //     <ResumeHeading
        //         heading={"Delhi Technological University, Delhi"}
        //         subHeading={"Bachelor of Technology, Mathematics and Computing"}
        //         fromDate={"2020"}
        //         toDate={"2024"}
        //     />
        // </div>,
        <div className={`${Classes['resume-screen-container']} ${Classes['programming-skills-container']}`} key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (<div className={Classes['skill-parent']} key={index}>
                <div className={Classes['heading-bullet']}></div>
                <span>{skill.skill}</span>
                <div className={Classes['skill-percentage']}>
                    <div style={{ width: skill.ratingPercentage + "%" }} className={Classes['active-percentage-bar']}>
                    </div>
                </div>
            </div>))
            }
        </div>,

        <div className={`${Classes['resume-screen-container']}`} key="projects">
            {projectDetails.map((projectDetail, index) => <ResumeHeading
                key={index}
                heading={projectDetail.title}
                subHeading={projectDetail.subHeading}
                description={projectDetail.description}
                fromDate={projectDetail.duration.fromDate}
                toDate={projectDetail.duration.toDate}
                url={projectDetail.url}
            />
            )}
        </div>,

        <div className={`${Classes['resume-screen-container']}`} key="interests">
            <ResumeHeading
                heading="Teaching"
                description="Teaching since the age of 14, have passion to bring change in  world via quality education"
            />
            <ResumeHeading
                heading="Investment"
                description="Interested in different investment vehicles and their analysis "
            />
            <ResumeHeading
                heading="Cooking"
                description="As a foodie, Trying new recipes is the best free time hobby for me"
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOfSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {

        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? `${Classes['bullet']} ${Classes['selected-bullet']}` : Classes['bullet']}
                key={index}
            >
                <img className={Classes['bullet-logo']}
                    src={require(`../assets/Resume/${bullet.logo}`)}
                    alt={"Can't load Right now"}
                />
                <span className={Classes['bullet-label']}>{bullet.label}</span>
            </div>))
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className={Classes['resume-details-carousal']}
            >
                {resumeDetails.map(resumeDetail => resumeDetail)}
            </div>
        )
    }
    return (
        <div id="resume" className={Classes['resume-container']}>
            <div className={Classes['resume-content']}>
                <ScreenHeading title="Resume" subHeading={'Know more about me!!'} />
                <div className={Classes['resume-card']}>
                    <div className={Classes['resume-bullets']}>
                        <div className={Classes['bullet-container']}>
                            <div className={Classes['bullet-icons']}></div>
                            <div className={Classes['bullets']}>{getBullets()}</div>
                        </div>
                    </div>
                    <div className={Classes['resume-bullets-details']}>{getResumeScreen()}</div>
                </div>
            </div>

        </div>
    );
};

export default Resume;