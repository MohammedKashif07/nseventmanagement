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
                            <div className="w-12 h-0.5 bg-blue-600"></div>
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
                                    className={`relative group rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl ${index % 3 === 0 ? 'md:col-span-8 aspect-video' : 'md:col-span-4 aspect-4/5'
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
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
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
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-linear-to-br from-blue-900 to-slate-950 rounded-[3rem] p-8 md:p-16 text-white shadow-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/30">
                                <Gift className="mr-2" size={16} /> Partner Rewards
                            </div>
                            <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Earn ₹100 <br /> Per Referral</h2>
                            <p className="text-blue-100/70 text-lg max-w-md leading-relaxed">
                                Share the excellence. When your referred friend places an order,
                                we credit ₹100 to your account as a token of appreciation.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 text-center w-full max-w-sm shadow-2xl">
                            <p className="text-blue-300 text-xs uppercase font-black tracking-[0.2em] mb-4 italic">Instant Cashout</p>
                            <div className="flex items-center justify-center gap-2 mb-8 font-black">
                                <span className="text-3xl text-blue-400">₹</span>
                                <span className="text-7xl">100</span>
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-slate-950 font-black py-5 px-8 rounded-2xl hover:bg-blue-50 transition shadow-xl uppercase text-xs tracking-widest"
                            >
                                Start Referring
                            </motion.button>
                        </div>
                    </div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;