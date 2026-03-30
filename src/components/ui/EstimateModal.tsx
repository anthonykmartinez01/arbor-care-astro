import { useState } from "react";
import EstimateEmbed from "./EstimateEmbed";

export default function EstimateModal({ children, className }: { children: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-10 mx-4 w-full max-w-lg rounded-xl bg-background p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-foreground hover:bg-muted"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
            <h2 className="mb-4 text-xl font-bold">Get Your Free Estimate</h2>
            <EstimateEmbed />
          </div>
        </div>
      )}
    </>
  );
}
