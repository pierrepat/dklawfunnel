import { assets } from "../data/assets";
import { TermsPrivacyDialog } from "./TermsPrivacyDialog";

export function DKLawFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-border px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 rounded-lg bg-muted p-4">
          <p className="mb-2 text-xs font-semibold text-foreground">ATTORNEY ADVERTISING</p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            This website is an advertisement for legal services. The information on this site is for general informational
            purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this site or
            submission of any form. Past results do not guarantee future outcomes. The choice of a lawyer is an important decision
            and should not be based solely upon advertisements.
          </p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Responsible Attorney:</span> Daniel Kim, State Bar No. 293432
            <br />
            <span className="font-semibold text-foreground">Law Firm:</span> DK Law - Injury, Accident, and More
            <br />
            <span className="font-semibold text-foreground">Office Address:</span> 611 Anton Blvd, Ste 1000, Costa Mesa, CA
            92626-7068
            <br />
            <span className="font-semibold text-foreground">Phone:</span>{" "}
            <a href="tel:7142942224" className="underline transition-colors hover:text-foreground">
              (714) 294-2224
            </a>
          </p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Disclaimer:</span> This site is not a substitute for professional legal
            advice. If you submit your information, you may be contacted by DK Law or affiliated partners regarding your potential
            claim. Legal representation is established only after a written agreement is signed between you and the attorney. We do
            not guarantee that you will receive compensation.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">California Senate Bill 37 Compliance Notice:</span> This advertisement
            complies with California Business and Professions Code sections 6157–6159.2, as amended by SB 37 (effective January 1,
            2026). The responsible attorney identified above is licensed to practice law in the State of California and maintains a
            bona fide office at the address listed.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={assets.dkLawLogo} alt="DK Law" className="h-10 object-contain" />
            <div className="text-xs text-muted-foreground">
              <p>
                © {year} DK Law
              </p>
              <p className="text-[10px]">611 Anton Blvd, Ste 1000, Costa Mesa, CA 92626</p>
            </div>
          </div>
          <TermsPrivacyDialog>
            <button
              type="button"
              className="rounded border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
            >
              Terms & Privacy
            </button>
          </TermsPrivacyDialog>
        </div>
      </div>
    </footer>
  );
}
