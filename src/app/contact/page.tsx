"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: "Bathroom Remodels",
    timeline: "Within 2–4 weeks",
    details: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const sheetWebhook = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK?.trim();

    if (!sheetWebhook) {
      setErrorMsg(
        "Google Sheet webhook is not configured yet. Add NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK in .env.local."
      );
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(sheetWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formState),
        signal: AbortSignal.timeout(12000),
      });

      if (!res.ok) {
        setErrorMsg("Could not save request. Please call (214) 213-9249.");
        return;
      }

      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Could not save request. Please try again.");
      }
    } catch {
      setErrorMsg(
        "Could not reach Google Sheets. Please check your connection or call (214) 213-9249."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <section className="bg-zinc-900 text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
            Free Estimate &amp; Consultation
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Tell Us About Your Project.
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-base sm:text-lg">
            Request an online estimate or schedule an on-site walkthrough in
            Irving and surrounding DFW communities.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Estimate Form */}
            <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-8 rounded-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900">
                    Estimate Request Received
                  </h2>
                  <p className="text-zinc-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you,{" "}
                    <span className="font-semibold text-zinc-900">
                      {formState.name || "neighbor"}
                    </span>
                    . Juan Valadez&apos;s team will review your{" "}
                    <span className="font-semibold text-zinc-900">
                      {formState.service}
                    </span>{" "}
                    details and follow up shortly. Need immediate assistance? Call{" "}
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-mono font-semibold text-amber-700 underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-zinc-600 hover:text-zinc-900 underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-900">
                      Request a Free Estimate
                    </h2>
                    <p className="text-sm text-stone-500 mt-1">
                      We respond promptly during business hours (Mon–Fri 8am–9pm,
                      Sat 8am–4pm).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="(214) 555-0199"
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        ZIP Code *
                      </label>
                      <input
                        id="zip"
                        type="text"
                        autoComplete="postal-code"
                        required
                        value={formState.zip}
                        onChange={(e) =>
                          setFormState({ ...formState, zip: e.target.value })
                        }
                        placeholder="75062"
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Project Type
                      </label>
                      <select
                        id="service"
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      >
                        <option>Bathroom Remodels</option>
                        <option>Kitchen Renovations</option>
                        <option>Doors &amp; Carpentry</option>
                        <option>Shower Door / Tile Work</option>
                        <option>Water Heater / Appliance Install</option>
                        <option>General Home Repairs</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formState.timeline}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            timeline: e.target.value,
                          })
                        }
                        className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                      >
                        <option>As soon as possible</option>
                        <option>Within 2–4 weeks</option>
                        <option>1–2 months out</option>
                        <option>Just planning / budgeting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5"
                    >
                      Project Scope &amp; Notes *
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      required
                      value={formState.details}
                      onChange={(e) =>
                        setFormState({ ...formState, details: e.target.value })
                      }
                      placeholder="Describe what you'd like done (e.g. walk-in shower tile remodel, front door replacement, water heater swap)..."
                      className="w-full border border-stone-300 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 rounded-sm focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-sm">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold text-sm px-7 py-3.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Sending Request..." : "Send Estimate Request"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-stone-200 p-6 rounded-sm space-y-5">
                <h2 className="text-lg font-bold text-zinc-900">
                  Direct Contact
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono text-stone-500 uppercase">
                        Call or Text
                      </div>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="font-mono font-semibold text-base text-zinc-900 hover:text-amber-700"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-mono text-stone-500 uppercase">
                        Office Address
                      </div>
                      <div className="text-zinc-900 font-medium">
                        {BUSINESS_INFO.address}
                      </div>
                      <a
                        href={BUSINESS_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-amber-700 hover:underline mt-1"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
                    <div className="w-full">
                      <div className="text-xs font-mono text-stone-500 uppercase mb-1">
                        Hours
                      </div>
                      <div className="space-y-1">
                        {BUSINESS_INFO.hours.map((h) => (
                          <div
                            key={h.day}
                            className="flex justify-between text-xs"
                          >
                            <span className="text-zinc-600">{h.day}</span>
                            <span className="font-mono font-medium text-zinc-900">
                              {h.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white border border-stone-200 rounded-sm overflow-hidden">
                <iframe
                  title="JJ General Contractor Location — Irving, TX"
                  src="https://www.google.com/maps?q=3517+Esplendor+Ave,+Irving,+TX+75062&output=embed"
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
