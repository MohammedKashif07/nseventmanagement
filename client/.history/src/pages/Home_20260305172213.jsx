import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import { ChevronDown, Sparkles } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white selection:bg-blue-100">
            <Navbar />

            {/* --- ENHANCED HERO SECTION --- */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image with Darker, Richer Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
                        alt="Event Background"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-950/80 via-transparent to-slate-950"></div>
                </div>

                {/* Animated Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                            <Sparkles size={14} className="text-yellow-400" /> Premium Event Planning
                        </span>

                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
                            Ns <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Events</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            Transforming your vision into <span className="text-white border-b border-blue-400">extraordinary realities</span>. From concept to execution, we manage it all.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl transition shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden"
                            >
                                <span className="relative z-10">Book Your Event</span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.a>

                            <motion.a
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                                href="#services"
                                className="px-10 py-4 border border-white/30 backdrop-blur-md text-white font-bold rounded-2xl transition"
                            >
                                View Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.a
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    href="#services"
                    className="absolute bottom-10 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
                >
                    Explore
                    <ChevronDown size={24} />
                </motion.a>

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/918667281229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 group"
                >
                    <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition-all"></div>
                    <div className="relative bg-green-500 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 group-hover:-translate-y-2 flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
                    </div>
                </a>
            </section>

            {/* --- SECTIONS WITH SPACING --- */}
            <div className="space-y-0">
                <section id="services" className="py-20 bg-slate-50">
                    <Services />
                </section>

                <section id="gallery" className="py-20 bg-white">
                    <Gallery />
                </section>

                <section id="contact" className="py-20 bg-slate-50">
                    <Contact />
                </section>
            </div>

            {/* --- MODERN FOOTER --- */}
            <footer className="bg-slate-950 text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
                    <div className="col-span-1 md:col-span-2 text-left">
                        <h3 className="text-3xl font-black mb-6 tracking-tighter">NS EVENTS<span className="text-blue-500">.</span></h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Crafting unforgettable experiences across Tamil Nadu. Your premium partner for weddings, corporate events, and private celebrations.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-blue-400">Navigation</h4>
                        <ul className="text-gray-400 space-y-4 text-sm font-medium">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-blue-400">Get in Touch</h4>
                        <p className="text-gray-400 text-sm mb-2">nsservices.support@gmail.com</p>
                        <p className="text-gray-200 font-bold">+91 86672 81229</p>
                        <div className="mt-6 flex gap-4">
                            {/* Social Icons could go here */}
                        </div>
                    </div>
                </div>
                <div className="pt-8 text-center text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                    © 2026 NS Event Management — Built for Excellence
                </div>
            </footer>
        </div>
    );
};

export default Home;