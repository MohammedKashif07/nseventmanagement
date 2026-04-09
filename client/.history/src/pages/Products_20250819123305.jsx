import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const query = new URLSearchParams(useLocation().search);
    const category = query.get("category");

    const filtered = category
        ? products.filter((p) => p.category === category)
        : products;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            {filtered.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
