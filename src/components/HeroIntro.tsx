import { Check, Star } from "lucide-react";
import { assets } from "../data/assets";

/**
 * Welcome landing — mirrors M&M layout:
 * white header, full-bleed crash photo bg, white card overlay, yellow CTA,
 * "Why Choose DK Law?" section on white bg below.
 *
 * Social proof uses DK Law's actual numbers:
 * $600M recovered · 15K+ clients · 99% success rate
 */
export function WelcomeHero({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative flex flex-col bg-white">
      {/* ── Hero section with crash photo background ── */}
      <div
        className="relative flex min-h-[calc(100vh-56px)] flex-col items-center justify-center bg-gray-900 bg-cover bg-center px-4 py-16"
        style={{ backgroundImage: `url(${assets.heroCrashBg})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* White card overlay */}
        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white px-6 py-8 text-center shadow-2xl md:px-10 md:py-10">
          {/* Yellow stars */}
          <div className="mb-1 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }, (_, n) => (
              <Star key={n} className="h-6 w-6" style={{ fill: "#FBBF24", color: "#FBBF24" }} />
            ))}
          </div>
          <p className="mb-0.5 text-lg font-bold text-gray-900">
            15,000+ 5-star reviews
          </p>
          <p className="mb-5 text-xs text-gray-400">
            Based on direct client reviews
          </p>

          {/* Car crash icon — two cars colliding with spiky impact burst */}
          <div className="mb-4 flex justify-center">
            <svg
              className="h-16 w-24"
              viewBox="0 0 160 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left car — sedan profile facing right, dark navy */}
              <g fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="0.5">
                {/* Body */}
                <path d="M10 58 Q10 48, 18 48 L38 48 L44 35 Q46 31, 50 31 L60 31 Q63 31, 64 34 L68 48 L74 48 Q78 48, 78 52 L78 62 L10 62 Z" />
                {/* Wheels */}
                <circle cx="28" cy="64" r="6" fill="#1e3a8a" />
                <circle cx="28" cy="64" r="2.5" fill="white" />
                <circle cx="66" cy="64" r="6" fill="#1e3a8a" />
                <circle cx="66" cy="64" r="2.5" fill="white" />
                {/* Window */}
                <path d="M46 36 L42 47 L62 47 L58 36 Z" fill="#4a7eff" opacity="0.5" />
              </g>
              {/* Left car motion lines */}
              <line x1="2" y1="50" x2="10" y2="50" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="4" y1="56" x2="10" y2="56" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />

              {/* Right car — sedan profile facing left, medium blue */}
              <g fill="#2563EB" stroke="#2563EB" strokeWidth="0.5">
                {/* Body */}
                <path d="M150 58 Q150 48, 142 48 L122 48 L116 35 Q114 31, 110 31 L100 31 Q97 31, 96 34 L92 48 L86 48 Q82 48, 82 52 L82 62 L150 62 Z" />
                {/* Wheels */}
                <circle cx="132" cy="64" r="6" fill="#2563EB" />
                <circle cx="132" cy="64" r="2.5" fill="white" />
                <circle cx="94" cy="64" r="6" fill="#2563EB" />
                <circle cx="94" cy="64" r="2.5" fill="white" />
                {/* Window */}
                <path d="M114 36 L118 47 L98 47 L102 36 Z" fill="#93bbff" opacity="0.5" />
              </g>
              {/* Right car motion lines */}
              <line x1="158" y1="50" x2="150" y2="50" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="156" y1="56" x2="150" y2="56" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />

              {/* Impact burst — jagged star between the cars */}
              <polygon
                points="80,4 83,14 90,8 86,18 96,18 88,23 94,30 85,27 80,36 75,27 66,30 72,23 64,18 74,18 70,8 77,14"
                fill="#2563EB"
              />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Injured in a car accident?
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            Take this quick quiz to see if you have a case — and talk to a lawyer faster.
          </p>

          {/* Yellow CTA */}
          <button
            type="button"
            onClick={onStart}
            className="w-full rounded-full px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
            style={{ backgroundColor: "#FBBF24" }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* ── "Why Choose DK Law?" section — white bg ── */}
      <div className="flex flex-col items-center bg-white px-4 py-12">
        {/* Justice scale icon in circle */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 shadow-md">
          <svg
            className="h-7 w-7 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="4" y1="7" x2="20" y2="7" />
            <path d="M4 7l-1 7h6L8 7" />
            <path d="M20 7l-1 7h-6l1-7" />
            <line x1="8" y1="21" x2="16" y2="21" />
          </svg>
        </div>

        <h2 className="mb-6 text-center text-lg font-bold text-gray-900">
          Why Choose DK Law?
        </h2>

        <div className="inline-flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900">
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-gray-900">$600 million recovered</span> for clients.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900">
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-gray-900">Available 24/7.</span> Get help anytime.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900">
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-gray-900">$0 upfront.</span> Only pay if we win.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
