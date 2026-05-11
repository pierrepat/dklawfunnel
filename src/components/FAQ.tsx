import { faqItems } from "../data/faq";

export function FAQ() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
      <div className="mx-auto max-w-2xl space-y-6">
        {faqItems.map((item) => (
          <div key={item.q}>
            <h3 className="mb-2 text-base font-semibold text-foreground">{item.q}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
