type ProgressBarProps = {
  current: number;
  total: number;
};

/** Reference `vd` in `index-DGn1on1U.js`. */
export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total <= 0 ? 0 : Math.min(100, Math.round((current / total) * 100));
  const showMessage = pct >= 30;
  const almostThere = pct >= 80;

  return (
    <div className="mb-7 w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(145 63% 52%))",
          }}
        />
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        {showMessage ? (
          <p className="animate-fade-in text-xs font-semibold text-primary">
            {almostThere
              ? "Almost done — your results are almost ready!"
              : `Your evaluation is ${pct}% complete`}
          </p>
        ) : (
          <span aria-hidden />
        )}
        <p className="tabular-nums text-xs text-muted-foreground">
          {current} of {total}
        </p>
      </div>
    </div>
  );
}
