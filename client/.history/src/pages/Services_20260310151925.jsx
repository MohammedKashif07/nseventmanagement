import React from 'react';
import { motion } from 'framer-motion';
// Ensure ALL icons used are imported here
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Droplets, Coffee, Utensils, Star,
    ArrowRight, Sparkles, ShieldCheck, Zap
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, and conferences." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    const supplyServices = [
        { icon: <Droplets className="w-6 h-6 text-blue-400" />, title: "Beverage Supply", desc: "Branded water bottles and premium soft drinks." },
        { icon: <Coffee className="w-6 h-6 text-orange-400" />, title: "Traditional Beeda", desc: "Authentic, high-quality beeda stalls for your guests." },
        { icon: <Utensils className="w-6 h-6 text-green-400" />, title: "Disposable Items", desc: "Premium quality plates, cups, and eco-friendly cutlery." },
        { icon: <Star className="w-6 h-6 text-yellow-400" />, title: "Custom Branding", desc: "Personalized labels for water bottles for your special day." }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="relative py-28 overflow-hidden bg-slate-950">
                {/* Glow Effects */}
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
                        Premium Event Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                    >
                        Elevate Every<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                            Occasion
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light"
                    >
                        From intimate gatherings to grand corporate productions, we bring precision and passion to every detail.
                    </motion.p>
                </div>
            </section>

            {/* Main Event Categories */}
            <section className="py-20 px-4 -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mainEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -12 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="h-full"
                            >
                                <ServiceCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supply & Logistic Services */}
            <section className="py-24 bg-slate-950 relative overflow-hidden rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6">
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="text-left">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Event Essentials</h3>
                            <p className="text-slate-400 text-lg max-w-xl">We handle the heavy lifting so you can enjoy the moment. Pure quality, delivered.</p>
                        </div>
                        <button className="flex items-center gap-3 py-3 px-6 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all group shadow-lg shadow-blue-900/20">
                            Our Inventory <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supplyServices.map((service, idx) => (
                            <div key={idx} className="group bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                                <div className="mb-8 p-4 bg-slate-900 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust/Stats Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
                        {[
                            { label: "Events Managed", val: "500+", icon: Sparkles },
                            { label: "Happy Clients", val: "100%", icon: Heart },
                            { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                            { label: "Avg Delivery", val: "On Time", icon: Zap }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <stat.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h5 className="text-5xl font-black text-slate-950 tracking-tighter">{stat.val}</h5>
                                <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;