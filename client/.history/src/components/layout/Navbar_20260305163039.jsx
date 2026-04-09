import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="text-2xl font-bold text-blue-900">NS</div>
            <div className="hidden md:flex space-x-8 font-medium">
                <a href="#hero" className="hover:text-blue-500 transition">Home</a>
                <a href="#services" className="hover:text-blue-500 transition">Services</a>
                <a href="#gallery" className="hover:text-blue-500 transition">Gallery</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-800">
                Book Now
            </a>
        </nav>
    );
};

export default Navbar;