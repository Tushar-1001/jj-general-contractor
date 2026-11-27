"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Star, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/90">
      {/* Top Utility Strip */}
      <div className="bg-zinc-900 text-stone-300 text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-9 py-1.5 sm:py-0 sm:h-9 flex flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9.5px] sm:text-xs leading-tight">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" />
              <span>Serving Irving, Las Colinas &amp; Greater DFW</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Mon–Fri 8am–9pm · Sat 8am–4pm</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-mono font-medium text-white">{BUSINESS_INFO.rating}</span>
              <span className="text-stone-400">({BUSINESS_INFO.totalReviews} Google Reviews)</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 sm:gap-1.5 font-mono font-medium text-[10px] sm:text-xs text-white hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-zinc-900 text-white flex items-center justify-center font-sans font-bold text-base tracking-tight border border-zinc-800 group-hover:bg-amber-700 group-hover:border-amber-700 transition-colors">
            JJ
          </div>
          <div className="leading-tight">
            <div className="font-sans font-bold text-zinc-900 text-base tracking-tight">
              JJ General Contractor
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-stone-500 whitespace-nowrap">
              Irving, TX · Est. Craftsmanship
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-sm ${
                  active
                    ? "text-zinc-900 bg-stone-200/70"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors rounded-sm"
          >
            <span>Request Free Estimate</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 text-zinc-800 hover:bg-stone-200/60 rounded-sm"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#faf9f6] px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-sm ${
                  active
                    ? "bg-stone-200/80 text-zinc-900"
                    : "text-zinc-700 hover:bg-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 border border-zinc-300 bg-white text-zinc-900 font-mono text-sm font-medium py-2.5 rounded-sm"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-zinc-900 text-white font-semibold text-sm py-2.5 rounded-sm"
            >
              <span>Request Free Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
