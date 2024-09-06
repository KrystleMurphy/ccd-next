// components/ContactForm.jsx
import React, { useRef, useState } from "react";
import Head from 'next/head'; // Import Next.js Head component for SEO
import Image from 'next/image'; // Import Next.js Image component
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isEmpty, setEmpty] = useState(false);
  const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleClick = () => {
    if (!captchaValue) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      console.log("Please complete captcha");
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, userID, {
        "g-recaptcha-response": captchaValue,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>Contact Us - CC Diagnostics</title>
        <meta
          name="description"
          content="Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly."
        />
        <meta
          name="keywords"
          content="contact, CC Diagnostics, customer support, inquiries, contact form"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - CC Diagnostics" />
        <meta
          property="og:description"
          content="Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly."
        />
        <meta property="og:url" content="https://www.cc-diagnostics.netlify.app/contact" />
        <meta
          property="og:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - CC Diagnostics" />
        <meta
          name="twitter:description"
          content="Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly."
        />
        <meta
          name="twitter:image"
          content="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png"
        />
        <link rel="canonical" href="https://www.cc-diagnostics.netlify.app/contact" />
      </Head>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            src="/images/teamPhoto.jpg" // Path should point to the public folder
            alt="team photo"
            layout="fill" // Use layout fill to cover the image area
            objectFit="cover"
            className="h-64 w-full bg-gray-50 object-contain sm:h-80 lg:absolute lg:h-full"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue py-6">
                Get in Touch
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* Form inputs as previously written */}
                </div>
                <ReCAPTCHA
                  sitekey={recaptchaKey}
                  onChange={handleCaptchaChange}
                  className="my-6"
                />
                {isEmpty && (
                  <p className="block px-3.5 py-2 text-sm font-medium leading-6 text-red-600">
                    *Please complete Captcha
                  </p>
                )}
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    required
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 underline"
                  >
                    I agree to the Privacy Policy
                  </label>
                  {/* Use a direct link to the PDF file in the public folder */}
                  <a href="/PrivacyPolicy.pdf" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ms-2 text-red-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                    onClick={handleClick}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
