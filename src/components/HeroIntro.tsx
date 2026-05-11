import { BadgePercent, Clock, Scale, ShieldCheck } from "lucide-react";
import { assets } from "../data/assets";

/**
 * Welcome hero — "Free Case Evaluation" framing optimized for conversion.
 * Rendered inside funnel `max-w-xl` column.
 */
export function WelcomeHero() {
  return (
    <div className="mx-auto w-full text-center">
      <div className="mb-6 flex flex-col items-center">
        <img
          src={assets.fileMyClaimLogo}
          alt="File My Claim"
          className="h-28 w-28 object-contain"
          width={112}
          height={112}
        />
      </div>
      <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        Free Case Evaluation
      </h1>
      <p className="mb-2 text-base text-muted-foreground">
        Find out if your accident qualifies for compensation — takes under 60 seconds.
      </p>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={14} className="shrink-0 text-primary" strokeWidth={2} aria-hidden />
          Under 60 seconds
        </span>
        <span className="flex items-center gap-1.5">
          <BadgePercent size={14} className="shrink-0 text-primary" strokeWidth={2} aria-hidden />
          100% Free
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="shrink-0 text-primary" strokeWidth={2} aria-hidden />
          Confidential
        </span>
        <span className="flex items-center gap-1.5">
          <Scale size={14} className="shrink-0 text-primary" strokeWidth={2} aria-hidden />
          No Obligation
        </span>
      </div>
    </div>
  );
}