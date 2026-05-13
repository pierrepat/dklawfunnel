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

          {/* Car crash icon */}
          <div className="mb-4 flex justify-center">
            <img src="/assets/car-crash-icon.png" alt="Car accident" className="h-16 w-auto" />
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
