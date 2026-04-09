import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="NS Services"
                        className="w-8 h-8 rounded-full"
                    />
                    <h1 className="text-2xl font-bold tracking-wide">NS Services</h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-lg font-medium">
                    <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
                    <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
                    <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
                    <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col gap-3 text-lg font-medium">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Home</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Products</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Contact</Link>
                </div>
            )}
        </header>
    );
}
