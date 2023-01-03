import React from 'react';
import ScreenHeading from './ScreenHeading';
import { BsGithub, BsGlobe } from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import Link from 'next/link';
function Project({ projectDetails }) {
    // console.log(projectDetails);
    return (
        <div className='mt-32 flex flex-col md:px-16 '>
            <ScreenHeading title="Projects" subHeading={'My Works!!'} className="mb-0" />
            <div id="carouselExampleCaptions" className="carousel slide relative mt-0 md:rounded-xl overflow-hidden md:border-2" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 text-yellow-500">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active bg-yellow-500"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* {projectDetails.map(project => (
                       
                    ))} */}
                    <div className="carousel-item active relative float-left w-full">

                        <img
                            src={projectDetails[0].image}
                            className="block w-full h-[60vh] md:h-auto brightness-50 object-cover"
                            alt="..."
                        />
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[0].title}</p>

                            <h5 className='space-x-5 flex justify-center px-5 rounded-lg mb-2'>
                                <Link href={projectDetails[0].gitUrl} target="_blank"><VscGithub className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                                <Link href={projectDetails[0].webUrl} target="_blank"><BsGlobe className='text-2xl md:text-4xl  text-yellow-500 font-bold contrast-200' /></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={projectDetails[1].image}
                            className="block w-full h-[60vh] md:h-auto brightness-50 object-cover"
                            alt="..."
                        />
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[1].title}</p>

                            <h5 className='space-x-5 flex justify-center px-5 rounded-lg mb-2 drop-shadow-2xl'>
                                <Link href={projectDetails[1].gitUrl} target="_blank"><VscGithub className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                                <Link href={projectDetails[1].webUrl} target="_blank"><BsGlobe className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={projectDetails[2].image}
                            className="block w-full h-[60vh] md:h-auto brightness-50 object-cover"
                            alt="..."
                        />
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[2].title}</p>

                            <h5 className='space-x-5 flex justify-center px-5 rounded-lg mb-2 drop-shadow-2xl'>
                                <Link href={projectDetails[2].gitUrl} target="_blank"><VscGithub className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                                <Link href={projectDetails[2].webUrl} target="_blank"><BsGlobe className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={projectDetails[3].image}
                            className="block w-full h-[60vh] md:h-auto brightness-50 object-cover"
                            alt="..."
                        />
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[3].title}</p>

                            <h5 className='space-x-5 flex justify-center px-5 rounded-lg mb-2 drop-shadow-2xl'>
                                <Link href={projectDetails[3].gitUrl} target="_blank"><VscGithub className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                                <Link href={projectDetails[3].webUrl} target="_blank"><BsGlobe className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full ">
                        <img
                            src={projectDetails[4].image}
                            className="block w-full h-[60vh] md:h-auto brightness-50 object-cover"
                            alt="..."
                        />
                        <div className="carousel-caption rounded-lg pb-2 flex flex-col justify-center absolute text-center text-black font-bold">
                            <p className=' text-yellow-500 font-bold text-2xl sm:text-4xl md:text-6xl contrast-200'>{projectDetails[3].title}</p>

                            <h5 className='space-x-5 flex justify-center px-5 rounded-lg mb-2 drop-shadow-2xl'>
                                <Link href={projectDetails[4].gitUrl} target="_blank"><VscGithub className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                                <Link href={projectDetails[4].webUrl} target="_blank"><BsGlobe className='text-2xl md:text-4xl text-yellow-500 font-bold contrast-200' /></Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat  contrast-200" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat contrast-200" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Project;

