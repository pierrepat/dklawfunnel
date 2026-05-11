import { CompensationGrid } from "./components/CompensationGrid";
import { DKLawFooter } from "./components/DKLawFooter";
import { DKLawTestimonials } from "./components/DKLawTestimonials";
import { FAQ } from "./components/FAQ";
import { Funnel } from "./components/Funnel";
import { InsuranceLogos } from "./components/InsuranceLogos";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Funnel />
      <DKLawTestimonials />
      <InsuranceLogos />
      <CompensationGrid />
      <FAQ />
      <DKLawFooter />
    </div>
  );
}
