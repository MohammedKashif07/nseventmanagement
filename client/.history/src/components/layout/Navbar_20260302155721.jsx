import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className="text-2xl font-bold text-blue-900">NS Events</div>
            <div className="space-x-8 font-medium">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/services" className="hover:text-blue-500">Services</Link>
                <Link to="/about" className="hover:text-blue-500">About</Link>
                <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;