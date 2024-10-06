import nodemailer from 'nodemailer';

// API route to handle form submissions and send email via SMTP
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { formData, captchaValue } = req.body;

      // 1. Validate reCAPTCHA on the server
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${captchaValue}`,
      { method: 'POST' }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ error: 'Failed reCAPTCHA validation' });
    }

        // 2. Setup NodeMailer with your SMTP server credentials
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: false,
          auth: {
            user: process.env.SMTP_USER, // Your SMTP username
            pass: process.env.SMTP_PASSWORD // Your SMTP password
          }
        });

        // 3. Email options
    const mailOptions = {
      from: `"${formData.from_name}" <${formData.from_email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Who will receive this email (you)
      subject: `Contact Form: ${formData.from_question}`,
      text: `
        Name: ${formData.from_name} ${formData.from_lastname}
        Email: ${formData.from_email}
        Company: ${formData.from_company}
        Message: ${formData.message}
        Phone: ${formData.from_phone || 'N/A'}
      `,
    };

    // 4. Try sending the email
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Only allow POST requests
    return res.status(405).json({ error: 'Method not allowed' });
  }
}