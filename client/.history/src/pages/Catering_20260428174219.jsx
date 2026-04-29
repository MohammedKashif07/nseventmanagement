import React from 'react';
import { cateringPackages } from '../data/cateringData';

const Catering = () => {
    return (
        <section className="py-20 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">Catering Packages</h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-6"></div> {/* Minimalist underline */}
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Premium culinary experiences tailored for your special occasions in Visharam and across Tamil Nadu.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {cateringPackages.map((pkg, index) => (
                        <div key={index} className="relative group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                            {/* Visual Indicator for "Most Popular" or Premium tier */}
                            {index === 1 && (
                                <span className="absolute top-0 right-8 -translate-y-1/2 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-black">₹{pkg.price || '0'}</span>
                                    <span className="text-gray-400 text-sm ml-1">/ plate</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8 mb-8">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Inclusions</p>
                                <ul className="space-y-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full border-2 border-black text-black font-bold py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catering;