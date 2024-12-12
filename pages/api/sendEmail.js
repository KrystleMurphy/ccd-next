export default async function handler(req, res) {
  const { captchaToken } = req.body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  try {
      const response = await fetch(verificationUrl, { method: "POST" });
      const data = await response.json();

      if (data.success && data.score >= 0.5) {
          // Process the form data
          return res.status(200).json({ success: true });
      } else {
          return res.status(400).json({ success: false, error: "Captcha verification failed" });
      }
  } catch (error) {
      console.error("Error verifying captcha:", error);
      return res.status(500).json({ success: false, error: "Internal server error" });
  }
}
