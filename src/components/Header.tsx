import { assets } from "../data/assets";

type HeaderProps = {
  onLogoClick?: () => void;
};

/**
 * Header — white bg, logo left (clickable → restart funnel), phone number right.
 */
export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={onLogoClick}
          className="cursor-pointer border-0 bg-transparent p-0"
          aria-label="Go to start"
        >
          <img src={assets.dkLawLogo} alt="DK Law" className="h-8 w-auto object-contain" />
        </button>
        <a
          href="tel:8007199779"
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500"
        >
          (800) 719-9779
        </a>
      </div>
    </header>
  );
}
