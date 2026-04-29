import React, { useState } from 'react';
import { cateringPackages, supplyPackages } from '../data/packagesData';

const CateringSupplies = () => {
    const [view, setView] = useState('catering');

    return (
        <section className="py-24 bg-[#fcfcfc] text-[#1a1a1a]">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">
                            Premium <span className="text-gray-400">Plans</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-black mb-6"></div>
                        <p className="text-lg text-gray-500 font-medium">
                            Tailored culinary services and bulk event essentials for Visharam’s finest gatherings.
                        </p>
                    </div>

                    {/* Attractive Minimalist Toggle */}
                    <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200">
                        <button
                            onClick={() => setView('catering')}
                            className={`px-8 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 ${view === 'catering' ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
                        >
                            Catering
                        </button>
                        <button
                            onClick={() => setView('supplies')}
                            className={`px-8 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 ${view === 'supplies' ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
                        >
                            Supplies
                        </button>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(view === 'catering' ? cateringPackages : supplyPackages).map((pkg, index) => (
                        <div key={index}
                            className="group relative bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Subtle Background Pattern */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10">
                                <h3 className="text-xs font-black tracking-[0.2em] uppercase text-gray-400 mb-6">{pkg.name}</h3>
                                <div className="flex items-baseline mb-8">
                                    <span className="text-5xl font-black tracking-tighter">₹{pkg.price}</span>
                                    <span className="text-gray-400 font-bold text-sm ml-2">
                                        {view === 'catering' ? '/plate' : '/unit'}
                                    </span>
                                </div>

                                <div className="space-y-5 mb-10">
                                    {pkg.features.map((item, i) => (
                                        <div key={i} className="flex items-center group/item">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full mr-4 group-hover/item:w-4 transition-all duration-300"></div>
                                            <span className="text-sm font-medium text-gray-600 group-hover/item:text-black transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="relative z-10 w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-800 shadow-lg active:scale-95 transition-all">
                                Request Quote
                            </button>
                        </div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-20 text-center">
                    <p className="text-sm font-bold text-gray-300 uppercase tracking-[0.3em]">
                        NS Event Management • Quality First • Visharam 632509
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CateringSupplies;