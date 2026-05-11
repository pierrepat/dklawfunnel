import { insuranceLogoAssets } from "../data/assets";

export function InsuranceLogos() {
  return (
    <section className="border-t border-border px-4 py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
        Insurance companies we negotiate against
      </p>
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-8">
        {insuranceLogoAssets.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-8 w-auto object-contain opacity-50 grayscale md:h-10"
          />
        ))}
      </div>
    </section>
  );
}