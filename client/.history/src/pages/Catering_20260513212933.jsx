import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Utensils, Package } from 'lucide-react';

import {
    cateringChickenPackages,
    cateringMuttonPackages,
    supplyOnlyPackages,
    supplyServicePackages
} from '../data/packagesData';

const CateringSupplies = () => {

    const [view, setView] = useState('catering');

    const [cateringType, setCateringType] = useState('chicken');

    const [supplyType, setSupplyType] = useState('supplyOnly');

    const handleConsult = (pkg) => {

        const phoneNumber = "918667281229";

        const message = `Hi NS Event Management, I'm interested in the *${pkg.name}* priced at ₹${pkg.price}. I'd like to consult with you regarding this package.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    // PACKAGE SELECTION
    const selectedPackages =
        view === 'catering'
            ? cateringType === 'chicken'
                ? cateringChickenPackages
                : cateringMuttonPackages
            : supplyType === 'supplyOnly'
                ? supplyOnlyPackages
                : supplyServicePackages;

    return (
        <section className="py-24 bg-white font-sans">

            <div className="container mx-auto px-4 max-w-7xl">

                {/* HEADER */}
                <div className="max-w-4xl mx-auto text-center mb-16">

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Pricing & Plans
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black text-[#06065a] mb-6 tracking-tight">
                        Flexible plans for <br />
                        <span className="text-blue-600">Every Occasion.</span>
                    </h2>

                    {/* MAIN TOGGLE */}
                    <div className="inline-flex bg-slate-100 p-1.5 rounded-4xl border border-slate-200 mt-8">

                        <button
                            onClick={() => setView('catering')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all duration-500 ${view === 'catering'
                                    ? 'bg-[#06065a] text-white shadow-xl'
                                    : 'text-slate-400 hover:text-[#06065a]'
                                }`}
                        >
                            <Utensils size={14} />
                            Catering
                        </button>

                        <button
                            onClick={() => setView('supplies')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all duration-500 ${view === 'supplies'
                                    ? 'bg-[#06065a] text-white shadow-xl'
                                    : 'text-slate-400 hover:text-[#06065a]'
                                }`}
                        >
                            <Package size={14} />
                            Supplies
                        </button>

                    </div>

                    {/* CATERING TYPE TOGGLE */}
                    {view === 'catering' && (
                        <div className="flex justify-center mt-6">

                            <div className="inline-flex bg-slate-100 p-1 rounded-3xl border border-slate-200">

                                <button
                                    onClick={() => setCateringType('chicken')}
                                    className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${cateringType === 'chicken'
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-slate-500'
                                        }`}
                                >
                                    Chicken Biriyani
                                </button>

                                <button
                                    onClick={() => setCateringType('mutton')}
                                    className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${cateringType === 'mutton'
                                            ? 'bg-[#06065a] text-white shadow-lg'
                                            : 'text-slate-500'
                                        }`}
                                >
                                    Mutton Biriyani
                                </button>

                            </div>

                        </div>
                    )}

                    {/* SUPPLY TYPE TOGGLE */}
                    {view === 'supplies' && (
                        <div className="flex justify-center mt-6">

                            <div className="inline-flex bg-slate-100 p-1 rounded-3xl border border-slate-200">

                                <button
                                    onClick={() => setSupplyType('supplyOnly')}
                                    className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${supplyType === 'supplyOnly'
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-slate-500'
                                        }`}
                                >
                                    Supply Only
                                </button>

                                <button
                                    onClick={() => setSupplyType('supplyService')}
                                    className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${supplyType === 'supplyService'
                                            ? 'bg-[#06065a] text-white shadow-lg'
                                            : 'text-slate-500'
                                        }`}
                                >
                                    Supply + Service
                                </button>

                            </div>

                        </div>
                    )}

                </div>

                {/* PRICING GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >

                    <AnimatePresence mode="wait">

                        {selectedPackages.map((pkg, index) => (

                            <motion.div
                                key={`${view}-${cateringType}-${supplyType}-${index}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -12 }}
                                className="group relative bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col justify-between"
                            >

                                <div className="relative z-10">

                                    <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-600 mb-6">
                                        {pkg.name}
                                    </h3>

                                    <div className="flex items-baseline mb-8">

                                        <span className="text-5xl font-black tracking-tighter text-[#06065a]">
                                            ₹{pkg.price}
                                        </span>

                                    </div>

                                    {/* FEATURES */}
                                    <div className="space-y-4 mb-10">

                                        {pkg.features.map((item, i) => (

                                            <div key={i} className="flex items-start gap-3">

                                                <div className="mt-1">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                                                </div>

                                                <span className="text-sm font-semibold text-slate-600 leading-tight">
                                                    {item}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                <div className="space-y-4">

                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-400 mb-2">

                                        <ShieldCheck
                                            size={14}
                                            className="text-green-500"
                                        />

                                        Verified Premium Quality

                                    </div>

                                    <button
                                        onClick={() => handleConsult(pkg)}
                                        className="w-full py-4 bg-[#06065a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                                    >

                                        SELECT & CONSULT

                                        <ArrowRight size={14} />

                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </AnimatePresence>

                </motion.div>

            </div>

        </section>
    );
};

export default CateringSupplies;