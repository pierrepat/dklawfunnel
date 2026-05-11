import { ChevronRight } from "lucide-react";

type NavigationButtonsProps = {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  showBack?: boolean;
  nextDisabled?: boolean;
  consentGrantor?: boolean;
};

/** Reference `de` in `index-DGn1on1U.js` (default variant). */
export function NavigationButtons({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Next",
  showBack = true,
  nextDisabled = false,
  consentGrantor = false,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      {showBack && onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {backLabel}
        </button>
      ) : (
        <div />
      )}
      {onNext ? (
        <button
          type="button"
          disabled={nextDisabled}
          onClick={onNext}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          {...(consentGrantor ? { "data-tf-element-role": "consent-grantor" } : {})}
        >
          {nextLabel}
          <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
