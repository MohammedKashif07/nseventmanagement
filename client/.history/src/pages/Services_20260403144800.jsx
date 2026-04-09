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

    const displayedProducts = showAllProducts ? products : products.slice(0, 6);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* HERO */}
            <section className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
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

            {/* EVENTS */}
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

            {/* PRODUCTS */}
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

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-[#06065a] text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
                        >
                            Request Quote <ArrowRight size={14} />
                        </motion.a>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence>
                            {displayedProducts.map((item, idx) => (
                                <motion.div
                                    layout
                                    key={item.title}
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

                    {/* BUTTON */}
                    <div className="mt-16 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAllProducts(!showAllProducts)}
                            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-lg"
                        >
                            {showAllProducts ? 'View Less' : 'View All Catalog'}
                            <motion.div animate={{ rotate: showAllProducts ? 180 : 0 }}>
                                <ChevronDown size={16} />
                            </motion.div>
                        </motion.button>
                    </div>

                </div>
            </section>

            {/* STATS */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    <div className="bg-[#06065a] rounded-[3rem] md:rounded-[4rem] py-16 px-8 md:px-12 shadow-2xl relative overflow-hidden border border-[#06065a]">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center">

                            {[
                                { label: "Events Managed", val: "100+", icon: Sparkles },
                                { label: "Happy Clients", val: "100%", icon: Heart },
                                { label: "Quality Checks", val: "Infinite", icon: ShieldCheck },
                                { label: "Avg Delivery", val: "On Time", icon: Zap }
                            ].map((stat, i) => (
                                <motion.div key={i} className="flex flex-col items-center">
                                    <stat.icon className="w-8 h-8 text-white mb-4" />
                                    <h5 className="text-4xl font-black text-white mb-2">
                                        {stat.val}
                                    </h5>
                                    <p className="text-slate-300 text-xs uppercase tracking-widest">
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