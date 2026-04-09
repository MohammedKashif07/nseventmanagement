export default function WhatsAppButton() {
    const phoneNumber = "91XXXXXXXXXX"; // 👉 replace with your WhatsApp number
    const message = "Hi, I am interested in your products!";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        >
            {/* WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
            >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 .04C5.37.04.04 5.37.04 12c0 2.11.55 4.17 1.6 6L.06 24l6.09-1.58A11.92 11.92 0 0 0 12 24c6.63 0 11.96-5.33 11.96-11.96 0-3.2-1.25-6.21-3.44-8.56zm-8.52 18.1c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.61.94.97-3.52-.24-.37A9.92 9.92 0 0 1 2.08 12C2.08 6.49 6.49 2.08 12 2.08c2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.51-4.41 9.92-9.9 9.92zm5.38-7.45c-.3-.15-1.77-.88-2.05-.97-.27-.1-.46-.15-.65.15s-.75.97-.93 1.17c-.17.2-.34.22-.63.07s-1.24-.46-2.36-1.47a8.75 8.75 0 0 1-1.62-2.01c-.17-.3 0-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.16-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.49 1.08 2.89 1.23 3.09c.15.2 2.13 3.25 5.16 4.56.72.31 1.29.49 1.73.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.1-.27-.17-.56-.32z" />
            </svg>
        </a>
    );
}
