import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Droplets, Coffee, Utensils, Star,
    Sparkles, ShieldCheck, Zap,
    IceCream, Wind, Package, Users, ChevronRight
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    const supplyCategories = [
        {
            title: "Hospitality & Staffing",
            icon: <Users className="w-6 h-6 text-blue-600" />,
            color: "bg-blue-50",
            items: ["Catering Service (Gents/Ladies)", "Live Food Stalls", "Dining / Dasthar Rolls"]
        },
        {
            title: "Premium Essentials",
            icon: <Droplets className="w-6 h-6 text-cyan-600" />,
            color: "bg-cyan-50",
            items: ["Branded Water Bottles", "Sweet / Water / Tea Cups", "Premium Tissue Sets"]
        },
        {
            title: "Traditional & Sweets",
            icon: <Coffee className="w-6 h-6 text-orange-600" />,
            color: "bg-orange-50",
            items: ["Sweet Beeda Stalls", "Zarda Boxes", "Candy & Popcorn Stalls"]
        },
        {
            title: "Logistics & Supply",
            icon: <Package className="w-6 h-6 text-green-600" />,
            color: "bg-green-50",
            items: ["Ice Bar Supply", "Container Boxes & Foil", "Plate Sets / Paper Plates"]
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* --- SECTION HEADER --- */}
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
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        From grand management to the smallest essential detail, we've got you covered.
                    </p>
                </div>
            </section>

            {/* --- MAIN EVENT CARDS --- */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-slate-50 border border-slate-100 p-1 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500"
                            >
                                <ServiceCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INTEGRATED SUPPLY INVENTORY --- */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Supply Inventory</h3>
                        <div className="hidden md:block h-px flex-1 bg-slate-200 mx-8"></div>
                        <span className="text-slate-400 font-medium">All Essentials</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supplyCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                <div className={`w-12 h-12 ${cat.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    {cat.icon}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-6 text-xl tracking-tight">{cat.title}</h4>
                                <ul className="space-y-4">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group cursor-default">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 group-hover:scale-150 transition-transform" />
                                            <span className="text-slate-600 text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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