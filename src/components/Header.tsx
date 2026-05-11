import { assets } from "../data/assets";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
        <img src={assets.dkLawLogo} alt="DK Law" className="h-8 w-auto object-contain" />
        <div className="text-right text-[10px] leading-tight text-muted-foreground">
          <p className="leading-tight">Attorney Advertising</p>
          <p className="leading-tight">Daniel Kim, SBN #293432</p>
        </div>
      </div>
    </header>
  );
}
