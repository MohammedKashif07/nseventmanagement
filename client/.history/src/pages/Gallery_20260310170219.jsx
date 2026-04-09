import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Camera, Gift, Sparkles } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, title: 'Live Event Execution', tag: 'Cinematic' },
        { id: 2, type: 'image', src: MMESIL1, title: 'Premium Supply Chain', tag: 'Logistics' },
        { id: 3, type: 'image', src: HMI1, title: 'Elite Venue Setup', tag: 'Management' }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* --- 1. PREMIUM HEADER --- */}
            <section className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6 border-b border-slate-100 pb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-blue-600 mb-4"
                        >
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Visual Archive</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                            Our <span className="text-blue-600 not-italic font-light">Gallery.</span>
                        </h1>
                    </div>
                    <p className="text-slate-400 font-medium md:text-right max-w-xs">
                        Swipe through our latest projects and high-end event supplies.
                    </p>
                </div>
            </section>

            {/* --- 2. THE SWIPE SHOWCASE (Slider) --- */}
            <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto relative">
                <div className="relative aspect-video md:aspect-[21/9] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-900 shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full h-full relative"
                        >
                            {slides[currentIndex].type === 'video' ? (
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay muted loop playsInline poster={slides[currentIndex].poster}
                                >
                                    <source src={slides[currentIndex].src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={slides[currentIndex].src}
                                    alt={slides[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Info Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent p-8 md:p-16 flex flex-col justify-end">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4"
                                >
                                    {slides[currentIndex].tag}
                                </motion.span>
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-white text-3xl md:text-6xl font-black uppercase italic tracking-tighter"
                                >
                                    {slides[currentIndex].title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-8 right-8 flex gap-4 z-30">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-xl"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-xl"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-8 gap-3">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-blue-600' : 'w-3 bg-slate-200'}`}
                        />
                    ))}
                </div>
            </section>

            {/* --- 3. THE REFERRAL REWARD SECTION --- */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group shadow-2xl">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tight leading-[0.9]">
                                Share the <br /><span className="text-blue-500">Excellence.</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                                Your recommendation is our greatest honor. Refer a friend and we'll credit <span className="text-white font-bold underline decoration-blue-500 underline-offset-8">₹100</span> as a token of appreciation.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-blue-500/20"
                            >
                                Get My Referral Code
                            </motion.button>
                        </div>

                        <div className="relative w-full max-w-sm">
                            <div className="absolute -inset-4 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3.5rem] p-16 text-center border-t-white/20">
                                <Gift className="text-blue-500 mx-auto mb-6" size={48} />
                                <div className="text-white">
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-2 italic">Partner Bonus</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl text-blue-500 font-black tracking-tighter">₹</span>
                                        <span className="text-8xl font-black tracking-tighter">100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background Subtle Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;