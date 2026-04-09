import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight, ChevronDown
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

// --- PRODUCT IMAGE IMPORTS ---
import WaterBottleGoldImg from '../assets/image/300mlAquaGold.jpg';
import WaterBottleGreenImg from '../assets/image/300mlAquaGreen.jpg';
import ZardaBoxBlack50mlImg from '../assets/image/50mlZardaBoxBlack.jpg';
import ZardaBoxWhite50mlImg from '../assets/image/50mlZardaBoxWhite.jpg';
import TeaCup110mlImg from '../assets/image/110mlTeaCup.jpg';
import Container500mlBlackImg from '../assets/image/Container500mlblack.jpg';
import Container2500mlWhiteImg from '../assets/image/Container2500mlwhite.jpg';
import DiningRollImg from '../assets/image/DiningRoll.jpg';
import PlateBigImg from '../assets/image/PremiumPlateBig.jpg';
import PlateSmallImg from '../assets/image/PremiumPlateSmall.jpg';
import SweetCupGoldImg from '../assets/image/SweetCupGold.jpg';
import Tissue from '../assets/image/Tissue.jpg';

const Services = () => {
    // State to track if all products should be shown
    const [showAllProducts, setShowAllProducts] = useState(false);

    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies and grand receptions." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars, product launches, conferences and much more." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Memorable birthdays, anniversaries, and private house parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage management and technical production for live entertainment." }
    ];

    const products = [
        { title: "Premium 300ml Water Bottles", category: "Essentials", img: WaterBottleGoldImg },
        { title: "Premium 300ml Water Bottles", category: "Essentials", img: WaterBottleGreenImg },
        { title: "Premium Dining Roll", category: "Disposable", img: DiningRollImg },
        { title: "Sweet Cup Gold", category: "Disposable", img: SweetCupGoldImg },
        { title: "Premium 110ml Tea Cup", category: "Disposable", img: TeaCup110mlImg },
        { title: "Tissue Paper", category: "Disposable", img: Tissue },
        { title: "50ml Zarda Box Black", category: "Disposable", img: ZardaBoxBlack50mlImg },
        { title: "50ml Zarda Box White", category: "Disposable", img: ZardaBoxWhite50mlImg },
        { title: "500ml Container Box Black", category: "Disposable", img: Container500mlBlackImg },
        { title: "2500ml Container Box White", category: "Disposable", img: Container2500mlWhiteImg },
        { title: "Premium Plate Big", category: "Disposable", img: PlateBigImg },
        { title: "Premium Plate Small", category: "Disposable", img: PlateSmallImg },
    ];

    // Determine which products to display based on state
    const displayedProducts = showAllProducts ? products : products.slice(0, 6);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-28 pb-16 px-4">
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
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight italic uppercase">Supply Showcase</h3>
                            <p className="text-slate-500 font-medium max-w-sm">Premium quality essentials we supply for your extraordinary gatherings.</p>
                        </div>
                        <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                            Request Quote <ArrowRight size={14} />
                        </button>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence>
                            {displayedProducts.map((item, idx) => (
                                <motion.div
                                    layout
                                    key={item.title} // Used title as key for better animation tracking
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-shadow duration-500 h-full"
                                >
                                    <div className="aspect-4/3 overflow-hidden relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mx-auto"
                                        />
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-4 py-1.5 bg-white shadow-md text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h4 className="font-bold text-slate-900 text-xl tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                            <ShieldCheck size={14} className="text-green-500" /> NS Verified Quality
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* SHOW MORE / SHOW LESS BUTTON */}
                    <div className="mt-16 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAllProducts(!showAllProducts)}
                            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg"
                        >
                            {showAllProducts ? 'View Less' : 'View All Catalog'}
                            <motion.div
                                animate={{ rotate: showAllProducts ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={16} />
                            </motion.div>
                        </motion.button>
                    </div>

                </div>
            </section>

            {/* --- PREMIUM STATS DASHBOARD --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="bg-slate-950 rounded-[3rem] md:rounded-[4rem] py-16 px-8 md:px-12 shadow-2xl relative overflow-hidden border border-slate-900">

                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center relative z-10 md:divide-x divide-white/10">
                            {[
                                { label: "Events Managed", val: "100+", icon: Sparkles, color: "text-blue-400" },
                                { label: "Happy Clients", val: "100%", icon: Heart, color: "text-pink-400" },
                                { label: "Quality Checks", val: "Infinite", icon: ShieldCheck, color: "text-green-400" },
                                { label: "Avg Delivery", val: "On Time", icon: Zap, color: "text-yellow-400" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="flex flex-col items-center group cursor-default"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl relative overflow-hidden">
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-current ${stat.color}`} />
                                        <stat.icon className={`w-7 h-7 ${stat.color} group-hover:animate-pulse relative z-10`} />
                                    </div>
                                    <h5 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 tracking-tighter mb-2">
                                        {stat.val}
                                    </h5>
                                    <p className="text-slate-400 uppercase tracking-[0.2em] text-[10px] font-black group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;