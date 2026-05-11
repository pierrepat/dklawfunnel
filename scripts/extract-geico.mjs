import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const ref = path.join(root, "public", "assets", "InsuranceLogos-Df9IicsM.js");
const s = fs.readFileSync(ref, "utf8");
const m = s.match(/y\s*=\s*"(data:image[^"]+)"/);
if (!m) throw new Error("GEICO data URI not found");
const out = path.join(root, "src", "data", "geicoLogoDataUri.ts");
fs.writeFileSync(
  out,
  `/** Embedded GEICO SVG logo — same as \`InsuranceLogos-Df9IicsM.js\`. */\nexport const geicoLogoDataUri = ${JSON.stringify(m[1])} as const;\n`,
);
