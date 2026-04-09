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