import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
    const [showGreeting, setShowGreeting] = useState(false);

    // Show WhatsApp greeting after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowGreeting(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white selection:bg-blue-600 selection:text-white">
            <Navbar />

            {/* --- ULTRA-PREMIUM HERO SECTION --- */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background with Zoom Animation */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover opacity-40"
                        alt="Event Background"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-950/90 via-slate-950/40 to-slate-950"></div>
                </div>

                {/* Glassmorphism Blobs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-purple-600/10 blur-[150px] rounded-full"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-xl"
                        >
                            <Sparkles size={14} className="text-yellow-400" /> NS Event Management
                        </motion.span>

                        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            Events <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-indigo-400">
                                Redefined.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/60 max-w-xl mx-auto mb-12 font-medium leading-relaxed italic">
                            "Your Event, Our Responsibility. Excellence in every detail."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="relative px-12 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] overflow-hidden transition-all hover:shadow-blue-500/60"
                            >
                                <span className="relative z-10">Start Planning</span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.a>

                            <motion.a
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                href="#services"
                                className="px-12 py-5 border border-white/20 backdrop-blur-md text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all"
                            >
                                Our Portfolio
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Prompt */}
                <motion.a
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    href="#services"
                    className="absolute bottom-12 text-white/30 hover:text-white transition-colors flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.4em] font-black"
                >
                    Scroll
                    <ChevronDown size={20} />
                </motion.a>
            </section>

            {/* --- CONTENT SECTIONS --- */}
            <div className="relative z-20">
                <section id="services" className="py-32 bg-slate-50">
                    <Services />
                </section>

                <section id="gallery" className="py-32 bg-white">
                    <Gallery />
                </section>

                <section id="contact" className="py-32 bg-slate-900">
                    <Contact />
                </section>
            </div>

            {/* --- WHATSAPP CONCIERGE WIDGET --- */}
            <div className="fixed bottom-8 right-8 z-100 flex flex-col items-end">
                <AnimatePresence>
                    {showGreeting && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="mb-5 w-72 bg-white rounded-4xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden"
                        >
                            <div className="bg-green-600 p-5 flex items-center gap-3">
                                <div className="relative w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl">
                                    👋
                                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-4 border-green-600 rounded-full"></span>
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-70">Online Concierge</p>
                                    <p className="text-white font-bold text-sm">NS Support</p>
                                </div>
                                <button onClick={() => setShowGreeting(false)} className="ml-auto text-white/40 hover:text-white transition-colors">
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    Ready to make your next event <b>unforgettable</b>? Let's chat!
                                </p>
                                <a
                                    href="https://wa.me/918667281229"
                                    target="_blank"
                                    className="block w-full bg-slate-950 text-white text-center py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg active:scale-95"
                                >
                                    Start Chatting Now
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.a
                    href="https://wa.me/918667281229"
                    target="_blank"
                    whileHover={{ scale: 1.1, rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group h-16 w-16 bg-linear-to-br from-green-400 via-green-500 to-green-600 rounded-[1.8rem] shadow-[0_15px_40px_-5px_rgba(34,197,94,0.6)] border border-white/30 flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 translate-x-full group-hover:-translate-x-full duration-1000"></div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        className="w-8 h-8 brightness-0 invert"
                        alt="WhatsApp"
                    />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
                    </span>
                </motion.a>
            </div>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-950 text-white pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-16 border-b border-white/5 pb-20">
                    <div className="col-span-2">
                        <h3 className="text-4xl font-black mb-8 tracking-tighter italic">NS EVENTS<span className="not-italic text-blue-500">.</span></h3>
                        <p className="text-slate-400 max-w-sm leading-loose text-sm">
                            Premium event planning, luxury supply, and full-scale coordination services across Tamil Nadu. We don't just plan events; we create legacies.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-blue-500">Links</h4>
                        <ul className="text-slate-400 space-y-4 text-xs font-bold uppercase tracking-widest">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-blue-500">Contact</h4>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Support</p>
                        <p className="text-white text-sm font-black mb-6">nsservices.support@gmail.com</p>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Call Us</p>
                        <p className="text-white text-sm font-black">+91 86672 81229</p>
                    </div>
                </div>
                <div className="pt-12 text-center text-slate-600 text-[9px] font-black uppercase tracking-[0.5em]">
                    © 2026 NS — Built for Excellence
                </div>
            </footer>
        </div>
    );
};

export default Home;