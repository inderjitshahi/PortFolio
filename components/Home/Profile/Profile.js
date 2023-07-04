import React from 'react';
import Classes from './Profile.module.css'
import { TypeAnimation } from 'react-type-animation'
import { BsFacebook, BsLinkedin} from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub, AiFillMail  } from 'react-icons/ai'
import Link from 'next/link';

function Profile(props) {
    return (
        <div className={Classes['profile-container']}>
            <div className='flex flex-col md:flex-row  justify-content:center'>
                <div className={Classes['profile-details']}>
                    <div className={Classes['colz']}>
                        <div className="flex space-x-4 cursor-pointer scale-150 mb-4">
                            <a href='https://www.linkedin.com/in/inderjit-shahi-b9880a201/' target='blank' className='hover:scale-125'>
                                <BsLinkedin  className='hover:text-white hover:scale-125'/>
                            </a>
                            <a href='https://www.instagram.com/inderjitshahi/?hl=en' target='blank' className='hover:scale-125'>
                                <AiFillInstagram className='hover:text-white hover:scale-125' />
                            </a>
                            <a href='https://github.com/inderjitshahi' target='blank' className='hover:scale-125'>
                                <AiFillGithub className='hover:text-white hover:scale-125'/>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100011757080675' target='blank' className='hover:scale-125'>
                                <BsFacebook className='hover:text-white hover:scale-125'/>
                            </a>
                            <a href = "mailto:inderjeetkmcs@gmail.com" target='blank' className='hover:scale-125'>
                                <AiFillMail className='hover:text-white hover:scale-125'/>
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
                        <h1 className='overflow-hidden'>
                            {" "}
                            <TypeAnimation
                                sequence={[
                                    "MERN Developer",
                                    1000,
                                    "Competitive Programmer",
                                    1000,
                                    "Freelancer",
                                    1000,
                                ]}
                                // wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h1>
                        <span className={Classes['profile-role-tagline']}>
                        Code, Design, Inspire
                        </span>
                    </div>
                    {/* <div className='flex justify-center'>
                        <a className='flex-frow' href='https://drive.google.com/uc?id=10pnEXBJazd-MsOARzoWoqGBGwpRYztmd' download="Inderjit_Shahi_Resume.pdf">
                            <button className='button ml-2'>Get Resume</button>
                        </a>
                    </div> */}
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