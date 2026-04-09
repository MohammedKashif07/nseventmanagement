import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Droplets, Coffee, Utensils, Star,
    ArrowRight, Sparkles, ShieldCheck, Zap,
    IceCream, Wind, Package, Users
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    // Grouping your flyer items into logical categories
    const supplyCategories = [
        {
            title: "Hospitality & Staffing",
            icon: <Users className="w-6 h-6 text-blue-400" />,
            items: ["Catering Service (Gents/Ladies)", "Live Food Stalls", "Dining / Dasthar Rolls"]
        },
        {
            title: "Premium Essentials",
            icon: <Droplets className="w-6 h-6 text-cyan-400" />,
            items: ["Branded Water Bottles", "Sweet / Water / Tea Cups", "Premium Tissue Sets"]
        },
        {
            title: "Traditional & Sweets",
            icon: <Coffee className="w-6 h-6 text-orange-400" />,
            items: ["Sweet Beeda Stalls", "Zarda Boxes", "Candy & Popcorn"]
        },
        {
            title: "Logistics & Packaging",
            icon: <Package className="w-6 h-6 text-green-400" />,
            items: ["Container & Zarda Boxes", "Foil Covers", "Plate Sets / Paper Plates"]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
            {/* --- HERO SECTION --- */}
            <section className="relative py-28 overflow-hidden bg-slate-950">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-700 blur-[140px]" />
                    <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-800 blur-[140px]" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        Your Event, Our Responsibility
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                    >
                        Signature <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
                            Experience
                        </span>
                    </motion.h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                        Based in Melvisharam, providing world-class event essentials across the Ranipet District.
                    </p>
                </div>
            </section>

            {/* --- MAIN CATEGORIES --- */}
            <section className="py-20 px-4 -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mainEvents.map((event, index) => (
                            <motion.div key={index} whileHover={{ y: -10 }} transition={{ type: "spring" }}>
                                <ServiceCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- DETAILED INVENTORY SECTION --- */}
            <section className="py-24 bg-slate-950 relative overflow-hidden rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services Offered</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supplyCategories.map((cat, idx) => (
                            <div key={idx} className="group bg-white/5 backdrop-blur-md p-8 rounded-4xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="mb-6 p-3 bg-slate-900 rounded-xl w-fit group-hover:bg-blue-600 transition-colors">
                                    {cat.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-6 tracking-tight">{cat.title}</h4>
                                <ul className="space-y-3">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-200 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Special Highlights from Flyer */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-indigo-600 to-blue-700 p-8 rounded-[2.5rem] flex items-center justify-between overflow-hidden relative group">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Premium Ice Bar</h4>
                                <p className="text-blue-100 text-sm">Keep your beverages chilled in style with our custom ice setups.</p>
                            </div>
                            <Wind className="w-20 h-20 text-white/10 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform" />
                        </div>
                        <div className="bg-linear-to-br from-orange-500 to-red-600 p-8 rounded-[2.5rem] flex items-center justify-between overflow-hidden relative group">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Live Stalls</h4>
                                <p className="text-orange-100 text-sm">Tea, Ice Cream, Soft Drinks, Fruits, Popcorn, and Candy.</p>
                            </div>
                            <IceCream className="w-20 h-20 text-white/10 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Events Managed", val: "500+", icon: Sparkles },
                        { label: "Happy Clients", val: "100%", icon: Heart },
                        { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                        { label: "Avg Delivery", val: "On Time", icon: Zap }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <stat.icon className="w-6 h-6 mx-auto text-blue-600 mb-4" />
                            <h5 className="text-4xl font-black text-slate-950 tracking-tighter">{stat.val}</h5>
                            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;