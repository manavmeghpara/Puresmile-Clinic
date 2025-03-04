"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Quote = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <section ref={ref} className="text-center pt-20 px-6 md:px-20 bg-white text-sky-800">
            {/* Text Animation */}
            <motion.p
                className="md:text-xl font-medium leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                At PureSmile Clinic, we redefine dental care with a patient-first approach,
                offering top-tier treatments for a confident, healthy smile.
            </motion.p>

            {/* Underline Animation */}
            <motion.div
                className="mt-4 mx-auto w-64 h-1 bg-sky-700 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
        </section>
    );
};

export default Quote;
