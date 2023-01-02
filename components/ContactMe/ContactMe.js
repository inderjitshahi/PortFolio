import React, { useState } from 'react';
import imgBack from '../images/mailz.jpeg';
import load1 from '../images/load2.gif';
import ScreenHeading from '../ScreenHeading';
import Classes from './ContactMe.module.css';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'

function ContactMe(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const formHandler = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            }
            setBool(true);
            const res = await axios.post(`/api/hello`, data);
            // console.log(res);
            if (name.length === 0 || (email.length === 0 || !email.includes('@')) || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner("Message Sent!!");
                toast.success(res.data.msg);
                setBool(false);
                setName("");
                setEmail("");
                setMessage("");
                setTimeout(() => {
                    setBanner("");
                }, 6000);
            }

        } catch (err) {
            console.log(err);
            setBanner(err.message);
            toast.error(err.message);
            setBool(false);
        }

    }

    return (
        <div id={"contactMe"} className={Classes['main-container']}>
            <ScreenHeading
                subHeading={"Lets Keep in Touch"}
                title={"Contact Me"}
            />
            <div className='flex flex-col  sm:mx-2 md:mx-10 bg-violet-600 rounded-xl p-5'>
                <div>
                    <h2 className='mb-5 text-3xl'>
                        <TypeAnimation
                            sequence={[
                                "Let's broaden our relation",
                                1000,
                                "Get In Touch,and ⌨️",
                                1000,
                            ]}
                            // wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex space-x-4 md:ml-32 md:scale-125'>
                        <a href='https://www.linkedin.com/in/inderjit-shahi-b9880a201/' target='blank'>
                            <BsLinkedin />
                        </a>
                        <a href='https://www.instagram.com/inderjitshahi/?hl=en' target='blank'>
                            <AiFillInstagram />
                        </a>
                        <a href='https://github.com/inderjitshahi' target='blank'>
                            <AiFillGithub />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100011757080675' target='blank'>
                            <BsFacebook />
                        </a>
                    </div>
                </div>
                <div className={Classes['back-form']}>
                    <div className={Classes['img-back']} >
                        <h4>Send your Email Here!</h4>
                        <Image src={imgBack} alt="not found" />
                    </div>
                    <form onSubmit={formHandler} className={Classes['form']}>
                        <p className={Classes['form-p']}>{banner}</p>
                        <label htmlFor='name' className='text-white'>Name</label>
                        <input className={Classes['form-input']} type={"text"} value={name} onChange={handleName} />

                        <label htmlFor='email' className='text-white'>Email</label>
                        <input className={Classes['form-input']} type={"email"} value={email} onChange={handleEmail} />

                        <label htmlFor='message' className='text-white'>Message</label>
                        <textarea className={Classes['textarea']} type={"text"} value={message} onChange={handleMessage} />

                        <div className="flex">
                            <button className='button bg-white hover:bg-white'>
                                Send<i className='fa fa-paper-plane' />
                                {bool ? (<b className={Classes['load']}>
                                    <Image src={load1} alt="no internet" />
                                </b>) : ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;