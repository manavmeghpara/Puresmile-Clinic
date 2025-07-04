"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaRegSmileBeam, FaTooth, FaHeart } from "react-icons/fa";
import { useRef, useState } from "react";

interface Doctor {
    name: string;
    title: string;
    description: string;
    image: string;
}

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    // ✅ Scroll to Contact Section
    const handleScrollToContact = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="hero" ref={ref}
            className="bg-white flex justify-center items-center py-4 pt-16">
            <motion.div
                className="relative flex flex-col gap-x-3 md:flex-row items-center justify-between p-8 md:p-12 bg-sky-100 mx-4 rounded-[40px] shadow-lg max-w-7xl w-full"
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
                        className="mt-6 flex flex-col md:flex-row items-center gap-x-4 gap-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button
                            className="bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-sky-500 transition"
                            onClick={handleScrollToContact} > {/* Calls the scroll function  */}
                            Book Now
                        </button>

                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                                <a href="tel:+917859836056">
                                    <FaPhoneAlt className="text-sky-700 text-lg cursor-pointer hover:text-sky-500 transition" />
                                </a>
                            </div>
                            <div>
                                <p className="text-sky-700 font-semibold text-sm">24/7 Emergency</p>
                                <p className="text-gray-900 font-bold text-lg">+91 7859836056</p>
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
                        src="/pics/clinic-ai.webp"
                        alt="Smiling Patient"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md"
                    />

                    {/* Floating Doctor Info - Click to Open Modal */}
                    <div>
                        <motion.div
                            onClick={() => setSelectedDoctor({
                                name: "Dr. Mili Meghpara",
                                title: "👶 Paediatric (kids) dentist | 💉 Sedation Specialist",
                                description: "🏅 DOUBLE GOLD MEDALIST (B.D.S., M.D.S.)🔹 Super Specialist in Children’s Dental care & Root Canal Treatments",
                                image: "/pics/Mili.png"
                            })}
                            className="absolute bottom-5 left-5 bg-white rounded-lg shadow-md flex items-center py-1.5 px-3 gap-3 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Image src="/pics/Mili.png" alt="Doctor" width={50} height={50} className="rounded-xl" />
                            <div>
                                <p className="font-semibold text-gray-900">Dr. Mili Meghpara</p>
                                <p className="text-gray-500 text-sm">Paediatric Specialist</p>
                            </div>
                        </motion.div>

                        <motion.div
                            onClick={() => setSelectedDoctor({
                                name: "Dr. Shubham Godhani",
                                title: "(B.D.S., M.D.S.) Prosthodontist",
                                description: "Master in Cortico Basal Implant – Munich, Germany | Super Specialist in Basal Implants 🦷",
                                image: "/pics/Shubham.png"
                            })}
                            className="absolute bottom-5 right-5 bg-white rounded-lg shadow-md flex items-center py-1.5 px-3 gap-3 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Image src="/pics/Shubham.png" alt="Doctor" width={50} height={50} className="rounded-xl" />
                            <div>
                                <p className="font-semibold text-gray-900">Dr. Shubham Godhani</p>
                                <p className="text-gray-500 text-sm">Prosthodontist</p>
                            </div>
                        </motion.div>

                        {/* Floating Icons */}
                        <motion.div
                            className="absolute top-5 left-5 text-yellow-500 text-base p-1.5 bg-white rounded-full drop-shadow-lg"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaRegSmileBeam />
                        </motion.div>

                        <motion.div
                            className="absolute top-10 right-10 text-sky-500 text-base p-1.5 bg-white rounded-full drop-shadow-lg"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaTooth/>
                        </motion.div>

                        <motion.div
                            className="absolute top-32 left-16 text-red-600 text-base p-1.5 bg-white rounded-full drop-shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaHeart  />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* MODAL */}
            {selectedDoctor && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedDoctor(null)}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-[420px] relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedDoctor(null)}
                        >
                            ✕
                        </button>

                        <div className="flex justify-center">
                            <Image src={selectedDoctor.image} alt={selectedDoctor.name} width={200} height={200} className="rounded-xl shadow-md" />
                        </div>

                        <h4 className="text-black font-bold text-lg md:text-xl text-center mt-2">{selectedDoctor.name}</h4>
                        <p className="text-gray-500 text-center text-sm">{selectedDoctor.title}</p>
                        <p className="text-gray-700 text-sm md:text-base text-center mt-2.5">
                            {selectedDoctor.description}
                        </p>

                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-sky-700 text-white px-4 py-2 rounded text-sm font-semibold shadow-md hover:bg-sky-500 transition"
                                onClick={() => setSelectedDoctor(null)}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

        </section>
    );
};

export default Hero;
