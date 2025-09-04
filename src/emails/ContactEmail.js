// emails/contactTemplate.js
export function ContactEmail({ fromName, fromEmail, message }) {
  const safe = (s = "") =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
  return `
  <!doctype html>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width"/>
      <title>New message from ${safe(fromName)}</title>
    </head>
    <body style="font-family: Inter, Arial, sans-serif; background:#0b0b0b; color:#f5f5f5; padding:24px;">
      <table role="presentation" width="100%" style="max-width:600px; margin:0 auto; background:#111; border:1px solid #222; border-radius:12px; padding:24px;">
        <tr><td>
          <h1 style="margin:0 0 12px; font-size:20px;">New portfolio message</h1>
          <p style="margin:0 0 8px;">
            <strong>From:</strong> ${safe(fromName)} &lt;${safe(fromEmail)}&gt;
          </p>
          <hr style="border:none; border-top:1px solid #333; margin:16px 0;" />
          <p style="white-space:pre-wrap; line-height:1.6;">${safe(message)}</p>
        </td></tr>
      </table>
    </body>
  </html>
  `;
}
