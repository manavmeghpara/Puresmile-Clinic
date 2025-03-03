"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    { id: "01", title: "Dentures", description: "Custom-made removable dental prosthetics for restoring missing teeth and improving oral function." },
    { id: "02", title: "Dental Implants", description: "Permanent tooth replacement solutions with titanium implants for a natural and long-lasting smile." },
    { id: "03", title: "Teeth Whitening", description: "Professional whitening treatments to brighten and enhance the natural look of your teeth." },
    { id: "04", title: "Root Canals", description: "Advanced endodontic procedures to treat infected tooth pulp and preserve natural teeth." },
    { id: "05", title: "Orthodontics", description: "Braces and aligners designed to straighten teeth and correct bite issues for a healthier smile." },
    { id: "06", title: "Diagnosis", description: "Comprehensive dental examinations and digital imaging to detect and prevent oral health issues." }
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section ref={ref} id="services" className="bg-white text-sky-700 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold uppercase text-center mb-10"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    Our Dental Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="p-6 bg-sky-100 rounded-lg shadow-md flex flex-col items-start text-center sm:text-left"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="flex">
                                <span className="text-xl font-bold text-sky-700">{service.id}</span>
                                <h3 className="text-lg font-semibold ml-2">{service.title}</h3>
                            </div>
                            <p className="text-sky-800 text-sm mt-1">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
