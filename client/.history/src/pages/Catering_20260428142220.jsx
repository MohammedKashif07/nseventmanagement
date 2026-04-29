import React from 'react';
import { cateringPackages } from '../data/cateringData';

const Catering = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Catering Packages</h2>
                <div className="grid md:grid-grid-cols-3 gap-6">
                    {cateringPackages.map((pkg, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                            <ul className="mb-6 space-y-2">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600 flex items-center">
                                        <span className="mr-2 text-green-500">✔</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                                Inquire Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catering;