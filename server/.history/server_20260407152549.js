// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// 2. Create Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    guestCount: String,
    eventType: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// 3. Notification Function (Telegram Example)
const sendNotification = async (data) => {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const text = `🚀 *New Inquiry Received!*\n\n👤 *Name:* ${data.name}\n📞 *Phone:* ${data.phone}\n📧 *Email:* ${data.email}\n🎈 *Event:* ${data.eventType}\n👥 *Guests:* ${data.guestCount}\n📝 *Message:* ${data.message}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' })
    });
};

// 4. API Route
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save(); // Save to DB

        await sendNotification(req.body); // Send Notification to your phone

        res.status(200).json({ success: true, message: "Data saved and notified!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));