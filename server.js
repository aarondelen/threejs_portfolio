import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { ContactEmail } from "./emails/ContactEmail.js";

dotenv.config();

const app = express();
app.use(cors());    
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send", async (req, res) => {
  console.log("📩 Incoming request:", req.body);
    const { from_name, from_email, message } = req.body;

  try {
    const html = ContactEmail({
      fromName: from_name,
      fromEmail: from_email,
      message,
    });

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.RESEND_TO || "you@example.com",
      subject: `New message from ${from_name}`,
      html,
      // bcc: "you+archive@example.com", // optional
    });

    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
