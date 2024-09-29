'use client';

import { useEffect, useRef, useState } from 'react';
import ContactLogic from './ContactRecaptcha';

export default function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
          callback: (token) => {
            setCaptchaToken(token);
          },
        });
      });
    } else {
      console.error('reCAPTCHA script not found. Please check your configuration.');
    }
  }, []);

  return (
    <>
      <div ref={recaptchaRef}></div>
      <ContactLogic />
      {/* <button type="submit">Submit</button> */}
    </>
  );
}
