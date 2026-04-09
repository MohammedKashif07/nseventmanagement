import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 text-center bg-blue-900 text-white">
                <h1 className="text-5xl font-extrabold mb-4">NS Event Management</h1>
                <p className="text-xl italic opacity-90">"Your event, our responsibility"</p>
                <button className="mt-8 px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition">
                    Book Your Event
                </button>
            </section>

            {/* Brief Intro */}
            <section className="max-w-4xl mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-gray-600 leading-relaxed">
                    From corporate galas to intimate weddings, we handle every detail so you can focus
                    on enjoying the moment. Our expert team ensures seamless execution from start to finish.
                </p>
            </section>
        </div>
    );
};

export default Home;