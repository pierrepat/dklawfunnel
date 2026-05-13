import { assets } from "../data/assets";
import { TermsPrivacyDialog } from "./TermsPrivacyDialog";

/**
 * Footer — matches DK Law's actual site layout:
 * 1. Gray attorney advertising disclosure box (full text)
 * 2. Bottom bar: DK Law logo + copyright/address left, Terms & Privacy button right
 */
export function DKLawFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-gray-200 bg-white px-4 pb-8 pt-6">
      <div className="mx-auto max-w-3xl">
        {/* Attorney Advertising disclosure box */}
        <div className="mb-8 rounded-lg bg-gray-100 p-6">
          <p className="mb-4 text-sm font-bold text-gray-900">ATTORNEY ADVERTISING</p>
          <p className="mb-4 text-sm leading-relaxed text-gray-500">
            This website is an advertisement for legal services. The information on this site is for general informational
            purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this site or
            submission of any form. Past results do not guarantee future outcomes. The choice of a lawyer is an important decision
            and should not be based solely upon advertisements.
          </p>
          <p className="mb-1 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Responsible Attorney:</span> Daniel Kim, State Bar No. 293432
          </p>
          <p className="mb-1 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Law Firm:</span> DK Law - Injury, Accident, and More
          </p>
          <p className="mb-1 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Office Address:</span> 611 Anton Blvd, Ste 1000, Costa Mesa, CA 92626-7068
          </p>
          <p className="mb-4 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Phone:</span>{" "}
            <a href="tel:8007199779" className="underline transition-colors hover:text-gray-700">
              (800) 719-9779
            </a>
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-700">Disclaimer:</span> This site is not a substitute for professional legal
            advice. If you submit your information, you may be contacted by DK Law or affiliated partners regarding your potential
            claim. Legal representation is established only after a written agreement is signed between you and the attorney. We do
            not guarantee that you will receive compensation.
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-700">California Senate Bill 37 Compliance Notice:</span> This advertisement
            complies with California Business and Professions Code sections 6157–6159.2, as amended by SB 37 (effective January 1,
            2026). The responsible attorney identified above is licensed to practice law in the State of California and maintains a
            bona fide office at the address listed.
          </p>
        </div>

        {/* Bottom bar: logo + copyright left, Terms & Privacy right */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={assets.dkLawLogo} alt="DK Law" className="h-10 object-contain" />
            <div className="text-xs text-gray-500">
              <p>© {year} DK Law</p>
              <p className="text-[11px] text-gray-400">611 Anton Blvd, Ste 1000, Costa Mesa, CA 92626</p>
            </div>
          </div>
          <TermsPrivacyDialog>
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
            >
              Terms & Privacy
            </button>
          </TermsPrivacyDialog>
        </div>
      </div>
    </footer>
  );
}
