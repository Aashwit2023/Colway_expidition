import express from "express";
import { getReviews, createReview, markHelpful } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.post("/:id/helpful", markHelpful);

export default router;
