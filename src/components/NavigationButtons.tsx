type NavigationButtonsProps = {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  showBack?: boolean;
  nextDisabled?: boolean;
  consentGrantor?: boolean;
};

/**
 * Navigation — mirrors M&M: yellow CTA button (rounded-full), Back text link.
 */
export function NavigationButtons({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Continue",
  showBack = true,
  nextDisabled = false,
  consentGrantor = false,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      {onNext ? (
        <button
          type="button"
          disabled={nextDisabled}
          onClick={onNext}
          className="w-full rounded-full px-8 py-3.5 text-base font-bold text-gray-900 shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: "#FBBF24" }}
          {...(consentGrantor ? { "data-tf-element-role": "consent-grantor" } : {})}
        >
          {nextLabel}
        </button>
      ) : null}
      {showBack && onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-700"
        >
          {backLabel}
        </button>
      ) : null}
    </div>
  );
}
