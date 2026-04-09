import React from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Gift, MapPin, Sparkles } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* --- 1. MINIMALIST HERO --- */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto border-b border-slate-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-blue-600 mb-6"
                    >
                        <Sparkles size={18} />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Visual Showcase</span>
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        Our <span className="text-blue-600 not-italic">Work.</span>
                    </h1>
                </div>
            </section>

            {/* --- 2. DUAL FEATURE SPOTLIGHT --- */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* LEFT SIDE: THE VIDEO */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-[3rem] overflow-hidden bg-black aspect-square lg:aspect-auto shadow-2xl"
                    >
                        <video
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            poster={HMI1}
                            autoPlay muted loop playsInline
                        >
                            <source src={MMV1} type="video/mp4" />
                        </video>

                        {/* Overlay Branding */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-blue-400 mb-3">
                                <Play size={16} fill="currentColor" />
                                <span className="text-xs font-bold uppercase tracking-widest">Live Execution</span>
                            </div>
                            <h3 className="text-white text-4xl font-black italic uppercase tracking-tighter">Cinematic Highlights</h3>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: THE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group rounded-[3rem] overflow-hidden bg-slate-100 aspect-square lg:aspect-auto shadow-2xl"
                    >
                        <img
                            src={MMESIL1}
                            alt="Supply Chain"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />

                        {/* Overlay Branding */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-blue-400 mb-3">
                                <Camera size={16} />
                                <span className="text-xs font-bold uppercase tracking-widest">Logistics</span>
                            </div>
                            <h3 className="text-white text-4xl font-black italic uppercase tracking-tighter">Premium Supply</h3>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 3. REFERRAL SECTION --- */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tight leading-[0.9]">
                                Share the <br /><span className="text-blue-500">Excellence.</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                                Your recommendation is our greatest honor. Refer a friend and we'll credit <span className="text-white font-bold underline decoration-blue-500">₹100</span> as a token of appreciation.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl shadow-blue-500/20"
                            >
                                Get Referral Code
                            </motion.button>
                        </div>

                        <div className="relative w-full max-w-sm">
                            <div className="absolute -inset-4 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-16 text-center">
                                <Gift className="text-blue-500 mx-auto mb-6" size={48} />
                                <div className="text-white">
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-2">Partner Bonus</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl text-blue-500 font-black tracking-tighter leading-none">₹</span>
                                        <span className="text-8xl font-black tracking-tighter leading-none">100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;