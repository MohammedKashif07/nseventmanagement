import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, Star, Images, Filter, ArrowUpRight, Gift } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    // Portfolio items categorized
    const items = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, cat: 'events', title: 'Grand Scale Logistics' },
        { id: 2, type: 'image', src: MMESIL1, cat: 'supply', title: 'Premium Bottle Branding' },
        { id: 3, type: 'image', src: HMI1, cat: 'events', title: 'Wedding Setup Excellence' },
        // Add more here
    ];

    const filteredItems = filter === 'all' ? items : items.filter(i => i.cat === filter);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
            {/* --- 1. MINIMAL LUXURY HERO --- */}
            <section className="pt-32 pb-12 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
                        >
                            The NS Archive
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 uppercase italic">
                            Event <span className="text-blue-600 not-italic font-light">Gallery</span>
                        </h1>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                        {['all', 'events', 'supply'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
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
                                className="relative group rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm cursor-none"
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
                <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-16">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tight leading-tight">
                                Turn your photos into <span className="text-blue-500">₹100</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
                                Referral excellence rewarded. Share your NS experience and get instant rewards.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-blue-600 text-white font-black px-10 py-5 rounded-2xl uppercase text-xs tracking-widest shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
                            >
                                Invite a Friend
                            </motion.button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 animate-pulse"></div>
                            <div className="relative bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 text-center transform hover:rotate-2 transition-transform">
                                <Gift className="text-blue-500 mx-auto mb-6" size={48} />
                                <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">You Received</p>
                                <h3 className="text-7xl font-black text-white tracking-tighter">₹100</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;