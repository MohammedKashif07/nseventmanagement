import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">NS Services</h1>
            <nav className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/products" className="hover:underline">Products</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
        </header>
    );
}
