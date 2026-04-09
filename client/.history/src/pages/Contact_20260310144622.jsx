import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guestCount: '',
        eventType: 'Wedding',
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
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                alert('Thank you! Your inquiry has been sent to NS Event Management.');
                setFormData({
                    name: '', email: '', phone: '',
                    guestCount: '100-300', eventType: 'Wedding', message: ''
                });
            } else {
                alert('Server Error: ' + data.message);
            }
        } catch (err) {
            alert('Failed to connect to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Side: Contact Information */}
                <div className="space-y-8 pr-0 md:pr-10">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900 mb-4 tracking-tight">Get in Touch</h2>
                        <p className="text-gray-600 text-lg">
                            Have an upcoming event? Let’s discuss how we can make it extraordinary.
                        </p>
                        <p className="text-blue-700 font-semibold mt-2 italic">"Your event, our responsibility."</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-blue-50 text-blue-900 rounded-full group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Call Us</p>
                                <p className="text-gray-800 font-bold">+91 86672 81229</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-blue-50 text-blue-900 rounded-full group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Email Us</p>
                                <p className="text-gray-800 font-bold">nsservices.suppor@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="p-3 bg-blue-50 text-blue-900 rounded-full group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                                <p className="text-gray-800 font-bold leading-tight">
                                    Anna Salai Katyawadi, Ranipet, Tamilnadu - 632509
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    placeholder="Enter your name"
                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    placeholder="10-digit number"
                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                                    maxLength="10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                placeholder="example@gmail.com"
                                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Event Type</label>
                                <select
                                    value={formData.eventType}
                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                >
                                    <option>Wedding</option>
                                    <option>Corporate</option>
                                    <option>Social Party</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Guests</label>
                                <select
                                    value={formData.guestCount}
                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                                >
                                    <option>100-300</option>
                                    <option>300-500</option>
                                    <option>500-700</option>
                                    <option>700-900</option>
                                    <option>900-1200</option>
                                    <option>1200-1500</option>
                                    <option>1500-2000</option>
                                    <option>2000-2500</option>
                                    <option>2500 and above</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                            <textarea
                                rows="4"
                                value={formData.message}
                                placeholder="How can we help you plan your event?"
                                className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg transition-all transform active:scale-95 ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-blue-900/20'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Inquiry</span>
                                    <Send size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;