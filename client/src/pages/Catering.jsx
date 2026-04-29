import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Utensils, Package } from 'lucide-react';
import { cateringPackages, supplyPackages } from '../data/packagesData';

const CateringSupplies = () => {
    const [view, setView] = useState('catering');

    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* HEADER SECTION - Matches your Services Hero style */}
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

                    {/* TOGGLE - High-end Navy & White Design */}
                    <div className="inline-flex bg-slate-100 p-1.5 rounded-4xl border border-slate-200 mt-8">
                        <button
                            onClick={() => setView('catering')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all duration-500 ${view === 'catering' ? 'bg-[#06065a] text-white shadow-xl' : 'text-slate-400 hover:text-[#06065a]'}`}
                        >
                            <Utensils size={14} /> Catering
                        </button>
                        <button
                            onClick={() => setView('supplies')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all duration-500 ${view === 'supplies' ? 'bg-[#06065a] text-white shadow-xl' : 'text-slate-400 hover:text-[#06065a]'}`}
                        >
                            <Package size={14} /> Supplies
                        </button>
                    </div>
                </div>

                {/* PRICING GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {(view === 'catering' ? cateringPackages : supplyPackages).map((pkg, index) => (
                            <motion.div
                                key={`${view}-${index}`}
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
                                        <span className="text-5xl font-black tracking-tighter text-[#06065a]">₹{pkg.price}</span>
                                    </div>

                                    {/* FEATURE LIST */}
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
                                        <ShieldCheck size={14} className="text-green-500" />
                                        Verified Premium Quality
                                    </div>
                                    <button className="w-full py-4 bg-[#06065a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                                        Request Quote <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* TRUST FOOTER - Matches your Stats Section look */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
                >
                    <div>
                        <h4 className="text-[#06065a] font-black uppercase tracking-tight text-xl">Need a custom plan?</h4>
                        <p className="text-slate-500 text-sm font-medium">We create tailored packages for large scale events above 1000+ members.</p>
                    </div>
                    <button className="px-10 py-4 bg-white border-2 border-slate-200 text-[#06065a] rounded-2xl text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                        Contact Support
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CateringSupplies;