"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Appointment = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <section ref={ref} className="py-16 px-6 md:px-16 bg-white text-sky-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Map */}
                <motion.div
                    className="relative w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531685!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee40!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1638285764980!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                    {/* Address Box */}
                    <div className="absolute bottom-6 left-6 bg-white p-3 rounded-lg shadow-md flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-700 text-white flex items-center justify-center rounded-lg">
                            <FaMapMarkerAlt className="text-lg" />
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                            35 West Dental Street, California 1004
                        </p>
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    className="p-8 bg-sky-50 rounded-3xl shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-sky-700 font-bold uppercase text-sm">Book Appointment</h3>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                        Care at PureSmile is a pleasure
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                        Get professional dental services with the best experience.
                    </p>

                    {/* Form */}
                    <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="input-style" />
                        <input type="email" placeholder="Your Email" className="input-style" />
                        <select className="input-style">
                            <option>Select Service</option>
                            <option>Teeth Cleaning</option>
                            <option>Dental Implants</option>
                            <option>Root Canal</option>
                        </select>
                        <select className="input-style">
                            <option>Select Department</option>
                            <option>General Dentistry</option>
                            <option>Orthodontics</option>
                            <option>Cosmetic Dentistry</option>
                        </select>
                        <textarea placeholder="Enter your message..." className="input-style col-span-1 sm:col-span-2 h-32"></textarea>
                    </form>

                    {/* Contact & Booking Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-sky-700 text-white flex items-center justify-center rounded-lg shadow-md">
                                <FaPhoneAlt className="text-lg" />
                            </div>
                            <div className="text-sm">
                                <p className="text-sky-700 font-semibold uppercase">DENTAL 24H EMERGENCY</p>
                                <p className="text-gray-900 font-bold text-lg">03 482 394 123</p>
                            </div>
                        </div>

                        <button className="bg-sky-700 text-white px-6 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-sky-800 transition mt-4 sm:mt-0">
                            Book an appointment
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Appointment;
