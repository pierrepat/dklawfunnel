import { cloneElement, isValidElement, useRef, type ReactElement, type ReactNode } from "react";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

type TermsPrivacyDialogProps = {
  children: ReactNode;
};

export function TermsPrivacyDialog({ children }: TermsPrivacyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();

  const trigger = isValidElement(children)
    ? cloneElement(children as ReactElement<{ onClick?: (e: React.MouseEvent) => void }>, {
        onClick: (e: React.MouseEvent) => {
          (children as ReactElement<{ onClick?: (e: React.MouseEvent) => void }>).props.onClick?.(e);
          open();
        },
      })
    : null;

  return (
    <>
      {trigger ?? (
        <button
          type="button"
          onClick={open}
          className="rounded border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
        >
          {children}
        </button>
      )}
      <dialog
        ref={dialogRef}
        className="w-[min(calc(100%-2rem),48rem)] max-w-none border-0 bg-transparent p-0 [&::backdrop]:bg-black/55"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="flex max-h-[83vh] flex-col overflow-hidden rounded-[10px] border border-border bg-card text-foreground shadow-xl">
          <div className="flex shrink-0 items-start justify-between px-6 pb-0 pt-5">
            <h2 className="text-[2rem] font-bold leading-tight tracking-tight text-foreground">Privacy Policy</h2>
            <button
              type="button"
              aria-label="Close privacy policy"
              onClick={() => dialogRef.current?.close()}
              className="ml-4 text-xl leading-none text-muted-foreground transition-colors hover:text-foreground"
            >
              ×
            </button>
          </div>
          <div className="mt-3 h-[69vh] overflow-y-auto overflow-x-hidden px-6 pb-6">
            <PrivacyPolicyContent />
          </div>
        </div>
      </dialog>
    </>
  );
}
