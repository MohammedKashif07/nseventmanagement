import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Change background on scroll for a premium feel
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
                    : "bg-transparent"
                }`}
        >
            {/* Logo with a little extra character */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">
                    NS
                </div>
                <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
                    Events
                </span>
            </div>

            {/* Navigation Links with animated underlines */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-700">
                {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative group hover:text-blue-900 transition-colors"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Premium CTA Button */}
            <div className="flex items-center">
                <a
                    href="#contact"
                    className="relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-900 rounded-full hover:bg-blue-800 shadow-lg hover:shadow-blue-900/20 group active:scale-95"
                >
                    <span className="relative">Book Now</span>
                </a>

                {/* Mobile Menu Icon (Placeholder for functionality) */}
                <div className="md:hidden ml-4 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;