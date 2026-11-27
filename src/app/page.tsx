import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Star,
  Clock,
  Ruler,
} from "lucide-react";
import {
  BUSINESS_INFO,
  GOOGLE_REVIEWS,
  PROJECTS,
  REVIEW_TOPICS,
  SERVICES,
} from "@/data/business";
import { GoogleMark, ReviewCard } from "@/components/ReviewCard";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredReviews = GOOGLE_REVIEWS.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative border-b border-stone-200 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-22">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-white border border-stone-200 px-3.5 py-1.5 rounded-sm">
                <GoogleMark className="w-4 h-4" />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-900">
                  {BUSINESS_INFO.rating} ({BUSINESS_INFO.totalReviews} Google Reviews)
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-zinc-900 leading-[1.08]">
                Precision Remodeling &amp; General Contracting in{" "}
                <span className="text-amber-700">Irving, TX.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                Led by {BUSINESS_INFO.owner}, JJ General Contractor delivers custom
                bathroom and kitchen remodels, Wedi-waterproofed showers, exterior
                &amp; interior doors, and clean residential craftsmanship across DFW.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 text-sm transition-colors rounded-sm"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-zinc-900 font-mono font-medium px-6 py-3.5 text-sm transition-colors rounded-sm"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-200">
                <div>
                  <div className="font-mono font-bold text-xl text-zinc-900">78 / 80</div>
                  <div className="text-xs text-stone-500">5-Star Google Reviews</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-xl text-zinc-900">On-Time</div>
                  <div className="text-xs text-stone-500">Clean Daily Jobsites</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-xl text-zinc-900">DFW</div>
                  <div className="text-xs text-stone-500">Irving &amp; Surrounding</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-stone-200 border border-stone-200 overflow-hidden rounded-sm">
                <Image
                  src="/images/hero-remodel.jpg"
                  alt="Custom kitchen and living room remodel by JJ General Contractor in Irving, TX"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-950/90 backdrop-blur-sm text-white px-4 py-3 border border-zinc-800 rounded-sm max-w-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                    Recent DFW Project
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    White Oak Island &amp; Full Kitchen Remodel — Las Colinas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-18 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold mb-2">
                What We Build &amp; Remodel
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                Full-Scope Residential Contracting
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-amber-700 transition-colors"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group bg-[#faf9f6] border border-stone-200 hover:border-zinc-400 transition-colors flex flex-col overflow-hidden rounded-sm"
              >
                <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-zinc-900 group-hover:text-amber-700 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1.5 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>Typical: {service.typicalTimeline}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-900 group-hover:text-amber-700" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-18 lg:py-24 bg-[#faf9f6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold mb-2">
                Selected Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                Built for Longevity &amp; Clean Lines
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-amber-700 transition-colors"
            >
              <span>View project portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-stone-200 rounded-sm overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-stone-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-stone-500 mb-2">
                      <span>{project.category}</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-sans font-bold text-lg text-zinc-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.scope.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-stone-100 text-zinc-700 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Showcase Band */}
      <section className="py-18 lg:py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                <GoogleMark className="w-4 h-4" />
                <span>Verified Google Business Profile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Rated 4.9 Stars by 80+ DFW Homeowners
              </h2>
              <p className="text-stone-300 text-base max-w-2xl">
                Our reputation in Irving is built on clear communication, fair
                pricing, and detail-oriented work that holds up years after the
                final walkthrough.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm px-5 py-3 rounded-sm transition-colors"
              >
                <span>Read All Google Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-medium text-sm px-5 py-3 rounded-sm transition-colors"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Top Mentioned Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {REVIEW_TOPICS.slice(0, 6).map((topic) => (
              <span
                key={topic.label}
                className="text-xs font-mono bg-zinc-800/90 border border-zinc-700 text-stone-200 px-3 py-1.5 rounded-sm"
              >
                {topic.label} ({topic.count})
              </span>
            ))}
          </div>

          {/* 3 Featured Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-900">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Homeowners Choose JJ + Process */}
      <section className="py-18 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] bg-stone-200 rounded-sm overflow-hidden border border-stone-200">
              <Image
                src="/images/craftsman-detail.jpg"
                alt="Architectural plans, level, and tile samples on workbench"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold mb-2">
                  How We Work
                </div>
                <h2 className="text-3xl font-bold text-zinc-900">
                  Straightforward Process. Zero Surprises.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2 border-t-2 border-zinc-900 pt-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-700 font-semibold">
                    <Ruler className="w-4 h-4" />
                    <span>STEP 01</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-zinc-900">
                    Walkthrough &amp; Estimate
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    On-site measurements or online estimate review with clear,
                    itemized scope and fair pricing.
                  </p>
                </div>

                <div className="space-y-2 border-t-2 border-zinc-900 pt-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-700 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>STEP 02</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-zinc-900">
                    Proven Materials
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    We build behind the walls properly—Wedi waterproofing, plumb
                    framing, and quality hardware.
                  </p>
                </div>

                <div className="space-y-2 border-t-2 border-zinc-900 pt-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-700 font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>STEP 03</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-zinc-900">
                    On-Time Completion
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Daily cleanup, steady communication with Juan, and a thorough
                    final walkthrough.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white font-semibold text-sm px-6 py-3 rounded-sm transition-colors"
                >
                  <span>Schedule Your Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Online estimates &amp; on-site consultations available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
