import React from 'react';
import Gallery from './Gallery';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="scroll-smooth">
            {/* 1. HERO SECTION */}
            <section id="hero" className="min-h-screen flex items-center justify-center bg-blue-900 text-white pt-20">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">NS Event Management</h1>
                    <p className="text-xl md:text-2xl italic opacity-90 mb-10">"Your event, our responsibility"</p>
                    <a href="#services" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition shadow-lg">
                        Explore Services
                    </a>
                </div>
            </section>

            {/* 2. SERVICES SECTION */}
            <section id="services">
                <Services />
            </section>

            {/* 3. ABOUT SECTION */}
            <section id="gallery">
                <Gallery />
            </section>

            {/* 4. CONTACT SECTION */}
            <section id="contact">
                <Contact />
            </section>

            {/* Simple Footer */}
            <footer className="bg-gray-900 text-white py-10 text-center">
                <p>© 2026 NS Event Management. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;