"use client";

import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import type { GoogleReview } from "@/data/business";

export function GoogleMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
      />
    </svg>
  );
}

export function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 260;

  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="bg-white border border-stone-200 p-6 flex flex-col justify-between gap-5 rounded-sm hover:border-stone-300 transition-colors">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-stone-200 text-stone-200"
                }`}
              />
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
            <GoogleMark className="w-3.5 h-3.5" />
            <span>Google Review</span>
          </span>
        </div>

        <div>
          <p
            className={`text-zinc-700 text-sm leading-relaxed ${
              !expanded && isLong ? "line-clamp-5" : ""
            }`}
          >
            &ldquo;{review.text}&rdquo;
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-1.5 text-xs font-mono text-amber-700 hover:text-amber-800 font-medium cursor-pointer"
            >
              {expanded ? "Show less" : "Read full review"}
            </button>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-stone-100 space-y-2.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-zinc-900 text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-semibold text-sm text-zinc-900 capitalize">
                {review.author}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </div>
            <div className="text-xs text-stone-500">
              {review.badge ? `${review.badge} · ` : ""}
              {review.relativeTime}
            </div>
          </div>
        </div>
        <div>
          <span className="inline-block text-[11px] font-mono bg-stone-100 text-zinc-700 px-2 py-1 rounded-sm">
            {review.projectTag}
          </span>
        </div>
      </div>
    </article>
  );
}
