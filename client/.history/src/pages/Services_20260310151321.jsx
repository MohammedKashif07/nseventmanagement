import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, PartyPopper, Mic2, Droplets, Coffee, Utensils, Star, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, conferences and so on and we manage all." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays parties, anniversaries parties, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment and Event decors for stage." }
    ];

    const supplyServices = [
        { icon: <Droplets className="w-6 h-6 text-blue-400" />, title: "Beverage Supply", desc: "Branded water bottles and premium soft drinks." },
        { icon: <Coffee className="w-6 h-6 text-orange-400" />, title: "Traditional Beeda", desc: "Authentic, high-quality beeda stalls for your guests." },
        { icon: <Utensils className="w-6 h-6 text-green-400" />, title: "Disposable Items", desc: "Premium quality plates, cups, and eco-friendly cutlery." },
        { icon: <Star className="w-6 h-6 text-yellow-400" />, title: "Custom Branding", desc: "Personalized labels for water bottles for your special day." }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
            {/* Hero Section with Gradient Mesh */}
            <section className="relative py-24 overflow-hidden bg-slate-900">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-indigo-600 blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        Premium Event Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
                    >
                        Elevate Every <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Occasion</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        From intimate gatherings to grand corporate productions, we bring precision and passion to every detail.
                    </motion.p>
                </div>
            </section>

            {/* Main Event Categories - Floating Cards */}
            <section className="py-24 px-4 -mt-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ServiceCard {...event} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supply & Logistic Services - Glassmorphism Design */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Essential Supplies</h3>
                            <p className="text-slate-400 text-lg max-w-xl">We handle the logistics so you can focus on your guests. Quality guaranteed.</p>
                        </div>
                        <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition group">
                            View all inventory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supplyServices.map((service, idx) => (
                            <div key={idx} className="group bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                                <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Modern Step Process */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl font-bold text-slate-900 mb-4"> Ns Experience</h3>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0" />

                        {[
                            { step: "01", title: "Consultation", text: "Expert guidance to map out your specific requirements and budget." },
                            { step: "02", title: "Preparation", text: "Rigorous quality checks and professional sourcing for every item." },
                            { step: "03", title: "Execution", text: "On-site management to ensure a flawless, stress-free experience." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center mb-8 group hover:border-blue-500 transition-colors">
                                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-500 transition-colors">{item.step}</span>
                                </div>
                                <h5 className="font-bold text-2xl text-slate-900 mb-4">{item.title}</h5>
                                <p className="text-slate-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;