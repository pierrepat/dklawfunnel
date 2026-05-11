import type { ReactNode } from "react";

type OptionButtonProps = {
  label: string;
  sublabel?: string;
  /** When true, selected state uses primary border/glow (reference `se` with `active`). */
  highlightSelected?: boolean;
  active?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

/** Matches reference option `se` in `index-DGn1on1U.js` (QuestionCard options). */
export function OptionButton({
  label,
  sublabel,
  highlightSelected = false,
  active,
  icon,
  onClick,
}: OptionButtonProps) {
  const selected = Boolean(active) && highlightSelected;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full min-h-[74px] rounded-lg border-2 p-3 text-center transition-all duration-300 md:min-h-[84px] md:border-[3px] md:p-5",
        "hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]",
        selected
          ? "border-primary bg-card shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
          : "border-foreground/70 bg-card hover:border-foreground/85",
      ].join(" ")}
    >
      <div
        className={`flex items-center ${icon ? "justify-start gap-2.5 px-1 md:gap-3 md:px-2" : "justify-center"}`}
      >
        {icon ? (
          <span className="text-primary [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-6 md:[&>svg]:w-6">{icon}</span>
        ) : null}
        <div className={icon ? "text-left" : ""}>
          <span className="block text-base font-semibold leading-tight text-foreground md:text-lg md:leading-tight">
            {label}
          </span>
          {sublabel ? (
            <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">{sublabel}</p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
