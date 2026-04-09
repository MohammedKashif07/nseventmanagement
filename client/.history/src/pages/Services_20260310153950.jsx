import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight,
    Camera
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    // High-impact product list with image placeholders
    const products = [
        { title: "Premium Water Bottles", category: "Essentials", img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80" },
        { title: "Traditional Beeda Stall", category: "Traditional", img: "https://images.unsplash.com/photo-1589113331500-117564585c44?auto=format&fit=crop&q=80" },
        { title: "Premium Ice Bar", category: "Logistics", img: "https://images.unsplash.com/photo-1574053478280-8742ba38f0e9?auto=format&fit=crop&q=80" },
        { title: "Live Food Stalls", category: "Hospitality", img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80" },
        { title: "Custom Zarda Boxes", category: "Sweets", img: "https://images.unsplash.com/photo-1549462229-839c8744955d?auto=format&fit=crop&q=80" },
        { title: "Eco-Friendly Cutlery", category: "Disposable", img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
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
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Supply Showcase</h3>
                            <p className="text-slate-500">Premium quality products we supply for every event.</p>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:shadow-lg transition-all group">
                            Full Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden bg-white rounded-[2rem] border border-slate-200"
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Category Tag */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex items-center justify-between">
                                    <h4 className="font-bold text-slate-900 text-lg tracking-tight">{item.title}</h4>
                                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Camera size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center pt-12">
                    {[
                        { label: "Events Managed", val: "500+", icon: Sparkles },
                        { label: "Happy Clients", val: "100%", icon: Heart },
                        { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                        { label: "Avg Delivery", val: "On Time", icon: Zap }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-3">
                            <stat.icon className="w-6 h-6 mx-auto text-blue-600 mb-2 opacity-40" />
                            <h5 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{stat.val}</h5>
                            <p className="text-slate-400 uppercase tracking-widest text-[10px] font-black">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;