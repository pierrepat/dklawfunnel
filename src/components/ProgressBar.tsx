type ProgressBarProps = {
  current: number;
  total: number;
};

/**
 * Progress bar — mirrors M&M: thin blue line, percentage label right-aligned.
 */
export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total <= 0 ? 0 : Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="mb-6 w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1.5 text-right text-xs text-gray-400">
        {pct}% completed
      </p>
    </div>
  );
}
