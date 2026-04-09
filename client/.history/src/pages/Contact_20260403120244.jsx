import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Default form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guestCount: '100-300', // Set default
        eventType: 'Wedding',  // Set default
        message: ''
    });

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (formData.name.trim().length < 3) {
            alert("Please enter a valid name.");
            return false;
        }
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!phoneRegex.test(formData.phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return false;
        }
        if (formData.message.trim().length < 10) {
            alert("Please tell us more about your event.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Simulated API Call (Replace with your actual endpoint)
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // If using a real backend, check response.ok or data.success here
            // const data = await response.json();
            // if (data.success) { ... }

            // SIMULATING SUCCESS FOR DEMO PURPOSES:
            setTimeout(() => {
                setShowSuccess(true); // Trigger the Popup
                setFormData({
                    name: '', email: '', phone: '',
                    guestCount: '100-300', eventType: 'Wedding', message: ''
                });
                setIsSubmitting(false);
            }, 1500);

        } catch (err) {
            alert('Failed to connect to the server. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-24 px-4 relative overflow-hidden">

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-indigo-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* --- LEFT SIDE: CONTACT INFO --- */}
                <div className="space-y-10">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
                        >
                            Let's Connect
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">
                            Plan your <br /><span className="text-blue-600 italic">Legacy.</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                            Whether it's a grand wedding or a corporate summit, our team is ready to supply excellence.
                        </p>
                    </div>

                    <div className="space-y-8 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                                <p className="text-slate-900 text-2xl font-bold">+91 86672 81229</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Desk</p>
                                <p className="text-slate-900 text-lg font-bold">nsservices.suppor@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                                <p className="text-slate-900 font-bold leading-relaxed max-w-62.5">
                                    Anna Salai Katyawadi,<br /> Ranipet, Tamilnadu - 632509
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: CONTACT FORM --- */}
                <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
                    <div className="mb-10 text-center">
                        <h3 className="text-3xl font-black text-slate-900 mb-2">Request a Quote</h3>
                        <p className="text-slate-500 text-sm font-medium">Fill out the details below and we will get back to you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    placeholder="e.g. Mohammed Kashif"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    placeholder="10-digit mobile"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                                    maxLength="10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                placeholder="name@company.com"
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Event Type</label>
                                <select
                                    value={formData.eventType}
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none font-medium cursor-pointer"
                                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                >
                                    <option>Wedding</option>
                                    <option>Corporate Seminar</option>
                                    <option>Social Party</option>
                                    <option>Concert / Stage</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Guest Count</label>
                                <select
                                    value={formData.guestCount}
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none font-medium cursor-pointer"
                                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                                >
                                    <option>100 - 300</option>
                                    <option>300 - 500</option>
                                    <option>500 - 1000</option>
                                    <option>1000 - 2500</option>
                                    <option>2500+</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Event Details</label>
                            <textarea
                                rows="4"
                                value={formData.message}
                                placeholder="Tell us about the location, date, and specific supplies you need..."
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-medium"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 shadow-xl transition-all ${isSubmitting
                                ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>Processing Request...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Inquiry</span>
                                    <Send size={18} />
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </div>

            {/* --- SUCCESS MODAL POPUP --- */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setShowSuccess(false)}
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-[3rem] p-10 md:p-16 max-w-md w-full text-center shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-xl shadow-green-500/20">
                                <CheckCircle2 size={40} className="text-green-500" />
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received!</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-8">
                                Greetings from NS Event Management! Thank you for reaching out. Our executive team is reviewing your details and will get back to you within <strong className="text-slate-900">24 hours</strong> with a customized quote.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowSuccess(false)}
                                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg hover:bg-blue-600 transition-colors"
                            >
                                Close Window
                            </motion.button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Contact;