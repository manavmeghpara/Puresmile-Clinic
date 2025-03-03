"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from "react";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section ref={ref} className="bg-white flex justify-center items-center py-4 mt-16">
            <motion.div
                id=""
                className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-sky-100 mx-4 rounded-[50px] shadow-lg max-w-7xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Left Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                        Your Smile, Our Priority
                    </h1>

                    <p className="mt-4 text-gray-700 text-lg">
                        Get expert dental care with cutting-edge technology and a gentle touch.
                        Book an appointment today!
                    </p>

                    {/* Call to Action */}
                    <motion.div
                        className="mt-6 flex flex-col md:flex-row items-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-sky-500 transition">
                            Book Now
                        </button>

                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                                <FaPhoneAlt className="text-sky-700 text-lg" />
                            </div>
                            <div>
                                <p className="text-sky-700 font-semibold text-sm">24/7 Emergency</p>
                                <p className="text-gray-900 font-bold text-lg">03 482 394 123</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/pics/clinic2.avif"
                        alt="Smiling Patient"
                        width={480}
                        height={480}
                        className="rounded-3xl shadow-md"
                    />

                    {/* Floating Doctor Info */}
                    <motion.div
                        className="absolute bottom-5 left-5 bg-white rounded-lg shadow-md flex items-center p-3 gap-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Image src="/pics/profile1.1.jpg" alt="Doctor" width={50} height={50} className="rounded-xl" />
                        <div>
                            <p className="font-semibold text-gray-900">Dr. Samantha Alibee</p>
                            <p className="text-gray-500 text-sm">Dental Consultant</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
