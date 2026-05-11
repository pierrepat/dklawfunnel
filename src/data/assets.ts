import { geicoLogoDataUri } from "./geicoLogoDataUri";

/**
 * Local static assets (served from `public/assets/` → URL `/assets/...`).
 * Do not use external URLs for these.
 */
export const assets = {
  dkLawLogo: "/assets/dk-law-logo-BJVGfOCQ.webp",
  fileMyClaimLogo: "/assets/file-my-claim-logo-H4jxz8dk.png",
  bearMinor: "/assets/bear-minor-DnQ1TvYB.png",
  bearSignificant: "/assets/bear-significant-B_vdKZJ0.png",
  bearSevere: "/assets/bear-severe-0yEEaoNb.png",
  logoAllstate: "/assets/logo-allstate-B4mMbg3j.png",
  logoStateFarm: "/assets/logo-statefarm-Cwu1Hu8P.png",
  logoProgressive: "/assets/logo-progressive-CTMQzXBB.png",
  logoTravelers: "/assets/logo-travelers-DhMeAmhm.png",
  moneyStack: "/assets/money-stack-Bx9jU3T6.png",
} as const;

export type AssetKey = keyof typeof assets;

/** Insurance carrier logos in display order (`InsuranceLogos-Df9IicsM.js`). */
export const insuranceLogoAssets = [
  { name: "Allstate" as const, src: assets.logoAllstate },
  { name: "State Farm" as const, src: assets.logoStateFarm },
  { name: "Progressive" as const, src: assets.logoProgressive },
  { name: "Travelers" as const, src: assets.logoTravelers },
  { name: "GEICO" as const, src: geicoLogoDataUri },
] as const;

export type InjuryBearSeverity = "minor" | "significant" | "severe";

export const injuryBearBySeverity: Record<InjuryBearSeverity, string> = {
  minor: assets.bearMinor,
  significant: assets.bearSignificant,
  severe: assets.bearSevere,
};
