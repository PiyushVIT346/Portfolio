const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Configure nodemailer
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "piyushsingh50105@gmail.com", // Replace with your Gmail address
        pass: "p1i2y3u4s5h6", // Replace with your Gmail app password
    },
});

// Verify email transporter
contactEmail.verify((error) => {
    if (error) {
        console.log("Error verifying email transporter:", error);
    } else {
        console.log("Ready to send emails");
    }
});

// Contact route
router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;

    const mail = {
        from: `${firstName} ${lastName} <${email}>`,
        to: "piyushsingh50105@gmail.com", // Replace with the recipient's email
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ code: 500, status: "Error sending message" });
        } else {
            res.status(200).json({ code: 200, status: "Message Sent" });
        }
    });
});
