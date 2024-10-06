export const revalidate = 60;

import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us - CC Diagnostics",
  description:
    "Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly.",
  keywords: ["contact", "CC Diagnostics", "customer support", "inquiries", "contact form"],
  openGraph: {
    title: "Contact Us - CC Diagnostics",
    description:
      "Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly.",
    url: "https://ccdiagnostics.netlify.app/contact",
    images: [
      {
        url: "https://ccdiagnostics.netlify.app/assets/teamPhoto.jpg", // Ensure the image path is correct
        width: 1200,
        height: 630,
        alt: "CC Diagnostics Team Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - CC Diagnostics",
    description:
      "Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly.",
    images: [
      {
        url: "https://ccdiagnostics.netlify.app/assets/teamPhoto.jpg",
        alt: "CC Diagnostics Team Photo",
      },
    ],
  },
};

export default async function Page() {
  return (
    <>
    <ContactForm />
   </>
  );
}
