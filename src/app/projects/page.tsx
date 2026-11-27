"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/business";

const CATEGORIES: Array<"All" | ProjectItem["category"]> = [
  "All",
  "Bathrooms",
  "Kitchens",
  "Doors & Trim",
  "Repairs & Upgrades",
];

export default function ProjectsPage() {
  const [selected, setSelected] =
    useState<"All" | ProjectItem["category"]>("All");

  const filtered =
    selected === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <section className="bg-zinc-900 text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
            Project Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Craftsmanship Across Irving, Las Colinas &amp; DFW.
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-base sm:text-lg">
            Browse recent bathroom remodels, kitchen updates, custom door
            installations, and detail-oriented home upgrades.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-stone-200">
            {CATEGORIES.map((category) => {
              const active = selected === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelected(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors cursor-pointer ${
                    active
                      ? "bg-zinc-900 text-white"
                      : "bg-white border border-stone-200 text-zinc-700 hover:bg-stone-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-stone-200 rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-stone-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-zinc-950/85 text-white text-[11px] font-mono px-2.5 py-1 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h2 className="font-sans font-bold text-xl text-zinc-900">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-700" />
                        {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono bg-stone-100 text-zinc-700 px-2.5 py-1 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-white border border-stone-200 p-8 sm:p-10 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Planning a Similar Project in DFW?
              </h2>
              <p className="text-zinc-600 mt-1">
                Tell us what you&apos;re looking to build or remodel and get a
                straightforward estimate.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-amber-700 text-white font-semibold text-sm px-6 py-3 rounded-sm transition-colors shrink-0"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
