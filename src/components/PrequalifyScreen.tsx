import type { PrequalifyBullet } from "../data/funnelConfig";

type PrequalifyScreenProps = {
  firstName?: string;
  bullets: PrequalifyBullet[];
  onUnlock?: () => void;
  onBack?: () => void;
};

export function PrequalifyScreen({ firstName, bullets, onUnlock, onBack }: PrequalifyScreenProps) {
  const trimmed = (firstName ?? "").trim();
  const title =
    trimmed !== "" ? `${trimmed}, Unlock Your Compensation Plan` : "Unlock Your Compensation Plan";

  return (
    <div className="w-full text-left">
      <p className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        You pre-qualify!
      </p>
      <h2 className="mb-6 text-2xl font-bold leading-tight text-foreground md:text-3xl">{title}</h2>
      <ul className="mb-8 space-y-5">
        {bullets.map((b) => (
          <li key={b.title} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
            <div>
              <p className="font-semibold text-foreground">{b.title}</p>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onUnlock}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
        >
          Unlock My Plan →
        </button>
      </div>
    </div>
  );
}
