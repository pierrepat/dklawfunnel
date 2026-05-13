import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type OptionButtonProps = {
  label: string;
  sublabel?: string;
  highlightSelected?: boolean;
  active?: boolean;
  icon?: ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
};

/**
 * Option button — mirrors M&M: rounded border, icon left, arrow right,
 * light hover highlight, no shadow.
 */
export function OptionButton({
  label,
  sublabel,
  highlightSelected = false,
  active,
  icon,
  showArrow = true,
  onClick,
}: OptionButtonProps) {
  const selected = Boolean(active) && highlightSelected;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full rounded-xl border-2 p-4 text-left transition-all duration-200",
        "hover:border-blue-400 hover:bg-blue-50/50 active:scale-[0.98]",
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="text-blue-600 [&>svg]:h-6 [&>svg]:w-6">{icon}</span>
          ) : null}
          <div>
            <span className="block text-base font-semibold leading-tight text-gray-900">
              {label}
            </span>
            {sublabel ? (
              <p className="mt-0.5 text-xs text-gray-500">{sublabel}</p>
            ) : null}
          </div>
        </div>
        {showArrow ? (
          <ArrowRight className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        ) : null}
      </div>
    </button>
  );
}
