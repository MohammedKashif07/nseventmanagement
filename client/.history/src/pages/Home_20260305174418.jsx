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

            {/* --- HERO SECTION --- */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover opacity-40" // Removed scale-105 and animate-pulse-slow
                        alt="Event Background"
                    />
                    {/* Dark gradient overlay to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950"></div>
                </div>

                {/* Animated Decorative Blobs */}
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
                            Ns <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Events</span>
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
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

                <motion.a
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    href="#services"
                    className="absolute bottom-10 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
                >
                    Explore
                    <ChevronDown size={24} />
                </motion.a>
            </section>

            {/* --- MAIN CONTENT --- */}
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

            {/* --- WHATSAPP ICON --- */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="fixed bottom-8 right-8 z-50 group"
            >
                <a
                    href="https://wa.me/918667281229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <span className="mr-4 px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl shadow-2xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-slate-100">
                        Chat with us!
                    </span>

                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 animate-pulse"></div>
                        <div className="relative h-16 w-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-xl flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
                        </span>
                    </div>
                </a>
            </motion.div>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-950 text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/5 pb-16 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-black mb-6 tracking-tighter italic">NS EVENTS<span className="text-blue-500 not-italic">.</span></h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0">
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