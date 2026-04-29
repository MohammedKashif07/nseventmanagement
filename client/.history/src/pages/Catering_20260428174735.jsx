import React, { useState } from 'react';
import { cateringPackages, supplyPackages } from '../data/packagesData';

const PricingSection = () => {
    const [view, setView] = useState('catering'); // 'catering' or 'supplies'

    return (
        <section className="py-20 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header & Toggle */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-6">Our Offerings</h2>

                    {/* Netlify-style Toggle Switch */}
                    <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-8">
                        <button
                            onClick={() => setView('catering')}
                            className={`px-6 py-2 rounded-lg font-bold transition-all ${view === 'catering' ? 'bg-white shadow-md text-black' : 'text-gray-500'}`}
                        >
                            Catering Packages
                        </button>
                        <button
                            onClick={() => setView('supplies')}
                            className={`px-6 py-2 rounded-lg font-bold transition-all ${view === 'supplies' ? 'bg-white shadow-md text-black' : 'text-gray-500'}`}
                        >
                            Bulk Supplies
                        </button>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {(view === 'catering' ? cateringPackages : supplyPackages).map((pkg, index) => (
                        <div key={index} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-all">
                            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-2">{pkg.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-black">₹{pkg.price}</span>
                                <span className="text-gray-500 text-sm ml-1">{view === 'catering' ? '/ plate' : '/ unit'}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                        <span className="mr-3 text-black">→</span> {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full border-2 border-black py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all">
                                {view === 'catering' ? 'Book Service' : 'Order Bulk'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;