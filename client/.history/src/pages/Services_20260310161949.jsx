import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight,
    Camera, Search
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

// --- PRODUCT IMAGE IMPORTS ---
// Replace these filenames with your actual filenames in src/assets/image/
import WaterBottleImg from '../assets/image/water-bottle.jpg';
import BeedaStallImg from '../assets/image/beeda-stall.jpg';
import IceBarImg from '../assets/image/ice-bar.jpg';
import LiveStallImg from '../assets/image/live-stall.jpg';
import ZardaBoxImg from '../assets/image/zarda-box.jpg';
import CutleryImg from '../assets/image/cutlery.jpg';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    // Using your local imported images here
    const products = [
        { title: "Premium Water Bottles", category: "Essentials", img: WaterBottleImg },
        { title: "Traditional Beeda Stall", category: "Traditional", img: BeedaStallImg },
        { title: "Premium Ice Bar Supply", category: "Logistics", img: IceBarImg },
        { title: "Live Food Stalls", category: "Hospitality", img: LiveStallImg },
        { title: "Custom Zarda Boxes", category: "Sweets", img: ZardaBoxImg },
        { title: "Eco-Friendly Cutlery", category: "Disposable", img: CutleryImg }
    ];

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white">
            {/* --- HERO SECTION --- */}
            <section className="pt-24 pb-16 px-4">
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
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight italic uppercase">Supply Showcase</h3>
                            <p className="text-slate-500 font-medium">Genuine products delivered for 100+ successful events.</p>
                        </div>
                        <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                            Request Quote <ArrowRight size={14} />
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
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="aspect-4/3 overflow-hidden relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900">
                                            <Search size={20} />
                                        </div>
                                    </div>
                                    {/* Category Tag */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full shadow-lg">
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
                                        <ShieldCheck size={14} className="text-green-500" /> Quality Verified
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center pt-12 border-t border-slate-100">
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