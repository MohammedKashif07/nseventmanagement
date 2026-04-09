const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- 1. CONNECT TO MONGODB ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// --- 2. CREATE A DATABASE SCHEMA (Model) ---
const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    guestCount: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } // Automatically saves the date and time
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// --- 3. CONFIGURE EMAIL TRANSPORTER ---
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// --- 4. HANDLE THE CONTACT ROUTE ---
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, guestCount, eventType, message } = req.body;

    try {
        // Step A: Save the data to MongoDB
        const newInquiry = new Inquiry({
            name, email, phone, guestCount, eventType, message
        });
        await newInquiry.save();
        console.log('New inquiry saved to database.');

        // Step B: Send the Email Notification to you
        const mailOptions = {
            from: process.env.EMAIL_USER, // Must be your authenticated email
            replyTo: email,               // Allows you to reply directly to the client
            to: process.env.RECEIVER_EMAIL,
            subject: `New Event Inquiry: ${eventType} from ${name}`,
            text: `
          You have received a new inquiry!
          
          Full Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Event Type: ${eventType}
          Estimated Guests: ${guestCount}
          
          Message:
          ${message}
        `,
        };

        await transporter.sendMail(mailOptions);

        // Step C: Send success response back to React
        res.status(200).json({ success: true, message: 'Inquiry saved and email sent!' });

    } catch (error) {
        console.error('Error processing inquiry:', error);
        res.status(500).json({ success: false, message: 'Failed to process inquiry.' });
    }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));