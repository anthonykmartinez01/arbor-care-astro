import { useState } from "react";
import EstimateEmbed from "./EstimateEmbed";

export function EstimateButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children ?? "Get Free Estimate"}
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-background rounded-lg shadow-xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="sr-only">
              <h2>Request a Free Estimate</h2>
              <p>Get a free quote for tree services.</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <EstimateEmbed className="h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}