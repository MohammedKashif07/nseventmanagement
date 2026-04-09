// src/pages/Products.jsx
import React from "react";

const products = [
    {
        id: 1,
        name: "Mineral Water Bottle",
        price: "₹20",
        category: "Water Bottles",
        image: "https://via.placeholder.com/200x200?text=Water+Bottle",
    },
    {
        id: 2,
        name: "Coca Cola 1L",
        price: "₹60",
        category: "Soft Drinks",
        image: "https://via.placeholder.com/200x200?text=Soft+Drink",
    },
    {
        id: 3,
        name: "Disposable Cups (50pcs)",
        price: "₹120",
        category: "Disposable Items",
        image: "https://via.placeholder.com/200x200?text=Cups",
    },
    {
        id: 4,
        name: "Beeda Pack",
        price: "₹30",
        category: "Beeda",
        image: "https://via.placeholder.com/200x200?text=Beeda",
    },
];

export default function Products() {
    const handleOrder = (name) => {
        const message = `Hello, I want to order: ${name}`;
        window.open(
            `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition"
                    >
                        <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="text-gray-600 mb-2">{p.category}</p>
                        <p className="text-green-600 font-bold mb-4">{p.price}</p>
                        <button
                            onClick={() => handleOrder(p.name)}
                            className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
                        >
                            Order Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
            >
                💬
            </a>
        </div>
    );
}
