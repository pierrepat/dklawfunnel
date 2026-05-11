import type { ReactNode } from "react";

const FUNNEL_CARD_SHADOW =
  "0 0 30px hsl(var(--primary) / 0.12), 0 10px 25px -5px rgba(0,0,0,0.08), 0 0 0 1px hsl(var(--primary) / 0.05)";

type FunnelCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Reference `ue` QuestionCard — `index-DGn1on1U.js`. */
export function FunnelCard({ title, description, children }: FunnelCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-xl rounded-xl border border-primary/20 bg-card p-7 md:p-8"
      style={{ boxShadow: FUNNEL_CARD_SHADOW }}
    >
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      {description ? <p className="mb-6 text-muted-foreground">{description}</p> : null}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
