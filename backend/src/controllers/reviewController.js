import Review from "../models/review.models.js";

const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJ8YB8pUSHBDkRtn_MBsu-Qjo";

// Helper function to fetch live reviews from Google Places API
const fetchLiveGoogleReviews = async () => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return { reviews: [], rating: 5.0, user_ratings_total: 0 };

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,reviews,user_ratings_total,url&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK" && data.result) {
      const googleReviews = (data.result.reviews || []).map((rev, index) => ({
        _id: `google_${rev.time || index}_${rev.author_name?.replace(/\s+/g, "_")}`,
        name: rev.author_name,
        location: "Google Reviewer",
        avatar: rev.profile_photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(rev.author_name)}&backgroundColor=ff7a18,1a365d`,
        rating: rev.rating,
        date: rev.relative_time_description || "Recently",
        expedition: "Himalayan Expedition",
        text: rev.text,
        helpful: 1,
        isLocalGuide: false,
        reviewsCount: 1,
        source: "google",
        authorUrl: rev.author_url,
        createdAt: rev.time ? new Date(rev.time * 1000).toISOString() : new Date().toISOString()
      }));

      return {
        reviews: googleReviews,
        rating: data.result.rating || 5.0,
        user_ratings_total: data.result.user_ratings_total || googleReviews.length
      };
    }
  } catch (error) {
    console.error("Google Places API live fetch error:", error.message);
  }

  return { reviews: [], rating: 5.0, user_ratings_total: 0 };
};

export const getReviews = async (req, res) => {
  try {
    // 1. Fetch genuine user-submitted reviews from MongoDB database
    let dbReviews = [];
    try {
      dbReviews = await Review.find().sort({ createdAt: -1 }).lean();
    } catch (dbErr) {
      console.warn("MongoDB review fetch notice:", dbErr.message);
    }

    const formattedDbReviews = dbReviews.map((rev) => ({
      _id: rev._id.toString(),
      name: rev.name,
      location: rev.location || "Verified Climber",
      avatar: rev.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(rev.name)}&backgroundColor=ff7a18,1a365d`,
      rating: Number(rev.rating) || 5,
      date: rev.createdAt ? new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently",
      expedition: rev.expedition || "Himalayan Expedition",
      text: rev.text,
      helpful: rev.helpful || 1,
      isLocalGuide: rev.isLocalGuide || false,
      reviewsCount: rev.reviewsCount || 1,
      source: rev.source || "website",
      createdAt: rev.createdAt
    }));

    // 2. Fetch live Google Business reviews if API Key is configured
    const liveGoogleData = await fetchLiveGoogleReviews();

    // 3. Combine genuine website reviews with genuine Google reviews (no fake dummy data)
    const allReviews = [...formattedDbReviews, ...liveGoogleData.reviews];

    // 4. Compute genuine aggregate statistics
    const totalCount = allReviews.length;
    let averageRating = "5.0";
    if (totalCount > 0) {
      const sum = allReviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
      averageRating = (sum / totalCount).toFixed(1);
    } else if (liveGoogleData.rating) {
      averageRating = Number(liveGoogleData.rating).toFixed(1);
    }

    return res.status(200).json({
      success: true,
      stats: {
        averageRating: Number(averageRating),
        totalReviews: liveGoogleData.user_ratings_total > 0 ? liveGoogleData.user_ratings_total : totalCount,
        liveDbReviewsCount: formattedDbReviews.length,
        googleReviewsCount: liveGoogleData.reviews.length,
        googlePlaceId: GOOGLE_PLACE_ID
      },
      reviews: allReviews
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error fetching reviews",
      error: error.message
    });
  }
};

export const createReview = async (req, res) => {
  try {
    const { name, location, rating, expedition, text } = req.body;

    if (!name || !expedition || !text) {
      return res.status(400).json({
        success: false,
        message: "Name, expedition, and review text are required fields."
      });
    }

    const numRating = Number(rating) || 5;
    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=ff7a18,1a365d`;

    const newReview = await Review.create({
      name: name.trim(),
      location: location ? location.trim() : "Verified Climber",
      rating: Math.min(Math.max(numRating, 1), 5),
      expedition: expedition.trim(),
      text: text.trim(),
      avatar: avatarUrl,
      source: "website",
      helpful: 1,
      isVerified: true
    });

    return res.status(201).json({
      success: true,
      message: "Genuine review successfully saved and published on website!",
      review: {
        _id: newReview._id.toString(),
        name: newReview.name,
        location: newReview.location,
        avatar: newReview.avatar,
        rating: newReview.rating,
        date: "Just now",
        expedition: newReview.expedition,
        text: newReview.text,
        helpful: newReview.helpful,
        isLocalGuide: false,
        reviewsCount: 1,
        source: newReview.source,
        createdAt: newReview.createdAt
      }
    });
  } catch (error) {
    console.error("Error creating review:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message
    });
  }
};

export const markHelpful = async (req, res) => {
  try {
    const { id } = req.params;
    if (id.startsWith("google_")) {
      return res.status(200).json({ success: true, helpful: 2 });
    }

    const review = await Review.findByIdAndUpdate(
      id,
      { $inc: { helpful: 1 } },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ success: false, message: "Review not found" });
    }

    return res.status(200).json({ success: true, helpful: review.helpful });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
