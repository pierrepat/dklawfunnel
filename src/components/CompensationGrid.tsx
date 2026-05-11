import {
  Activity,
  Brain,
  Car,
  DollarSign,
  Ellipsis,
  HeartCrack,
  Stethoscope,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ITEMS: { icon: LucideIcon; label: string; desc: string }[] = [
  { icon: Car, label: "Vehicle Damage", desc: "Repairs or replacement" },
  { icon: Stethoscope, label: "Medical Expenses", desc: "Doctor visits, hospital bills" },
  { icon: DollarSign, label: "Lost Earnings", desc: "Missed pay from work" },
  { icon: HeartCrack, label: "Pain & Suffering", desc: "Physical & emotional pain" },
  { icon: Brain, label: "Emotional Distress", desc: "Stress, anxiety, trauma" },
  { icon: Wallet, label: "Out-of-Pocket Costs", desc: "Money you had to spend" },
  { icon: Activity, label: "Future Care", desc: "Long-term treatments" },
  { icon: Ellipsis, label: "And Much More", desc: "Every case is unique" },
];

export function CompensationGrid() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Get Compensated For</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-2 overflow-hidden rounded-lg border border-border md:grid-cols-4">
        {ITEMS.map((item, r) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex flex-col gap-2 p-5 ${r < 4 ? "border-b border-border" : ""} ${r % 4 !== 3 ? "border-r border-border" : ""}`}
            >
              <Icon className="h-6 w-6 text-foreground" aria-hidden />
              <p className="text-base font-semibold text-primary">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
