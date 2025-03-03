"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.25 });

    return (
        <section id="Contact" ref={ref} className="bg-white text-sky-700 py-20 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold uppercase text-sky-700 mb-10"
                    initial={{ opacity: 0, y: -40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Book an Appointment
                </motion.h2>

                {/* Contact Box */}
                <motion.div
                    className="bg-sky-100 p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* GitHub Link */}
                    <div className="mb-6 text-center">
                        <p className="text-sky-600">GitHub</p>
                        <a href="https://github.com/Sahasawat-Boss" target="_blank" className="text-lg font-bold text-sky-800 flex justify-center items-center gap-1 hover:text-sky-600 transition">
                            github.com/Sahasawat-Boss <FiExternalLink />
                        </a>
                    </div>

                    {/* Email */}
                    <div className="mb-8 text-center">
                        <p className="text-sky-600">Email</p>
                        <p className="text-lg font-bold text-sky-800">sahasawat.rk@gmail.com</p>
                    </div>

                    {/* Contact & Booking Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {/* Emergency Contact */}
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center bg-sky-700 text-white rounded-xl shadow-md border border-sky-200">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sky-700 font-semibold text-sm uppercase">DENTAL 24H EMERGENCY</p>
                                <p className="text-gray-900 font-bold text-lg">086-868-4466</p>
                            </div>
                        </div>

                        {/* Appointment Button */}
                        <button className="bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-sky-800 transition">
                            Book an appointment
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
