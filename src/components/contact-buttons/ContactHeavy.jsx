import Link from 'next/link';

export default function ContactHeavy() {
  return (
    <Link 
      href="/contact" 
      className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
    >
      Contact
    </Link>
  );
}
