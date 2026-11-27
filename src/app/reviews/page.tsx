"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Star, ArrowRight } from "lucide-react";
import {
  BUSINESS_INFO,
  GOOGLE_REVIEWS,
  REVIEW_TOPICS,
  type GoogleReview,
} from "@/data/business";
import { GoogleMark, ReviewCard } from "@/components/ReviewCard";

interface ReviewsApiPayload {
  source: string;
  rating: number;
  totalReviews: number;
  breakdown: Array<{ stars: number; count: number }>;
  topics: Array<{ label: string; count: number }>;
  googleMapsUrl: string;
  reviews: GoogleReview[];
}

export default function ReviewsPage() {
  const [data, setData] = useState<ReviewsApiPayload>({
    source: "google_maps_verified",
    rating: BUSINESS_INFO.rating,
    totalReviews: BUSINESS_INFO.totalReviews,
    breakdown: BUSINESS_INFO.ratingBreakdown,
    topics: REVIEW_TOPICS,
    googleMapsUrl: BUSINESS_INFO.googleMapsUrl,
    reviews: GOOGLE_REVIEWS,
  });

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((payload: ReviewsApiPayload) => {
        if (payload?.reviews?.length) {
          setData(payload);
        }
      })
      .catch(() => {
        // Keep initial verified fallback
      });
  }, []);

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* Header */}
      <section className="bg-zinc-900 text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                <GoogleMark className="w-4 h-4" />
                <span>Verified Google Reviews</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                {data.rating} out of 5 Stars Across {data.totalReviews} Google Reviews.
              </h1>
              <p className="text-stone-300 text-base sm:text-lg max-w-2xl">
                Real feedback from Irving and Dallas–Fort Worth homeowners who
                hired JJ General Contractor for remodeling, door framing, shower
                installations, and home repairs.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm px-5 py-3 rounded-sm transition-colors"
                >
                  <span>View All {data.totalReviews} Reviews on Google</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-medium text-sm px-5 py-3 rounded-sm transition-colors"
                >
                  <span>Request Your Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Rating Breakdown Card */}
            <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 rounded-sm space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <div className="text-4xl font-mono font-bold text-white">
                    {data.rating}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">
                    {data.totalReviews} Total Reviews
                  </div>
                  <div className="text-xs font-mono text-stone-400 mt-0.5">
                    Google Business Profile
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {data.breakdown.map((row) => {
                  const pct = Math.round((row.count / data.totalReviews) * 100);
                  return (
                    <div
                      key={row.stars}
                      className="flex items-center gap-3 text-xs font-mono"
                    >
                      <span className="w-8 text-stone-300">{row.stars}★</span>
                      <div className="flex-1 h-2 bg-zinc-800 rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-amber-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-stone-400">
                        {row.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics & Review Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Most Mentioned by Customers on Google
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.topics.map((topic) => (
                <span
                  key={topic.label}
                  className="text-xs font-mono bg-white border border-stone-200 text-zinc-800 px-3 py-1.5 rounded-sm"
                >
                  {topic.label} ({topic.count})
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
