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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <section ref={ref} id="services" className="bg-white text-sky-700 py-24 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold uppercase text-center mb-10"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    Our Dental Services
                </motion.h2>

                <div className="grid gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="flex items-start gap-6 p-6 bg-sky-100 rounded-xl shadow-lg"
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            <span className="text-3xl font-bold text-sky-700">
                                {service.id}
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-sky-800">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
