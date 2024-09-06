// components/Pipeline.jsx
import Link from 'next/link'; // Use Next.js Link component for internal navigation

export default function Pipeline() {
  return (
    <div id="pipeline" className="bg-ccAliceBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Future Pipeline
          </h2>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            CC-Diagnostics is dedicated to expanding our potential and impact on
            improving cancer diagnostics. We are actively pursuing further
            development and advancing our product portfolio.
          </p>
          {/* Refactored Link component without <a> inside */}
          <Link href="/about" className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue">
            About <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
