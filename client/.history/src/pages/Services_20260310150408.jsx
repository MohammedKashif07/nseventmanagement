import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Briefcase, PartyPopper, Mic2, Droplets, Coffee, Utensils, Star, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const mainEvents = [
        { icon: Heart, title: "Grand Weddings", description: "Breathtaking ceremonies and royal receptions tailored to your love story." },
        { icon: Briefcase, title: "Corporate Excellence", description: "High-stakes seminars, product launches, and conferences with flawless execution." },
        { icon: PartyPopper, title: "Elite Socials", description: "From milestone birthdays to private soirées, we curate every moment." },
        { icon: Mic2, title: "Live Productions", description: "Concerts, stage decors, and technical management for high-impact entertainment." }
    ];

    return (
        <div className="bg-[#050505] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">

            {/* --- IMMERSIVE HERO SECTION --- */}
            <motion.section
                style={{ opacity, scale }}
                className="relative h-[90vh] flex items-center justify-center text-center px-4"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                </div>

                <div className="relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 flex justify-center"
                    >
                        <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
                            Event Alchemy
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9]"
                    >
                        WE CREATE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                            LEGENDARY
                        </span> EVENTS.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Turning your vision into an immersive reality. Precision in planning, excellence in execution.
                    </motion.p>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-blue-500 rounded-full" />
                </motion.div>
            </motion.section>

            {/* --- INTERACTIVE SERVICE GRID --- */}
            <section className="relative py-32 px-4 bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {mainEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="group relative p-10 h-full rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:border-slate-900 transition-all duration-500 cursor-pointer overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/20 rounded-full blur-2xl transition-all" />
                                    <event.icon className="w-12 h-12 mb-8 text-blue-600 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" />
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4">{event.title}</h3>
                                    <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BENTO-STYLE SUPPLY SECTION --- */}
            <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Essential Infrastructure.</h2>
                        <p className="text-slate-500 text-xl">The backbone of every successful event.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Large Bento Item */}
                        <div className="md:col-span-2 row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 relative overflow-hidden group">
                            <Droplets className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 group-hover:-rotate-12 transition-transform duration-700" />
                            <h4 className="text-3xl font-black mb-4 uppercase">Premium Beverage <br /> Logistics</h4>
                            <p className="max-w-xs text-blue-100">From custom-branded water to artisan soft drinks, we manage the flow of your event.</p>
                        </div>

                        {/* Smaller Bento Item */}
                        <div className="bg-slate-800/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-slate-800 transition-colors">
                            <Coffee className="w-10 h-10 text-orange-400 mb-6" />
                            <h4 className="text-xl font-bold mb-2">Traditional Beeda</h4>
                            <p className="text-slate-400 text-sm">Authentic stalls that add a touch of culture to your celebration.</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-slate-800 transition-colors">
                            <Utensils className="w-10 h-10 text-green-400 mb-6" />
                            <h4 className="text-xl font-bold mb-2">Disposable Eco-Lux</h4>
                            <p className="text-slate-400 text-sm">Eco-friendly cutlery and premium disposables that don't sacrifice style.</p>
                        </div>

                        <div className="md:col-span-2 bg-white text-slate-900 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
                            <div>
                                <h4 className="text-3xl font-black uppercase mb-4">Custom Branding</h4>
                                <p className="text-slate-600">Make it yours. Personalize every detail from bottles to décor.</p>
                            </div>
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-20 h-20 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center">
                                        <Star className="text-blue-600 fill-blue-600 w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STATS / TRUST SECTION --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Events Managed", val: "500+", icon: Sparkles },
                        { label: "Happy Clients", val: "100%", icon: Heart },
                        { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                        { label: "Avg Delivery", val: "On Time", icon: Zap }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <stat.icon className="w-6 h-6 mx-auto text-blue-600 mb-4" />
                            <h5 className="text-4xl font-black text-slate-900">{stat.val}</h5>
                            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;