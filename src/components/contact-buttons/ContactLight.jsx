import Link from 'next/link';

export default function ContactLight() {
  return (
    <Link 
      href="/contact" 
      className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue"
    >
      Contact <span aria-hidden="true">→</span>
    </Link>
  );
}
