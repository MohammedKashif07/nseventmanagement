import React from 'react';
import { Trophy, Users, ShieldCheck, Gift, Play, Camera, Star, Images } from 'lucide-react';
import { motion } from 'framer-motion';

// --- ASSET IMPORTS ---
import HMI1 from '../assets/image/HMI1.jpg';
import MMESIL1 from '../assets/image/MMESIL1.jpg';
import MMV1 from '../assets/image/MMV1.mp4';

const Gallery = () => {
    return (
        <div className="bg-white selection:bg-blue-100">
            {/* --- HERO SECTION --- */}
            <section className="bg-slate-950 text-white py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <Images size={14} /> Our Visual Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Event Showcase</h1>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-light max-w-2xl mx-auto">
                        A collection of extraordinary moments and premium logistics managed by NS Events across Tamil Nadu.
                    </p>
                </motion.div>
            </section>

            {/* --- MAIN MEDIA SHOWCASE --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
                        <div className="text-left">
                            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase italic underline decoration-blue-600 decoration-4 underline-offset-8">
                                Portfolio in Action
                            </h2>
                            <p className="text-slate-500 text-lg">Real footage and captures from our 10+ successfully managed events.</p>
                        </div>
                        <div className="flex items-center gap-3 py-2 px-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <Star className="text-yellow-500 fill-yellow-500" size={20} />
                            <span className="font-bold text-slate-700">Premium Execution</span>
                        </div>
                    </div>

                    {/* Dynamic Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                        {/* 1. Primary Video Content */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl bg-black grow">
                                <video
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    controls
                                    poster={HMI1}
                                >
                                    <source src={MMV1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:hidden pointer-events-none transition-all">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl"
                                    >
                                        <Play fill="currentColor" size={32} className="ml-1" />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-8 left-8 text-left pointer-events-none">
                                    <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Cinema Showcase</span>
                                    <h3 className="text-white font-black text-2xl mt-3 italic tracking-tight uppercase">Scale & Logistics</h3>
                                </div>
                            </div>
                        </div>

                        {/* 2. Photography Vertical Column */}
                        <div className="flex flex-col gap-8 h-full">
                            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden group shadow-xl min-h-[300px]">
                                <img
                                    src={MMESIL1}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Supply Setup"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <div className="flex items-center text-white gap-3">
                                        <Camera size={20} className="text-blue-400" />
                                        <span className="text-sm font-black uppercase tracking-[0.2em] italic">On-Site Setup</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden group shadow-xl min-h-[300px]">
                                <img
                                    src={HMI1}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Event Logistics"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <div className="flex items-center text-white gap-3">
                                        <Camera size={20} className="text-blue-400" />
                                        <span className="text-sm font-black uppercase tracking-[0.2em] italic">Supply Quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PARTNER REWARDS (Referral Section) --- */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900 to-slate-950 rounded-[4rem] p-8 md:p-20 text-white shadow-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center px-5 py-2 bg-blue-500/20 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/30">
                                <Gift className="mr-2" size={16} /> Affiliate Program
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter italic leading-tight">Share & Earn <br /> <span className="text-blue-400">₹100 Rewards</span></h2>
                            <p className="text-blue-100/70 text-lg max-w-md leading-relaxed font-light">
                                Loved our gallery? Recommend NS Services to your circle.
                                We credit **₹100** for every successful referral as our way of saying thank you.
                            </p>
                        </div>

                        {/* Referral Card */}
                        <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 text-center w-full max-w-md shadow-2xl relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                                Instant Payout
                            </div>
                            <div className="flex items-center justify-center gap-2 mb-10 font-black">
                                <span className="text-4xl text-blue-400">₹</span>
                                <span className="text-8xl tracking-tighter">100</span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white text-slate-950 font-black py-6 px-8 rounded-[2rem] hover:bg-blue-50 transition-all shadow-xl uppercase text-xs tracking-[0.2em]"
                            >
                                Start Referring Now
                            </motion.button>
                        </div>
                    </div>

                    {/* Background Glows */}
                    <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;