import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, Star, Images as ImagesIcon, Filter, ArrowUpRight, Gift, Film } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    // We now track two types of filters
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');

    const items = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, cat: 'events', title: 'Grand Scale Logistics' },
        { id: 2, type: 'image', src: MMESIL1, cat: 'supply', title: 'Premium Bottle Branding' },
        { id: 3, type: 'image', src: HMI1, cat: 'events', title: 'Wedding Setup Excellence' },
        { id: 4, type: 'video', src: MMV1, poster: HMI1, cat: 'events', title: 'Grand Scale Logistics' },
        { id: 5, type: 'image', src: MMESIL1, cat: 'supply', title: 'Premium Bottle Branding' },
        { id: 6, type: 'image', src: HMI1, cat: 'events', title: 'Wedding Setup Excellence' },
    ];

    // Improved filtering logic
    const filteredItems = items.filter(item => {
        const matchCat = categoryFilter === 'all' || item.cat === categoryFilter;
        const matchType = typeFilter === 'all' || item.type === typeFilter;
        return matchCat && matchType;
    });

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
            {/* --- 1. HERO & FILTERS --- */}
            <section className="pt-32 pb-12 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                    <div className="text-left">
                        <motion.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
                        >
                            The NS Archive
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 uppercase italic">
                            Portfolio <span className="text-blue-600 not-italic font-light">Showcase</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {/* Format Filter (Images/Videos) */}
                        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
                            {[
                                { id: 'all', label: 'All Media', icon: <Filter size={14} /> },
                                { id: 'image', label: 'Photos', icon: <Camera size={14} /> },
                                { id: 'video', label: 'Videos', icon: <Play size={14} /> }
                            ].map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTypeFilter(t.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${typeFilter === t.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-900'
                                        }`}
                                >
                                    {t.icon} {t.label}
                                </button>
                            ))}
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block w-px h-8 bg-slate-200 mx-2"></div>
                    </div>
                </div>
            </section>

            {/* --- 2. THE MASONRY GRID --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative group rounded-4xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
                            >
                                {item.type === 'video' ? (
                                    <div className="relative">
                                        <video
                                            className="w-full object-cover"
                                            poster={item.poster}
                                            muted
                                            loop
                                            onMouseOver={e => e.target.play()}
                                            onMouseOut={e => e.target.pause()}
                                        >
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                            <Play size={16} fill="currentColor" />
                                        </div>
                                    </div>
                                ) : (
                                    <img src={item.src} alt={item.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                )}

                                {/* Overlay Label */}
                                <div className="absolute bottom-4 left-4 right-4 p-5 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-blue-400 text-[9px] uppercase font-black tracking-widest mb-1">{item.cat}</p>
                                            <h4 className="text-white font-bold text-sm">{item.title}</h4>
                                        </div>
                                        <ArrowUpRight className="text-white/40" size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* --- 2. THE MASONRY GRID --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative group rounded-4xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm cursor-none"
                            >
                                {item.type === 'video' ? (
                                    <video className="w-full object-cover" poster={item.poster} controls>
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={item.src} alt={item.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                )}

                                {/* Overlay Label */}
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">{item.cat}</p>
                                            <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                        </div>
                                        <ArrowUpRight className="text-white" size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* --- 3. THE REFERRAL "GOLD" CARD --- */}
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