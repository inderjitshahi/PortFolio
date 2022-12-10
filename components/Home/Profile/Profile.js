import React from 'react';
import Classes from './Profile.module.css'
import { TypeAnimation } from 'react-type-animation'
import { scroller } from 'react-scroll';

function Profile(props) {
    return (
        <div className={Classes['profile-container']}>
            <div className={Classes['profile-parent']}>
                <div className={Classes['profile-details']}>
                    <div className={Classes['colz']}>
                        <div className={Classes['colz-icon']}>
                            <a href='https://www.linkedin.com/in/inderjit-shahi-b9880a201/' target='blank'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://www.instagram.com/inderjitshahi/?hl=en' target='blank'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://github.com/inderjitshahi' target='blank'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100011757080675' target='blank'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className={Classes['profile-details-name']}>
                        <span className={Classes['primary-text']}>
                            {" "}
                            Hello, IM <span className={Classes['highlighted-text']}>Inderjit Shahi</span>
                        </span>
                    </div>
                    <div className={Classes['profile-details-role']}>
                        {" "}
                        <h1>
                            {" "}
                            <TypeAnimation
                                sequence={[
                                    "Enthusiastic Developer🙋‍♂️",
                                    1000,
                                    "Full Stack MERN Developer💯",
                                    1000,
                                    "Cross Platform v🌐",
                                    1000,
                                    "React/React Native Dev📱",
                                    1000,
                                    "Competitive Programmer👨‍💻",
                                    1000,
                                ]}
                                // wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h1>
                        <span className={Classes['profile-role-tagline']}>
                            Building Applications with frontend and Backend.
                        </span>
                    </div>
                    <div className={Classes['profile-options']}>
                        <button className={`btn primary-btn ${Classes.btn}`} onClick={() => {
                            scroller.scrollTo('contactMe', {
                                duration: 800,
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
                <div className={Classes['profile-picture']}>
                    <div className={Classes['profile-picture-background']}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;