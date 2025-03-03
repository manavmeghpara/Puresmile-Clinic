"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome, FaTooth, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
    { title: "Home", path: "#hero", icon: <FaHome /> },
    { title: "Services", path: "#services", icon: <FaTooth /> },
    { title: "Contact", path: "#contact", icon: <FaPhoneAlt /> },
];

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    // ✅ Smooth Scroll with Error Prevention
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        if (!path || path === "#") return; // Prevent errors on invalid paths

        const target = document.querySelector(path);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeNav();
    };

    return (
        <nav className="fixed w-full top-0 z-50 flex justify-center h-16 text-black font-semibold">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-between w-full backdrop-blur-lg drop-shadow-lg bg-white/85 py-3 px-24">
                <div className="flex items-center">
                    <Image alt="logo" src="/favicon.ico" width={30} height={30} className="mr-2 border-2 border-gray-500 rounded-full" />
                    <span className="text-lg font-bold text-sky-800">PureSmile Clinic</span>
                </div>
                <ul className="flex space-x-9">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="flex items-center gap-2 hover:text-sky-700 transition-all duration-300"
                            >
                                {link.icon} {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div
                onClick={toggleNav}
                className="md:hidden fixed top-4 left-6 border bg-black/45 border-white/70 rounded p-2 text-white cursor-pointer z-50"
            >
                {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/90 transition-transform duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-10 text-3xl text-white">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={(e) => handleSmoothScroll(e, link.path)}
                                className="flex items-center gap-2 hover:text-sky-400 transition-all duration-300"
                            >
                                {link.icon} {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
