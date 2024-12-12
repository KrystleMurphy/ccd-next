'use client';

import { useRef, useState, useEffect } from 'react';
import teamPhoto from '../../assets/images/teamPhoto.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactLogic({ privacyPolicy }) {
    const form = useRef();
    const [captchaToken, setCaptchaToken] = useState(null);
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle the form submission
    const sendEmail = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            setMessage("Captcha validation failed. Please try again.");
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
                body: JSON.stringify({ formData: formDataObj, captchaToken }),
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

    useEffect(() => {
        const loadRecaptcha = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'contact_form' })
                        .then((token) => {
                            setCaptchaToken(token);
                        })
                        .catch((error) => {
                            console.error("Error executing reCAPTCHA:", error);
                            setMessage("reCAPTCHA validation failed. Please try again.");
                        });
                });
            } else {
                console.error("reCAPTCHA script not found.");
                setMessage("Failed to load reCAPTCHA. Please try again.");
            }
        };

        // Load reCAPTCHA script
        if (!document.querySelector(`script[src="https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}"]`)) {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;
            script.async = true;
            script.defer = true;
            script.onload = loadRecaptcha;
            document.body.appendChild(script);
        } else {
            loadRecaptcha();
        }
    }, []);

    return (
        <>
            <div className="relative bg-white">
                <div className="flex justify-center lg:absolute lg:inset-0 lg:left-1/2 p-8 items-center">
                    <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden">
                        <Image
                            alt="Team photo"
                            src={teamPhoto}
                            className="w-full h-full object-cover rounded-3xl"
                            priority
                        />
                    </div>
                </div>
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                    <div className="px-6 lg:px-8">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ccDarkBlue py-6">
                                Get in Touch
                            </h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
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
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
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
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
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
                                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
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
                                            <label htmlFor="phone" className="block font-semibold text-ccDarkBlue">
                                                Phone
                                            </label>
                                            <p id="phone-description" className="text-gray-500">Optional</p>
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
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-ccDarkBlue">
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
                                {message && (
                                    <p className={`block py-2 text-sm font-medium leading-6 text-red-600`}>
                                        {message}
                                    </p>
                                )}
                                <div className="mt-10 flex justify-end border-t border-gray-900/10 p-8">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                                        disabled={isSubmitting}
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
