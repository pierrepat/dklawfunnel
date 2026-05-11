import { PRIVACY_POLICY_LAST_UPDATED, privacyPolicyBlocks } from "../data/privacyPolicy";

/** Body copy rendered from `src/data/privacyPolicy.ts` source. */
export function PrivacyPolicyContent() {
  return (
    <div className="max-w-none text-muted-foreground [&_h2]:mb-2 [&_h2]:mt-6 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mb-1 [&_h3]:mt-4 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:leading-relaxed [&_p]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mb-3 [&_ul]:space-y-1 [&_ul]:text-sm">
      <p className="mb-4 text-[13px] text-muted-foreground">Last Updated: {PRIVACY_POLICY_LAST_UPDATED}</p>
      {privacyPolicyBlocks.map((block, idx) => {
        if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
        if (block.type === "h3") return <h3 key={idx}>{block.text}</h3>;
        if (block.type === "p") return <p key={idx}>{block.text}</p>;
        if (block.type === "strong_p") {
          return (
            <p key={idx}>
              <strong>{block.text}</strong>
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={idx} className="list-disc pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "address") {
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
        }
        return null;
      })}
    </div>
  );
}
