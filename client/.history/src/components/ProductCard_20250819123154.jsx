export default function ProductCard({ product }) {
    const whatsappMsg = `https://wa.me/91XXXXXXXXXX?text=Hi, I want to order ${product.name}`;

    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.name}
                className="h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            {product.price && <p className="text-gray-700">₹{product.price}</p>}
            <a
                href={whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-green-600 text-white py-1 px-3 rounded-lg text-center hover:bg-green-700"
            >
                Order on WhatsApp
            </a>
        </div>
    );
}
