import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, ArrowUpRight, Gift, Filter, Layers } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, cat: 'events', title: 'Grand Scale Logistics' },
        { id: 2, type: 'image', src: MMESIL1, cat: 'supply', title: 'Premium Bottle Branding' },
        { id: 3, type: 'image', src: HMI1, cat: 'events', title: 'Wedding Setup Excellence' },
        { id: 4, type: 'video', src: MMV1, poster: HMI1, cat: 'events', title: 'Corporate Gala' },
        { id: 5, type: 'image', src: MMESIL1, cat: 'supply', title: 'Branded Essentials' },
        { id: 6, type: 'image', src: HMI1, cat: 'events', title: 'Private Showcase' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(i => i.cat === filter);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden">

            {/* --- 1. HERO & PERSISTENT FILTER --- */}
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
                    <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
                        {[
                            { id: 'all', label: 'All', icon: <Layers size={14} /> },
                            { id: 'events', label: 'Events', icon: <Camera size={14} /> },
                            { id: 'supply', label: 'Supplies', icon: <Filter size={14} /> }
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat.id
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. FIXED GRID SYSTEM --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                {/* Changed from 'columns-3' to 'grid-cols-3'. 
                    This keeps the 3-column structure consistent regardless of item count.
                */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative group rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-4/5"
                            >
                                {item.type === 'video' ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        poster={item.poster}
                                        muted
                                        loop
                                        onMouseOver={e => e.target.play()}
                                        onMouseOut={e => e.target.pause()}
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}

                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur shadow-sm text-[9px] font-black uppercase tracking-widest text-blue-600 rounded-full">
                                        {item.cat}
                                    </span>
                                </div>

                                {/* Overlay Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                                            <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-tighter">
                                                <span>View Project</span>
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                        {item.type === 'video' && <Play size={20} className="text-white mb-1" fill="white" />}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* --- 3. REFERRAL SECTION --- */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] p-8 md:p-16 text-white shadow-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/30">
                                <Gift className="mr-2" size={16} /> Partner Rewards
                            </div>
                            <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Earn ₹100 <br /> Per Referral</h2>
                            <p className="text-blue-100/70 text-lg max-w-md leading-relaxed">
                                Share the excellence. When your referred friend places an order,
                                we credit ₹100 to your account.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 text-center w-full max-w-sm">
                            <p className="text-blue-300 text-xs uppercase font-black tracking-[0.2em] mb-4 italic">Instant Cashout</p>
                            <div className="flex items-center justify-center gap-2 mb-8 font-black text-7xl">
                                <span className="text-3xl text-blue-400">₹</span>100
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-blue-600 text-white font-black py-5 px-8 rounded-2xl hover:bg-blue-500 transition shadow-xl uppercase text-xs tracking-widest"
                            >
                                Start Referring
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;