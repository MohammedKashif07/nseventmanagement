import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Determine if background should be glassmorphism
            setScrolled(currentScrollY > 50);

            // 2. Hide/Show logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling Down - Hide
                setVisible(false);
                setIsOpen(false); // Close mobile menu if user scrolls down
            } else {
                // Scrolling Up - Show
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className="fixed top-0 w-full flex justify-center z-50 pt-6 px-4">
            <motion.nav
                // This controls the disappear/reappear animation
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : -120 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}

                className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 transition-all duration-500 rounded-2xl border border-white/20 ${scrolled
                        ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] scale-95"
                        : "bg-white/40 backdrop-blur-md"
                    }`}
            >
                {/* Brand Logo */}
                <div className="group cursor-pointer">
                    <h1 className="text-2xl font-black tracking-tighter text-blue-950 flex items-center">
                        NS <span className="text-blue-600 ml-1 group-hover:rotate-12 transition-transform duration-300">✦</span>
                    </h1>
                </div>

                {/* Right Side Group: Menu + CTA */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8 border-r border-blue-950/10 pr-8">
                        {['Home', 'Services', 'Gallery'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-bold text-blue-950/70 hover:text-blue-600 transition-all hover:tracking-widest"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-blue-950 text-white text-xs font-bold uppercase tracking-tighter rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            Start Planning
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        >
                            <span className={`w-6 h-0.5 bg-blue-950 rounded-full transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-blue-950 rounded-full transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-blue-950 rounded-full transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl p-8 rounded-3xl border border-blue-100 shadow-2xl md:hidden flex flex-col items-center gap-6"
                    >
                        {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-black text-blue-950 hover:text-blue-600"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;