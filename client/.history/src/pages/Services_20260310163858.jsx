import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight,
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

// --- PRODUCT IMAGE IMPORTS ---
import WaterBottleGoldImg from '../assets/image/300mlAquaGold.jpg';
import WaterBottleGreenImg from '../assets/image/300mlAquaGreen.jpg';
import ZardaBoxBlack50mlImg from '../assets/image/50mlZardaBoxBlack.jpg';
import ZardaBoxWhite50mlImg from '../assets/image/50mlZardaBoxWhite.jpg';
import TeaCup110mlImg from '../assets/image/110mlTeaCup.jpg';
import Container500mlBlackImg from '../assets/image/Container500mlblack.jpg';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    // Added a 'class' property to target specific alignment rules
    const products = [
        { title: "Premium 300ml Water Bottles", category: "Essentials", img: WaterBottleGoldImg, class: 'water-bottle' },
        { title: "Premium 300ml Water Bottles", category: "Essentials", img: WaterBottleGreenImg, class: 'water-bottle' },
        { title: "50ml Zarda Box Black", category: "Disposable", img: ZardaBoxBlack50mlImg, class: 'standard' },
        { title: "50ml Zarda Box White", category: "Disposable", img: ZardaBoxWhite50mlImg, class: 'standard' },
        { title: "Premium 110ml Tea Cup", category: "Disposable", img: TeaCup110mlImg, class: 'standard' },
        { title: "500ml Container Box Black", category: "Disposable", img: Container500mlBlackImg, class: 'standard' }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Our Services
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Everything you need for a <br />
                        <span className="text-blue-600">Perfect Event.</span>
                    </h2>
                </div>
            </section>

            {/* --- EVENT MANAGEMENT CARDS --- */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainEvents.map((event, index) => (
                            <motion.div key={index} whileHover={{ y: -10 }}>
                                <ServiceCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRODUCT SHOWCASE GRID --- */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight italic uppercase">Supply Showcase</h3>
                            <p className="text-slate-500 font-medium max-w-sm">Premium quality essentials we supply for your extraordinary gatherings.</p>
                        </div>
                        <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                            Full Catalog <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
                            >
                                {/* CONDITIONAL ALIGNMENT: 
                                   Water Bottles use object-contain + centering (p-8 and bg-slate-50/50).
                                   Other items use object-cover.
                                */}
                                <div className={`aspect-4/3 overflow-hidden relative flex ${item.class === 'water-bottle' ? 'items-center justify-center p-8 bg-slate-50/50' : ''}`}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className={`w-full ${item.class === 'water-bottle' ? 'max-h-full object-contain' : 'h-full object-cover'} group-hover:scale-105 transition-transform duration-700 mx-auto`}
                                    />

                                    {/* FIXED: Search icon overlay removed. Only category tag remains on hover. */}

                                    {/* Category Tag */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="px-4 py-1.5 bg-white shadow-md text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h4 className="font-bold text-slate-900 text-xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                        <ShieldCheck size={14} className="text-green-500" /> NS Verified Quality
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center pt-12 border-t border-slate-100 relative z-10">
                    {[
                        { label: "Events Managed", val: "100+", icon: Sparkles },
                        { label: "Happy Clients", val: "100%", icon: Heart },
                        { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                        { label: "Avg Delivery", val: "On Time", icon: Zap }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-3">
                            <stat.icon className="w-6 h-6 mx-auto text-blue-600 mb-2 opacity-40" />
                            <h5 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic">{stat.val}</h5>
                            <p className="text-slate-400 uppercase tracking-widest text-[10px] font-black">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;