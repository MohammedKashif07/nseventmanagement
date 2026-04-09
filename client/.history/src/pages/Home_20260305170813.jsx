import React from 'react';
import Navbar from '../components/layout/Navbar';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import { ChevronDown } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section id="home" className="relative h-screen flex items-center justify-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-light">
                        NS Event Management
                    </h1>
                    <p className="text-xl md:text-2xl italic font-light mb-10 text-blue-100">
                        "Your Event, Our Responsibility"
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition shadow-xl">
                            Book Your Event
                        </a>
                        <a href="#services" className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/10 transition">
                            Our Services
                        </a>
                    </div>
                </div>

                <a href="#services" className="absolute bottom-10 animate-bounce">
                    <ChevronDown size={32} />
                </a>

                <a
                    href="https://wa.me/918667281229"
                    target="_blank"
                    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8" alt="WhatsApp" />
                </a>
            </section>

            {/* --- SERVICES SECTION --- */}
            <section id="services">
                <Services />
            </section>

            {/* --- ABOUT SECTION --- */}
            <section id="gallery">
                <Gallery />
            </section>

            {/* --- CONTACT SECTION --- */}
            <section id="contact">
                <Contact />
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-gray-950 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4">NS Events</h3>
                        <p className="text-gray-400 text-sm">Providing premium supply and event management services across Tamil Nadu.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <p className="text-gray-400 text-sm">nsservices.support@gmail.com</p>
                        <p className="text-gray-400 text-sm">+91 86672 81229</p>
                    </div>
                </div>
                <div className="border-t border-white/5 mt-10 pt-6 text-center text-gray-500 text-xs">
                    © 2026 NS Event Management. Built for Excellence.
                </div>
            </footer>
        </div>
    );
};

export default Home;