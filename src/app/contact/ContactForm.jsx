'use client';

import { useRef, useState, useEffect } from 'react';
import teamPhoto from '../../assets/images/teamPhoto.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactLogic({ privacyPolicy }) {
    const form = useRef();
    const recaptchaRef = useRef(null);

    const [captchaValue, setCaptchaValue] = useState(null);
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Handle reCAPTCHA change
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setEmpty(false);
  };

   // Handle the form submission
   const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setEmpty(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const formDataObj = Object.fromEntries(formData.entries());

           // Send data to API route
           const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: formDataObj, captchaValue }),
          });
    
          const result = await response.json();
    
          if (result.success) {
            form.current.reset();
            setMessage("Thank you for contacting us. We will be in touch soon.");
          } else {
            throw new Error(result.error);
          }
        } catch (error) {
          console.error("Error sending email:", error);
          setMessage("Error: Could not send message, please try again.");
        } finally {
          setIsSubmitting(false);
        }
      };
    
  // Load and render reCAPTCHA when the component is mounted
  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
        window.grecaptcha.ready(() => {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
            callback: handleCaptchaChange,
          });
        });
      } else {
        console.error('reCAPTCHA script not found.');
      }
    };

    // Load reCAPTCHA with a delay to ensure the script is available
    const intervalId = setInterval(loadRecaptcha, 500);

    // Clean up interval if successful or component unmounts
    return () => clearInterval(intervalId);
  }, []);

return (
        <>
          <div className="relative bg-white">
            <div className="flex lg:absolute lg:inset-0 lg:left-1/2 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pt-32 items-center">
    
              <Image
      alt="Team photo"
      src={teamPhoto}
      className="h-64 w-full object-contain sm:h-80 lg:absolute lg:h-full"
      priority
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
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                        >
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="from_name"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="First Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                        >
                          Last name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="from_lastname"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="Last Name"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                        >
                          Email
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="from_email"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="Email"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                        >
                          Company
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="from_company"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="Company"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between text-sm leading-6">
                          <label
                            htmlFor="phone"
                            className="block font-semibold text-ccDarkBlue"
                          >
                            Phone
                          </label>
                          <p id="phone-description" className="text-gray-500">
                            Optional
                          </p>
                        </div>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="from_phone"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="w-full sm:col-span-2">
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium leading-6 text-ccDarkBlue"
                        >
                          How can we help you?
                        </label>
    
                        <select
                          name="from_question"
                          defaultValue="general"
                          required
                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-ccDarkBlue ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                          aria-label="enquiry"
                        >
                          <option aria-label="Product Support">Product Support</option>
                          <option aria-label="Purchasing Support">Purchasing Support</option>
                          <option aria-label="Complaint">Complaint</option>
                          <option aria-label="Other inquiry">Other inquiry</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between text-sm leading-6">
                          <p id="message-description" className="text-gray-500">
                            Max 500 characters
                          </p>
                        </div>
                        <div className="mt-2.5">
                          <textarea
                            name="message"
                            required
                            maxLength="500"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                            aria-label="Message"
                          />
                        </div>
                      </div>
                    </div>
                    {/* reCAPTCHA widget */}
                {recaptchaLoaded && <div className="my-6" ref={recaptchaRef}></div>}

{isEmpty && (
  <p className="block px-3.5 py-2 text-sm font-medium leading-6 text-red-600">
    *Please complete Captcha
  </p>
)}

{/* Message feedback */}
{message && (
  <p className={`block py-2 text-sm font-medium leading-6 text-red-600`}>
    {message}
  </p>
)}
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    required
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    aria-label="Agree to Privacy Policy"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    I agree to the{" "}
                    {privacyPolicy && (
                      <Link
                        href={privacyPolicy.fields.Document[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-ccLightBlue"
                      >
                        Privacy Policy
                      </Link>
                    )}
                      </label>
                      <br />
                    </div>
                    <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                      <button
                        type="submit"
                        className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                        disabled={isSubmitting || !recaptchaLoaded}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
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