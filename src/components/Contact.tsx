"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Appointment = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section ref={ref} id="contact"
                className="pt-16 pb-6 px-6 md:px-16 bg-white text-sky-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                    {/* Left Side - Map */}
                    <motion.div
                        className="relative w-full h-96 md:col-span-2 bg-gray-200 rounded overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.259238621566!2d99.016675!3d18.802811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bb7cfd9b8ef%3A0x1234567890abcdef!2sChiang%20Mai%20Dental%20Clinic!5e0!3m2!1sen!2sth!4v1701234567890!5m2!1sen!2sth"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        {/* Address Box */}
                        <div className="absolute bottom-6 left-6 bg-white p-3 rounded-lg shadow-md flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-700 text-white flex items-center justify-center rounded-lg">
                                <FaMapMarkerAlt className="text-lg" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900">
                                Demo PureSmile
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        className="p-8 bg-sky-50 rounded-3xl shadow-lg md:col-span-3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-sky-700 font-bold uppercase text-sm">Book Appointment</h3>
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
                                    <FaPhoneAlt className="text-sky-700 text-lg" />
                                </div>
                                <div>
                                    <p className="text-sky-700 font-semibold text-sm">24/7 Emergency</p>
                                    <p className="text-gray-900 font-bold text-lg">03 482 394 123</p>
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
