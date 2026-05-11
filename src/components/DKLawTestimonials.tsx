import { Star } from "lucide-react";
import { dkLawTestimonials } from "../data/testimonials";

const starStyle = { fill: "#01B2FF", color: "#01B2FF" } as const;

export function DKLawTestimonials() {
  return (
    <section className="border-t border-border px-4 py-12">
      <h2 className="mb-12 text-center text-xl font-bold text-foreground">Real Outcomes.</h2>
      <div className="mx-auto flex max-w-3xl flex-col gap-9">
        {dkLawTestimonials.map((t, idx) => (
          <div key={idx} className="flex-1">
            <div className="mb-3 font-serif text-5xl leading-none" style={{ color: "#01B2FF" }}>
              &quot;
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              &quot;{t.quote}&quot;
            </p>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }, (_, n) => (
                <Star key={n} className="h-4 w-4" style={starStyle} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
