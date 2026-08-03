import type { PrivacyPolicyBlock } from "../data/privacyPolicy";
import { PRIVACY_POLICY_LAST_UPDATED, privacyPolicyBlocks } from "../data/privacyPolicy";
import { TERMS_LAST_UPDATED, termsOfServiceBlocks } from "../data/termsOfService";

/**
 * Full-page, publicly reachable Privacy Policy / Terms of Service.
 * Served at /privacy and /terms (see App.tsx routing + netlify.toml redirects)
 * so carrier/TCR reviewers have real URLs to load and screenshot.
 */
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const blocks: PrivacyPolicyBlock[] = isPrivacy ? privacyPolicyBlocks : termsOfServiceBlocks;
  const lastUpdated = isPrivacy ? PRIVACY_POLICY_LAST_UPDATED : TERMS_LAST_UPDATED;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          &larr; Back
        </a>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-1 mb-6 text-[13px] text-gray-500">Last Updated: {lastUpdated}</p>

        <div className="text-gray-600 [&_h2]:mb-2 [&_h2]:mt-6 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mb-1 [&_h3]:mt-4 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-gray-900 [&_li]:leading-relaxed [&_p]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mb-3 [&_ul]:space-y-1 [&_ul]:text-sm">
          {blocks.map((block, idx) => {
            if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={idx}>{block.text}</h3>;
            if (block.type === "p") return <p key={idx}>{block.text}</p>;
            if (block.type === "strong_p")
              return (
                <p key={idx}>
                  <strong>{block.text}</strong>
                </p>
              );
            if (block.type === "ul")
              return (
                <ul key={idx} className="list-disc pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            if (block.type === "address")
              return (
                <p key={idx}>
                  {block.strong ? (
                    <>
                      <strong>{block.strong}</strong>
                      <br />
                    </>
                  ) : null}
                  {block.lines.map((line, lineIdx) => (
                    <span key={lineIdx}>
                      {line}
                      {lineIdx < block.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              );
            return null;
          })}
        </div>

        <p className="mt-10 border-t border-gray-200 pt-4 text-xs text-gray-400">
          {isPrivacy ? (
            <>
              See also our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              .
            </>
          ) : (
            <>
              See also our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </>
          )}
        </p>
      </div>
    </div>
  );
}
