import { DKLawFooter } from "./components/DKLawFooter";
import { Funnel } from "./components/Funnel";
import { LegalPage } from "./components/LegalPage";
import { OptInPage } from "./components/OptInPage";

export default function App() {
  // Lightweight path routing so /privacy and /terms are real, public URLs
  // (Netlify serves index.html for those paths — see netlify.toml redirects).
  const path =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "")
      : "";

  if (path === "/privacy") return <LegalPage kind="privacy" />;
  if (path === "/terms") return <LegalPage kind="terms" />;
  if (path === "/opt-in") return <OptInPage />;

  return (
    <div className="min-h-screen bg-white">
      <Funnel />
      <DKLawFooter />
    </div>
  );
}
