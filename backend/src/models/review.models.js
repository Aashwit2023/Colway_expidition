import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      default: "Verified Climber",
      trim: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5
    },
    expedition: {
      type: String,
      required: true,
      trim: true
    },
    text: {
      type: String,
      required: true,
      trim: true
    },
    avatar: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      enum: ["website", "google"],
      default: "website"
    },
    helpful: {
      type: Number,
      default: 1
    },
    isVerified: {
      type: Boolean,
      default: true
    },
    isLocalGuide: {
      type: Boolean,
      default: false
    },
    reviewsCount: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
