import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guestCount: '100-300',
        eventType: 'Wedding',
        message: ''
    });

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (formData.name.trim().length < 3) return alert("Please enter a valid name.");
        if (!emailRegex.test(formData.email)) return alert("Please enter a valid email.");
        if (!phoneRegex.test(formData.phone)) return alert("Please enter valid phone.");
        if (formData.message.trim().length < 10) return alert("Please add more details.");

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        setTimeout(() => {
            setShowSuccess(true);
            setFormData({
                name: '', email: '', phone: '',
                guestCount: '100-300', eventType: 'Wedding', message: ''
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                {/* LEFT */}
                <div>
                    <h2 className="text-5xl font-black text-[#06065a] mb-6">
                        Plan your <span className="text-blue-600 italic">Legacy.</span>
                    </h2>

                    <div className="space-y-8 bg-white p-10 rounded-3xl shadow-xl">

                        <div className="flex gap-4">
                            <Phone />
                            <p className="text-[#06065a] font-bold">+91 86672 81229</p>
                        </div>

                        <div className="flex gap-4">
                            <Mail />
                            <p className="text-[#06065a] font-bold">nsservices.suppor@gmail.com</p>
                        </div>

                        <div className="flex gap-4">
                            <MapPin />
                            <p className="text-[#06065a] font-bold">
                                Ranipet, Tamilnadu
                            </p>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="bg-white p-10 rounded-3xl shadow-xl">
                    <h3 className="text-3xl font-black text-[#06065a] mb-6 text-center">
                        Request a Quote
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-4 border rounded-xl"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 border rounded-xl"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-4 border rounded-xl"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />

                        <textarea
                            placeholder="Event details..."
                            className="w-full p-4 border rounded-xl"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#06065a] text-white rounded-xl font-bold"
                        >
                            {isSubmitting ? "Sending..." : "Send Inquiry"}
                        </button>
                    </form>
                </div>
            </div>

            {/* SUCCESS MODAL */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 flex items-center justify-center">

                        <div className="absolute inset-0 bg-[#06065a]/60" />

                        <div className="bg-white p-10 rounded-3xl text-center z-10">
                            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={40} />

                            <h3 className="text-2xl font-bold text-[#06065a]">
                                Request Received!
                            </h3>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="mt-5 px-6 py-3 bg-[#06065a] text-white rounded-xl"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Contact;