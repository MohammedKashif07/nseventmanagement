import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, ArrowUpRight, Gift, Images, Film } from 'lucide-react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        { id: 1, type: 'image', src: '/images/MMESIL1.jpg', title: 'Premium Bottle Branding' },
        { id: 2, type: 'image', src: '/images/HMI1.jpg', title: 'Wedding Setup Excellence' },
        { id: 3, type: 'image', src: '/images/MMH3.JPG', title: 'Branded Essentials' },
        { id: 4, type: 'image', src: '/images/MMH2.JPG', title: 'Private Showcase' },
        { id: 5, type: 'image', src: '/images/MMH3.JPG', title: 'Event Logistics' },
        { id: 6, type: 'image', src: '/images/NWAP2.JPG', title: 'VIT Chancellor' },
        { id: 7, type: 'image', src: '/images/NWAP1.JPG', title: 'VIT Chancellor' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

    const handleShare = async () => {
        const shareData = {
            title: 'NS Archive - Partner Referral',
            text: 'Join the NS Archive partner network and start earning rewards!',
            url: window.location.href, // This shares the current page URL
        };

        try {
            if (navigator.share) {
                // native share for mobile/supported browsers
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard if Web Share API is not supported
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard! Share it with your friends.');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };


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
                            Showcase <span className="text-blue-600 not-italic font-light">Vault</span>
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

            {/* --- 2. UNIFORM GRID (Fixed Alignment) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
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
                                /* aspect-video forces all cards to 16:9 ratio */
                                className="relative group rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm aspect-video w-full"
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

                                {/* Media Indicator */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-[8px] font-black uppercase tracking-widest text-slate-900 rounded-full flex items-center gap-1.5 shadow-sm">
                                        {item.type === 'video' ? <Play size={8} fill="currentColor" /> : <Camera size={8} />}
                                        {item.type}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex justify-between items-end text-white">
                                        <div>
                                            <h4 className="font-bold text-base mb-1">{item.title}</h4>
                                            <div className="flex items-center gap-1.5 text-blue-400 text-[9px] font-black uppercase tracking-tighter">
                                                <span>View Full Media</span>
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

                            {/* 2. Attach the handleShare function to the button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={handleShare}
                                className="w-full bg-white text-slate-950 font-black py-4 px-6 rounded-xl hover:bg-blue-50 transition uppercase text-[10px] tracking-widest cursor-pointer"
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