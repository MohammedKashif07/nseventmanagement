import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    ShieldCheck, ArrowRight, ChevronDown
} from 'lucide-react';

const Services = () => {
    const [showAllProducts, setShowAllProducts] = useState(false);

    const mainEvents = [
        { icon: Heart, title: "Weddings", description: "Comprehensive management for ceremonies." },
        { icon: Briefcase, title: "Corporate Events", description: "Professional seminars and launches." },
        { icon: PartyPopper, title: "Social Gatherings", description: "Birthdays and private parties." },
        { icon: Mic2, title: "Concerts & Shows", description: "Stage and live event production." }
    ];

    const products = [
        { title: "Water Bottle Gold", img: "/images/300mlAquaGold.jpg" },
        { title: "Water Bottle Green", img: "/images/300mlAquaGreen.jpg" },
        { title: "Dining Roll", img: "/images/DiningRoll.jpg" },
        { title: "Sweet Cup Gold", img: "/images/SweetCupGold.jpg" },
        { title: "Tea Cup", img: "/images/110mlTeaCup.jpg" },
        { title: "Tissue", img: "/images/Tissue.jpg" },
        { title: "Zarda Box Black", img: "/images/50mlZardaBoxBlack.jpg" },
        { title: "Zarda Box White", img: "/images/50mlZardaBoxWhite.jpg" },
        { title: "Container 500ml", img: "/images/Container500mlblack.jpg" },
        { title: "Container 2500ml", img: "/images/Container2500mlwhite.jpg" },
        { title: "Plate Big", img: "/images/PremiumPlateBig.jpg" },
        { title: "Plate Small", img: "/images/PremiumPlateSmall.jpg" },
    ];

    const displayedProducts = showAllProducts ? products : products.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">

            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedProducts.map((item, idx) => (
                            <motion.div key={idx} className="bg-white rounded-xl overflow-hidden shadow">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="font-bold">{item.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <ShieldCheck size={14} />
                                        Quality Product
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAllProducts(!showAllProducts)}
                        className="px-6 py-3 border rounded-lg"
                    >
                        {showAllProducts ? "View Less" : "View All"}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;