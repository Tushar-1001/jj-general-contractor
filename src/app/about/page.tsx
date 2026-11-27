import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Juan Valadez and JJ General Contractor—Irving, TX's 4.9-star rated residential remodeling and home improvement team.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6]">
      <section className="bg-zinc-900 text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
            About JJ General Contractor
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Owner-Led Craftsmanship Built on Communication &amp; Detail.
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-base sm:text-lg">
            Based in Irving, Texas, {BUSINESS_INFO.owner} and his crew have
            earned 78 five-star reviews by treating every home with care,
            honesty, and technical precision.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] bg-stone-200 border border-stone-200 rounded-sm overflow-hidden">
              <Image
                src="/images/craftsman-detail.jpg"
                alt="JJ General Contractor architectural plans and tools"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                Why DFW Homeowners Recommend Juan Valadez
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Hiring a contractor shouldn&apos;t mean chasing down callbacks,
                guessing at hidden fees, or living in a messy construction zone.
                At JJ General Contractor, we keep projects personal and
                accountable—from the first measurement to the final cleanup.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Whether we&apos;re installing a Wedi waterproofed walk-in
                shower, framing a tricky bathroom door conversion so it looks
                original to the house, or replacing a water heater on short
                notice, we focus on doing the hidden prep work right.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Direct communication with Juan",
                  "Wedi-certified shower waterproofing",
                  "Fair, transparent project pricing",
                  "On-time arrival & daily jobsite cleanup",
                  "Online & on-site estimates available",
                  "Serving Irving & Greater DFW",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-white border border-stone-300 hover:bg-stone-100 text-zinc-900 font-mono text-sm px-5 py-3 rounded-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas & Quick Facts */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-semibold uppercase">
                <MapPin className="w-4 h-4" />
                <span>Home Base</span>
              </div>
              <div className="font-sans font-bold text-lg text-zinc-900">
                {BUSINESS_INFO.address}
              </div>
              <p className="text-sm text-zinc-600">
                Serving Irving, Las Colinas, Valley Ranch, Coppell, Grapevine,
                Grand Prairie, Dallas &amp; Arlington.
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-semibold uppercase">
                <Star className="w-4 h-4" />
                <span>Google Reputation</span>
              </div>
              <div className="font-sans font-bold text-lg text-zinc-900">
                {BUSINESS_INFO.rating}★ from {BUSINESS_INFO.totalReviews} Reviews
              </div>
              <p className="text-sm text-zinc-600">
                78 five-star ratings highlighting attention to detail, fair
                pricing, and on-time completion.
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-sm space-y-2">
              <div className="text-amber-700 font-mono text-xs font-semibold uppercase">
                Business Hours
              </div>
              <div className="space-y-1 text-sm text-zinc-800 pt-1">
                {BUSINESS_INFO.hours.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-zinc-600">{h.day}</span>
                    <span className="font-mono font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
