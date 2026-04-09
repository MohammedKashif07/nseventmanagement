import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, ArrowUpRight, Gift, Images, Film } from 'lucide-react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        { id: 1, type: 'image', src: '/images/MMESIL1.jpg', title: 'Premium Bottle Branding' },
        { id: 2, type: 'image', src: '/images/HMI1.jpg', title: 'Wedding Setup Excellence' },
        { id: 3, type: 'image', src: '/images/MMH3.jpg', title: 'Branded Essentials' },
        { id: 4, type: 'image', src: '/images/MMH2.jpg', title: 'Private Showcase' },
        { id: 5, type: 'image', src: '/images/MMH3.jpg', title: 'Event Logistics' },
        { id: 6, type: 'image', src: '/images/NWAP2.jpg', title: 'VIT Chancellor' },
        { id: 7, type: 'image', src: '/images/NWAP1.jpg', title: 'VIT Chancellor' },
    ];

    const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

    return (
        <div className="bg-white min-h-screen">
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div key={item.id} className="rounded-3xl overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default Gallery;