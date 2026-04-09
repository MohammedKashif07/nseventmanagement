import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, ArrowUpRight, Gift, Images, Film } from 'lucide-react';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        { id: 1, type: 'video', src: MMV1, poster: HMI1, title: 'Grand Scale Logistics' },
        { id: 2, type: 'image', src: MMESIL1, title: 'Premium Bottle Branding' },
        { id: 3, type: 'image', src: HMI1, title: 'Wedding Setup Excellence' },
        { id: 4, type: 'video', src: MMV1, poster: HMI1, title: 'Corporate Gala' },
        { id: 5, type: 'image', src: MMESIL1, title: 'Branded Essentials' },
        { id: 6, type: 'image', src: HMI1, title: 'Private Showcase' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden">

            {/* --- 1. HERO & MEDIA FILTER --- */}
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
                            Media <span className="text-blue-600 not-italic font-light">Library</span>
                        </h1>
                    </div>

                    <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
                        {[
                            { id: 'all', label: 'All', icon: <Images size={14} /> },
                            { id: 'image', label: 'Photos', icon: <Camera size={14} /> },
                            { id: 'video', label: 'Videos', icon: <Film size={14} /> }
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === btn.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                            >
                                {btn.icon} {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. THE GRID (RESTORED TO NATURAL HEIGHT) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                {/* Using 'columns' instead of 'grid' allows items to keep their natural 
                   height and stack like a Pinterest/Masonry board.
                */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
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
                                className="relative group rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm inline-block w-full"
                            >
                                {item.type === 'video' ? (
                                    <video
                                        className="w-full h-auto object-cover"
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
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}

                                {/* Media Indicator */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/80 backdrop-blur text-[8px] font-black uppercase tracking-widest text-slate-900 rounded-full flex items-center gap-1.5 shadow-sm">
                                        {item.type === 'video' ? <Play size={8} fill="currentColor" /> : <Camera size={8} />}
                                        {item.type}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <div className="flex justify-between items-end text-white">
                                        <div>
                                            <h4 className="font-bold text-base mb-1">{item.title}</h4>
                                            <div className="flex items-center gap-1.5 text-blue-400 text-[9px] font-black uppercase tracking-tighter">
                                                <span>Expand</span>
                                                <ArrowUpRight size={12} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* --- 3. REFERRAL SECTION --- */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/30">
                                <Gift className="mr-2" size={14} /> Partner Rewards
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter italic">Earn ₹100 <br /> Per Referral</h2>
                            <p className="text-blue-100/60 text-base max-w-sm leading-relaxed">
                                Refer a partner. When they place their first order, you receive ₹100 credited instantly.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-4xl border border-white/10 text-center w-full max-w-xs">
                            <p className="text-blue-300 text-[10px] uppercase font-black tracking-[0.2em] mb-4 italic">Instant Payout</p>
                            <div className="flex items-center justify-center gap-2 mb-6 font-black text-6xl">
                                <span className="text-2xl text-blue-400">₹</span>100
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-slate-950 font-black py-4 px-6 rounded-xl hover:bg-blue-50 transition uppercase text-[10px] tracking-widest"
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