import Link from "next/link";
import { Phone, MapPin, Clock, Star, ArrowUpRight, Instagram } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-stone-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Rating */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center font-sans font-bold text-base">
                JJ
              </div>
              <div>
                <div className="font-sans font-bold text-white text-base">
                  {BUSINESS_INFO.name}
                </div>
                <div className="text-xs font-mono text-stone-400">
                  Owner: {BUSINESS_INFO.owner}
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Detail-oriented residential remodeling, custom tile &amp; Wedi
              waterproofing, door framing, and home repairs across Irving and the
              Dallas–Fort Worth metroplex.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-amber-600/60 px-3.5 py-2 rounded-sm transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono text-white font-semibold whitespace-nowrap">
                {BUSINESS_INFO.rating} / 5.0
              </span>
              <span className="text-xs text-stone-400 whitespace-nowrap">
                ({BUSINESS_INFO.totalReviews} Reviews)
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Remodeling Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Google Reviews ({BUSINESS_INFO.totalReviews})
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Juan Valadez
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-4">
              Contact &amp; Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-mono text-white hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs text-stone-400">
                  {BUSINESS_INFO.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}:</span>
                      <span className="font-mono text-stone-300">{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Areas & Social */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-4">
              DFW Service Areas
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-stone-300 rounded-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-stone-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber-500" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Irving, Texas · Online Estimates &amp; On-Site Services
          </p>
        </div>
      </div>
    </footer>
  );
}
