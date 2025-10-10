import { Resend } from "resend";
import { ContactEmail } from "../src/emails/ContactEmail.js";


const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { from_name, from_email, message } = req.body;
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
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
