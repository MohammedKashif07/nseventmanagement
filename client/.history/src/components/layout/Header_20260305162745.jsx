import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ This works after installation

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-2xl mx-auto px-2 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    NS
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
