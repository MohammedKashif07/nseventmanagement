import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Heart, Briefcase, PartyPopper, Mic2,
    Sparkles, ShieldCheck, Zap, ArrowRight, ChevronDown
} from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

// --- COUNT UP COMPONENT (PREMIUM) ---
const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / (duration * 1000), 1);

            // easeOutCubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * end);

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

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
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">

            {/* HERO */}
            <section className="pt-28 pb-16 px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-[#06065a] mb-6">
                    Everything you need for a <br />
                    <span className="text-blue-600">Perfect Event.</span>
                </h2>
            </section>

            {/* EVENTS */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    {mainEvents.map((event, index) => (
                        <motion.div key={index} whileHover={{ y: -10 }}>
                            <ServiceCard {...event} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex justify-between mb-10">
                        <h3 className="text-3xl font-bold text-blue-600">Supply Showcase</h3>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-[#06065a] text-white rounded-xl"
                        >
                            Request Quote
                        </motion.a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {displayedProducts.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow hover:shadow-xl overflow-hidden">
                                <img src={item.img} className="w-full h-60 object-cover" />
                                <div className="p-5">
                                    <h4 className="text-[#06065a] font-bold text-lg">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button onClick={() => setShowAllProducts(!showAllProducts)}>
                            {showAllProducts ? 'View Less' : 'View More'}
                        </button>
                    </div>

                </div>
            </section>

            {/* PREMIUM STATS */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto">

                    <div className="bg-[#06065a] rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 text-center gap-10">

                        <div>
                            <Sparkles className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">
                                <CountUp end={ } suffix="+" />
                            </h5>
                            <p className="text-gray-300 text-sm">Events Managed</p>
                        </div>

                        <div>
                            <Heart className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">
                                <CountUp end={100} suffix="%" />
                            </h5>
                            <p className="text-gray-300 text-sm">Happy Clients</p>
                        </div>

                        <div>
                            <ShieldCheck className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">∞</h5>
                            <p className="text-gray-300 text-sm">Quality Checks</p>
                        </div>

                        <div>
                            <Zap className="text-white mx-auto mb-3" />
                            <h5 className="text-4xl text-white font-bold">On Time</h5>
                            <p className="text-gray-300 text-sm">Avg Delivery</p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Services;