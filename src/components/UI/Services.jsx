import React from 'react'
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiImg from '../../assets/images/design.png';
import appsImg from '../../assets/images/apps.png';

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-HeadingColor font-[800] text-[2.4rem] mb-5">Services I Offer</h2>
                    <p className="lg:max-2-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                        Transform your digital presence with expertly crafted websites, dynamic web applications, and stunning user interfaces. From front-end magic to back-end robustness, I deliver high-quality, scalable solutions tailored to your needs.
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                            {/* =========== vertical line running through the middle ============= */}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                            {/* =========== Left card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Frontend Development
                                                </h3>

                                                <p className="text-[15px] font-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                    Create visually appealing and highly interactive websites using modern technologies like React and Vue.js.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImg} alt="Frontend Development" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            {/* =========== Right card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Backend Development
                                                </h3>

                                                <p className="text-[15px] font-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                    Build robust and scalable server-side applications with Node.js, Express and PHP.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt="Backend Development" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            {/* =========== Left card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    UI/UX Design
                                                </h3>

                                                <p className="text-[15px] font-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                    Design intuitive and engaging user interfaces with a focus on user experience and aesthetic appeal.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={uiImg} alt="UI/UX Design" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                            {/* =========== Right card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-duration='1500' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                    Web Apps Development
                                                </h3>

                                                <p className="text-[15px] font-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                    Develop high-performance web applications tailored to your business needs, ensuring seamless functionality and user engagement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={appsImg} alt="Web Apps Development" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
