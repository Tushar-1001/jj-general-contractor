import { NextResponse } from "next/server";
import { BUSINESS_INFO, GOOGLE_REVIEWS, REVIEW_TOPICS } from "@/data/business";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
        placeId
      )}&fields=rating,user_ratings_total,reviews,url&key=${encodeURIComponent(apiKey)}`;

      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        const result = data?.result;
        if (result) {
          const liveReviews = (result.reviews || []).map(
            (
              r: {
                author_name: string;
                rating: number;
                relative_time_description: string;
                text: string;
              },
              idx: number
            ) => ({
              id: `live-${idx}`,
              author: r.author_name,
              badge: "Verified Google Review",
              rating: r.rating,
              relativeTime: r.relative_time_description,
              text: r.text,
              projectTag: "Google Maps",
            })
          );

          return NextResponse.json({
            source: "google_places_live",
            rating: result.rating ?? BUSINESS_INFO.rating,
            totalReviews: result.user_ratings_total ?? BUSINESS_INFO.totalReviews,
            breakdown: BUSINESS_INFO.ratingBreakdown,
            topics: REVIEW_TOPICS,
            googleMapsUrl: result.url ?? BUSINESS_INFO.googleMapsUrl,
            reviews: liveReviews.length > 0 ? liveReviews : GOOGLE_REVIEWS,
          });
        }
      }
    } catch {
      // Fall through to verified Google Maps snapshot
    }
  }

  return NextResponse.json({
    source: "google_maps_verified",
    rating: BUSINESS_INFO.rating,
    totalReviews: BUSINESS_INFO.totalReviews,
    breakdown: BUSINESS_INFO.ratingBreakdown,
    topics: REVIEW_TOPICS,
    googleMapsUrl: BUSINESS_INFO.googleMapsUrl,
    reviews: GOOGLE_REVIEWS,
  });
}
