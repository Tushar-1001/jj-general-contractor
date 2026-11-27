import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bathroom remodeling, Wedi waterproofing, kitchen renovations, custom doors, trim carpentry, and home repairs in Irving, TX.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#faf9f6]">
      <section className="bg-zinc-900 text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
            Services &amp; Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Remodeling &amp; Contracting Done Right Behind the Walls and on the Surface.
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-base sm:text-lg">
            From full bathroom and kitchen renovations to precision door
            framing and appliance installs, every job is overseen by Juan Valadez.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-28"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-stone-200 border border-stone-200 rounded-sm overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-block text-xs font-mono bg-stone-200/80 text-zinc-800 px-3 py-1 rounded-sm">
                    Typical Timeline: {service.typicalTimeline}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                    {service.title}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-zinc-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
                      className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
                    >
                      <span>Get an Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 bg-white border border-stone-300 hover:bg-stone-100 text-zinc-900 font-mono text-sm px-5 py-2.5 rounded-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-700" />
                      <span>{BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
