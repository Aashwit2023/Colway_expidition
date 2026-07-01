import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
try {
    await transporter.verify();
    console.log("SMTP server is ready to send your emails.");
} catch (error) {
    console.error("SMTP verification failed: ", error)
};

export { transporter };
