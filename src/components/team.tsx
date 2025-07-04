"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bgColor: string;
    description?: string;
}

const teamMembers = [
    {
        name: "Dr. Mili Meghpara",
        role: "Paediatric dentist (B.D.S., M.D.S.)",
        image: "/pics/Mili.png",
        bgColor: "bg-blue-100",
        description: "🏅 DOUBLE GOLD MEDALIST (B.D.S., M.D.S.)🔹 Super Specialist in Children’s Dental care & Root Canal Treatments",
    },
    {
        name: "Dr. Shubham J. Godhani",
        role: "Prosthodontist (B.D.S., M.D.S.)",
        image: "/pics/Shubham.png",
        bgColor: "bg-pink-100",
        description: "Master in Cortico Basal Implant – Munich, Germany | Super Specialist in Basal Implants 🦷",
    },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Team = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);


    return (
        <section ref={ref} id="team" className="bg-white text-gray-900 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{fadeInVariants}}
                >
                    Meet Our Team
                </motion.h2>

                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Our dedicated dental professionals are committed to providing top-notch care.
                </p>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center mx-auto max-w-3xl">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            onClick={() => setSelectedMember(member)}
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

                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
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
                                onClick={() => setSelectedMember(null)}
                            >
                                ✕
                            </button>

                            <div className="flex justify-center">
                                <Image src={selectedMember.image} alt={selectedMember.name} width={200} height={200} className="rounded-xl shadow-md" />
                            </div>

                            <h4 className="text-black font-bold text-lg md:text-xl text-center mt-2">{selectedMember.name}</h4>
                            <p className="text-gray-500 text-center text-sm">{selectedMember.role}</p>

                            {selectedMember.description && (
                                <p className="text-gray-700 text-sm md:text-base text-center mt-2.5">
                                    {selectedMember.description}
                                </p>
                            )}

                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-sky-700 text-white px-4 py-2 rounded text-sm font-semibold shadow-md hover:bg-sky-500 transition"
                                    onClick={() => setSelectedMember(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default Team;
