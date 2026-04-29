import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import React, { useState, useEffect } from 'react';


const ProductCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Hydration', 'Dining', 'Essentials', 'Packaging'];

    const filteredProducts = products.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* --- BREADCRUMB & BACK --- */}
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Services
                </Link>

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black text-[#06065a] tracking-tighter uppercase italic">
                            Supply <span className="text-blue-600 not-italic font-light">Catalog</span>
                        </h1>
                        <p className="text-slate-500 mt-4 max-w-md font-medium">
                            Browse our full range of premium event essentials and professional packaging solutions.
                        </p>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* --- FILTER CHIPS --- */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                ? 'bg-[#06065a] text-white shadow-lg'
                                : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-[#06065a]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- PRODUCT GRID --- */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((item) => (
                            <motion.div
                                layout
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-4xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-square overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-[8px] font-black uppercase tracking-widest text-blue-600 rounded-full shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-[#06065a] text-lg mb-2 truncate">{item.title}</h4>
                                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                        <ShieldCheck size={12} className="text-green-500" />
                                        Verified Quality
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* --- EMPTY STATE --- */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400 font-medium">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCatalog;