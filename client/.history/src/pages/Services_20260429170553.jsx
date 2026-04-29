import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight, ChevronDown
} from 'lucide-react';
import CountUp from 'react-countup';
import ServiceCard from '../components/ui/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [showAllProducts, setShowAllProducts] = useState(false);

    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, conferences and much more." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    const products = [
        { title: "Water Bottle Gold", img: "/images/300mlAquaGold.jpg" },
        { title: "Water Bottle Green", img: "/images/300mlAquaGreen.jpg" },
        { title: "Dining Roll", img: "/images/DiningRoll.jpg" },
        { title: "Sweet Cup Gold", img: "/images/SweetCupGold.jpg" },
        { title: "Tea Cup", img: "/images/110mlTeaCup.jpg" },
        { title: "Tissue", img: "/images/Tissue.jpg" },
        { title: "Zarda Box Black", img: "/images/50mlZardaBoxBlack.jpg" },
        { title: "Zarda Box White", img: "/images/50mlZardaBoxwhite.jpg" },
        { title: "Container 500ml", img: "/images/Container500mlblack.jpg" },
        { title: "Container 2500ml", img: "/images/Container2500mlwhite.jpg" },
        { title: "Plate Big", img: "/images/PremiumPlateBig.jpg" },
        { title: "Plate Small", img: "/images/PremiumPlateSmall.jpg" },
    ];

    const displayedProducts = showAllProducts ? products : products.slice(0, 6);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Our Services
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#06065a] mb-6 tracking-tight">
                        Everything you need for a <br />
                        <span className="text-blue-600">Perfect Event.</span>
                    </h2>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainEvents.map((event, index) => (
                            <motion.div key={`event-${index}`} whileHover={{ y: -10 }}>
                                {ServiceCard ? <ServiceCard {...event} /> : (
                                    <div className="p-6 border rounded-xl bg-slate-50">
                                        <event.icon className="text-blue-600 mb-4" />
                                        <h3 className="font-bold">{event.title}</h3>
                                        <p className="text-sm text-slate-500">{event.description}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUPPLY SHOWCASE SECTION */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-blue-600 tracking-tight italic uppercase">
                                Supply Showcase
                            </h3>
                            <p className="text-slate-500 font-medium max-w-sm">
                                Premium quality essentials we supply for your extraordinary gatherings.
                            </p>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {displayedProducts.map((item) => (
                                <motion.div
                                    layout
                                    key={item.title} // Use title as key for stable animations
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-shadow duration-500 h-full"
                                >
                                    <div className="aspect-4/3 overflow-hidden relative bg-white">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image'; }}
                                        />
                                        {/* FIXED: Only renders the badge if a category exists, removing the empty circle */}
                                        {item.category && (
                                            <div className="absolute top-6 left-6 z-20">
                                                <span className="px-4 py-1.5 bg-white/90 backdrop-blur shadow-md text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full">
                                                    {item.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-8">
                                        <h4 className="font-bold text-[#06065a] text-xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                            <ShieldCheck size={14} className="text-green-500" />
                                            NS Verified Quality
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CATALOG TOGGLE BUTTON */}
                    <div className="mt-16 flex justify-center">
                        <Link
                            to="/catalog"
                            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg"
                        >
                            Browse Full Catalog <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-[#06065a] rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 text-center gap-10">
                        <div>
                            <Sparkles className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">
                                <CountUp end={100} duration={3} suffix="+" enableScrollSpy />
                            </h5>
                            <p className="text-gray-300 text-sm">Events Managed</p>
                        </div>
                        <div>
                            <Heart className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">
                                <CountUp end={100} duration={3} suffix="%" enableScrollSpy />
                            </h5>
                            <p className="text-gray-300 text-sm">Happy Clients</p>
                        </div>
                        <div>
                            <ShieldCheck className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold tracking-tighter">Return</h5>
                            <p className="text-gray-300 text-sm">Acceptable for all products</p>
                        </div>
                        <div>
                            <Zap className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold tracking-tighter">On Time</h5>
                            <p className="text-gray-300 text-sm">Delivery</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;