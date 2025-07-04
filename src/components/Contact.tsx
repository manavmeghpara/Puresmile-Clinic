"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Appointment = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showRajkotMap, setShowRajkotMap] = useState(true);
    const [showChotilaMap, setShowChotilaMap] = useState(false);


    return (
        <>
            <section ref={ref} id="contact"
                className="pt-16 pb-6 px-6 md:px-16 bg-white text-sky-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                    {/* Left Side - Map */}
                    <motion.div
                        className="p-8 bg-sky-50 rounded-3xl shadow-lg md:col-span-2 h-full flex flex-col gap-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Rajkot Button */}
                        <button
                            onClick={() => {
                                setShowRajkotMap(!showRajkotMap);
                                setShowChotilaMap(false);
                            }}
                            className="bg-sky-700 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-500 transition w-full"
                        >
                            Rajkot Branch
                        </button>

                        {/* Rajkot Map */}
                        {showRajkotMap && (
                            <div className="w-full h-60 sm:h-80 relative">
                                <iframe
                                    className="w-full h-full rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.359310872827!2d70.7596458!3d22.2942768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb19d39d77c7%3A0xbedb6623ee799ac8!2sSmitam%20Multi%20Speciality%20Dental%20Studio!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        )}

                        {/* Chotila Button */}
                        <button
                            onClick={() => {
                                setShowChotilaMap(!showChotilaMap);
                                setShowRajkotMap(false);
                            }}
                            className="bg-sky-700 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-500 transition w-full"
                        >
                            Chotila Branch
                        </button>

                        {/* Chotila Map */}
                        {showChotilaMap && (
                            <div className="w-full h-60 sm:h-80 relative">
                                <iframe
                                    className="w-full h-full rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.576437453659!2d71.1933101!3d22.4187663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395907e6b6ea920f%3A0x8618a69001fb7930!2sMaa%20dental%20%26%20poly%20clinic!5e0!3m2!1sen!2sin!4v1720012345678!5m2!1sen!2sin"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        )}
                    </motion.div>


                    {/* Right Side - Form */}
                    <motion.div
                        className="p-8 bg-sky-50 rounded-3xl shadow-lg md:col-span-3 h-full flex flex-col justify-between"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-sky-700 font-bold uppercase text-xl">Book Appointment</h3>
                        <p className="text-gray-900 mt-2">
                            Get professional dental services with the best experience.
                        </p>

                        {/* Form */}
                        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                            <input type="text" placeholder="Your Name" className="input-style" />
                            <input type="email" placeholder="Your Email" className="input-style" />
                            {/* Select Service */}
                            <select className="input-style text-gray-900" defaultValue="">
                                <option value="" disabled className="text-gray-500">
                                    Select Service
                                </option>
                                <option>Teeth Cleaning</option>
                                <option>Dental Implants</option>
                                <option>Root Canal</option>
                            </select>

                            {/* Select Department */}
                            <select className="input-style text-gray-900" defaultValue="">
                                <option value="" disabled className="text-gray-500">
                                    Select Department
                                </option>
                                <option>General Dentistry</option>
                                <option>Orthodontics</option>
                                <option>Cosmetic Dentistry</option>
                            </select>
                            <textarea placeholder="Enter your message..." className="input-style col-span-1 sm:col-span-2 h-32"></textarea>
                        </form>

                        {/* Contact & Booking Section */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                                    <a href="tel:+917859836056">
                                        <FaPhoneAlt className="text-sky-700 text-lg cursor-pointer hover:text-sky-500 transition" />
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sky-700 font-semibold text-sm">24/7 Emergency</p>
                                    <p className="text-gray-900 font-bold text-lg">+91 7859836056</p>
                                </div>
                            </div>

                            <button
                                className="bg-sky-700 text-white px-4 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-sky-500 transition mt-4 sm:mt-0"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Book an appointment
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MODAL */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Modal Content */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-[420px] relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-5 text-gray-800 hover:text-gray-500 text-xl font-extrabold"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✕
                        </button>

                        <div className="flex flex-col justify-center items-center">
                            {/* Title */}
                            <motion.h2
                                className="text-3xl sm:text-4xl text-sky-800 font-bold mb-4"
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Get in <span className="text-sky-400">touch</span>
                            </motion.h2>

                            {/* Contact Box */}
                            <motion.div
                                className="bg-gray-900 w-fit px-12 rounded-xl p-5 shadow-lg"
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* Github */}
                                <div className="mb-6">
                                    <p className="text-gray-400">Github</p>
                                    <a href="https://github.com/Sahasawat-Boss" target="_blank"
                                        className="text-lg font-bold text-white flex items-center gap-1 hover:text-sky-500">
                                        https://github.com/Sahasawat-Boss <FiExternalLink />
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="mb-6">
                                    <p className="text-gray-400">Phone</p>
                                    <p className="text-lg font-bold text-white">086-868-4466</p>
                                </div>

                                {/* Email */}
                                <div className="mb-2">
                                    <p className="text-gray-400">Email</p>
                                    <p className="text-lg font-bold text-white">sahasawat.rk@gmail.com</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Appointment;
