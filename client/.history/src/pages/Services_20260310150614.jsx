import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, PartyPopper, Mic2, Droplets, Coffee, Utensils, Star, Sparkles, ChevronRight } from 'lucide-react';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", color: "from-pink-500 to-rose-600", desc: "Royal ceremonies & grand receptions." },
        { icon: Briefcase, title: "Corporate", color: "from-blue-500 to-cyan-600", desc: "Professional summits & product launches." },
        { icon: PartyPopper, title: "Socials", color: "from-purple-500 to-indigo-600", desc: "Elite birthdays & private soirées." },
        { icon: Mic2, title: "Concerts", color: "from-orange-500 to-amber-600", desc: "Stage production & live entertainment." }
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30">

            {/* --- HERO: RADIAL GLOW --- */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase">The Future of Events</span>
                    </motion.div>

                    <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-none mb-8">
                        NS <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">SERVICES</span>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light italic">
                        "Precision is our signature. Excellence is our standard."
                    </p>
                </div>
            </section>

            {/* --- THE BENTO SHOWCASE --- */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {mainEvents.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent border border-white/5 hover:border-white/20 transition-all overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-20 shadow-lg`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>

                            <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                                <span className="text-xs font-bold uppercase tracking-widest">Explore</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- NEON LOGISTICS SECTION --- */}
            <section className="py-32 px-4 relative">
                <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Essential <br /> Logistics</h2>
                            <p className="text-slate-400 text-lg mb-10">We don't just plan; we provide. From custom hydration to premium disposables.</p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Beverage Supply", icon: Droplets },
                                    { label: "Traditional Beeda", icon: Coffee },
                                    { label: "Disposable Lux", icon: Utensils },
                                    { label: "Custom Branding", icon: Star }
                                ].map((box, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <box.icon className="w-5 h-5 text-cyan-400" />
                                        <span className="text-sm font-semibold">{box.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative aspect-video bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                                {/* Replace with a real high-res event image */}
                                <div className="text-white/20 font-black text-4xl uppercase tracking-[0.2em] rotate-12">
                                    NS Production
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE "WHY US" TICKER --- */}
            <div className="py-10 border-y border-white/5 bg-white/[0.02] flex overflow-hidden whitespace-nowrap">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-12 animate-marquee">
                        <span className="text-4xl font-black text-white/10 uppercase italic">Premium Quality</span>
                        <Star className="text-cyan-500 fill-cyan-500 w-4 h-4" />
                        <span className="text-4xl font-black text-white/10 uppercase italic">On-Time Delivery</span>
                        <Star className="text-cyan-500 fill-cyan-500 w-4 h-4" />
                        <span className="text-4xl font-black text-white/10 uppercase italic">Precision Execution</span>
                        <Star className="text-cyan-500 fill-cyan-500 w-4 h-4" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Services;