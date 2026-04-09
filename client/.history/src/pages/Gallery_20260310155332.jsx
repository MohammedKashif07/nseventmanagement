import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, Star, Images, ArrowRight, Gift, MapPin, Maximize2 } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolio = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, category: 'cinematic', title: 'Grand Scale Execution', location: 'Ranipet' },
        { id: 2, type: 'image', src: MMESIL1, category: 'logistics', title: 'Premium Supply Chain', location: 'Melvisharam' },
        { id: 3, type: 'image', src: HMI1, category: 'cinematic', title: 'Wedding Elite Setup', location: 'Vellore' },
        { id: 4, type: 'image', src: MMESIL1, category: 'logistics', title: 'Branded Inventory', location: 'Tamil Nadu' },
    ];

    const filters = ['all', 'cinematic', 'logistics'];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* --- 1. MINIMALIST LUXURY HERO --- */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 border-b border-slate-100 pb-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-blue-600 mb-6"
                        >
                            <div className="w-12 h-[2px] bg-blue-600"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em]">Visual Archive</span>
                        </motion.div>
                        <h1 className="text-6xl md:text-[100px] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase italic">
                            The <span className="text-blue-600 not-italic">Portfolio.</span>
                        </h1>
                    </div>

                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === f ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. THE STAGGERED CINEMATIC GRID --- */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                    <AnimatePresence mode='popLayout'>
                        {portfolio
                            .filter(item => activeFilter === 'all' || item.category === activeFilter)
                            .map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative group rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl ${index % 3 === 0 ? 'md:col-span-8 aspect-video' : 'md:col-span-4 aspect-[4/5]'
                                        }`}
                                >
                                    {item.type === 'video' ? (
                                        <video
                                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                            poster={item.poster}
                                            autoPlay muted loop playsInline
                                        >
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                                        />
                                    )}

                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                                            <MapPin size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
                                        </div>
                                        <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">{item.category}</span>
                                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                                                {item.type === 'video' ? <Play size={18} fill="currentColor" /> : <Maximize2 size={18} />}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* --- 3. THE "ELITE PARTNER" REFERRAL SECTION --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tight leading-[0.9]">
                                Shared <br /><span className="text-blue-500">Excellence.</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                                Your recommendation is our greatest honor. Refer a friend and we'll credit <span className="text-white font-bold underline decoration-blue-500">₹100</span> as a token of our partnership.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
                            >
                                Get Referral Code
                            </motion.button>
                        </div>

                        <div className="relative w-full max-w-sm">
                            <div className="absolute -inset-4 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-16 text-center">
                                <Gift className="text-blue-500 mx-auto mb-6 animate-bounce" size={48} />
                                <div className="text-white">
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-2">Rewards Earned</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl text-blue-500 font-black tracking-tighter leading-none">₹</span>
                                        <span className="text-8xl font-black tracking-tighter leading-none">100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;