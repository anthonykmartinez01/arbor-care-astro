import { useState } from "react";
import { Phone, Menu, X, TreePine } from "lucide-react";

const BUSINESS = {
  phone: "(303) 949-6818",
  phoneTel: "tel:+13039496818",
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tree Services", to: "/tree-services" },
  { label: "Our Work", to: "/our-work" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About", to: "/about-arbor-care-index" },
  { label: "Contact", to: "/contact-us" },
];

export default function Header({ pathname = "/" }: { pathname?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar */}
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <span>Serving Denver, Colorado & Surrounding Areas</span>
          <a href={BUSINESS.phoneTel} className="font-semibold hover:underline">
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/assets/arborcare-logo.png" alt="Arbor Care Tree Solutions" className="h-10 w-auto" loading="eager" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                pathname === link.to ? "text-primary font-bold" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneTel}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-bold text-accent-foreground"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  pathname === link.to ? "bg-muted text-primary font-bold" : "text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}