import type { ReactNode } from "react";

type FunnelCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/**
 * Quiz question container — mirrors M&M: plain white bg, no card border/shadow,
 * just centered content with title + options.
 */
export function FunnelCard({ title, description, children }: FunnelCardProps) {
  return (
    <div className="mx-auto w-full max-w-lg px-2 py-4">
      <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mb-6 text-center text-sm text-gray-500">{description}</p>
      ) : null}
      <div className="mt-6 space-y-3">{children}</div>
    </div>
  );
}
