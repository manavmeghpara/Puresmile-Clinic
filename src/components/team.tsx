"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
    {
        name: "Dr. Dianne Russell",
        role: "Senior Dentist",
        image: "/pics/testimonials/profile-ai9.webp",
        bgColor: "bg-blue-100",
    },
    {
        name: "Dr. Samantha Alibee",
        role: "Experienced Dental Consultant",
        image: "/pics/profile1.1.jpg",
        bgColor: "bg-pink-100",
    },
    {
        name: "Dr. Jenny Wilson",
        role: "Dental Surgeon",
        image: "/pics/testimonials/profile-ai10.webp",
        bgColor: "bg-red-100",
    },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Team = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section ref={ref} id="team" className="bg-white text-gray-900 py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    Meet Our Team
                </motion.h2>

                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Our dedicated dental professionals are committed to providing top-notch care.
                </p>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${member.bgColor}`}
                            initial={{ opacity: 0, scale: 0.2 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.15 }}
                        >
                            {/* Image */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={180}
                                height={220}
                                className="rounded-xl shadow-lg"
                            />

                            {/* Name & Role */}
                            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                            <p className="text-gray-600 mt-2">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
