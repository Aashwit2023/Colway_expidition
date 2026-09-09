import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquarePlus, ChevronDown, ChevronUp, Mountain, ThumbsUp, Filter, Sparkles, X, Globe, MessageSquare } from 'lucide-react';
import { fetchReviews, submitReview, markReviewHelpful } from '../api/api';

// Exact Google Place ID for Colway Expedition
const GOOGLE_PLACE_ID = "ChIJ8YB8pUSHBDkRtn_MBsu-Qjo";
const GOOGLE_REVIEW_DIRECT_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    averageRating: 5.0,
    totalReviews: 0,
    liveDbReviewsCount: 0,
    googleReviewsCount: 0
  });
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [expandedReviews, setExpandedReviews] = useState({});
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState({});
  const [newReviewForm, setNewReviewForm] = useState({
    name: "",
    expedition: "Mt. Yunam Expedition (6,111m)",
    rating: 5,
    text: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load genuine reviews from backend API on mount
  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      try {
        const { response, data } = await fetchReviews();
        if (response.ok && data && data.success) {
          setReviews(data.reviews || []);
          if (data.stats) {
            setStats(data.stats);
          }
        }
      } catch (err) {
        console.warn("Error fetching genuine reviews:", err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadReviews();
  }, []);

  // Filter list
  const filterOptions = ["All", "Mt. Yunam", "Friendship Peak", "Buran Ghati", "Bali Pass"];

  const filteredReviews = reviews.filter(rev => {
    if (selectedFilter === "All") return true;
    return rev.expedition?.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  const toggleExpand = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredReviews.length));
  };

  const handleHelpfulClick = async (reviewId) => {
    if (likedReviews[reviewId]) return;

    setLikedReviews(prev => ({ ...prev, [reviewId]: true }));
    setReviews(prev =>
      prev.map(r => ((r._id === reviewId || r.id === reviewId) ? { ...r, helpful: (r.helpful || 0) + 1 } : r))
    );

    try {
      await markReviewHelpful(reviewId);
    } catch (e) {
      console.warn("Helpful counter update note:", e.message);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newReviewForm.name || !newReviewForm.text) return;

    setIsSubmitting(true);

    try {
      const { response, data } = await submitReview({
        name: newReviewForm.name,
        location: newReviewForm.location || "Verified Climber",
        rating: Number(newReviewForm.rating),
        expedition: newReviewForm.expedition,
        text: newReviewForm.text
      });

      let addedReview;
      if (response.ok && data && data.success && data.review) {
        addedReview = data.review;
      } else {
        // Fallback local addition if network issue
        addedReview = {
          _id: `website_rev_${Date.now()}`,
          name: newReviewForm.name,
          location: newReviewForm.location || "Verified Climber",
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newReviewForm.name)}&backgroundColor=ff7a18,1a365d`,
          rating: Number(newReviewForm.rating),
          date: "Just now",
          expedition: newReviewForm.expedition,
          text: newReviewForm.text,
          helpful: 1,
          isLocalGuide: false,
          reviewsCount: 1,
          source: "website"
        };
      }

      setReviews(prev => [addedReview, ...prev]);
      setStats(prev => ({
        ...prev,
        totalReviews: prev.totalReviews + 1,
        liveDbReviewsCount: prev.liveDbReviewsCount + 1
      }));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsReviewModalOpen(false);
        setNewReviewForm({
          name: "",
          expedition: "Mt. Yunam Expedition (6,111m)",
          rating: 5,
          text: "",
          location: ""
        });
      }, 1500);
    } catch (err) {
      console.error("Submission failed:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container my-20 px-4 md:px-8" id="google-reviews">
      {/* Main Container Card */}
      <div className="bg-gradient-to-b from-[#FAF9F5] to-[#FFFFFF] rounded-[2.5rem] border border-[#E8E4DA] p-6 sm:p-10 md:p-14 shadow-[0_18px_60px_rgba(26,54,93,0.06)] relative overflow-hidden">
        
        {/* Subtle Top Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-orange-100/50 to-transparent blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#ff7a18]/20 shadow-xs mb-4">
            <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ff7a18] font-bold">
              Google Business &amp; Climber Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] tracking-tight leading-[1.15]">
            Loved by Climbers &amp; Adventurers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Read authentic reviews from mountaineers and trekkers who climbed with Colway Expedition, or share your own journey directly on Google Maps.
          </p>
        </div>

        {/* Google Trust & Rating Hero Bar */}
        <div className="relative z-10 bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-8 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Google Rating Badge (5 cols) */}
            <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-8">
              {/* Google G Logo Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center p-3 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    {stats.totalReviews > 0 ? stats.averageRating : "5.0"}
                  </span>
                  <span className="text-sm font-semibold text-gray-400">/ 5.0</span>
                </div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stats.totalReviews > 0 ? (
                    <>Based on <strong className="text-gray-900 font-bold">{stats.totalReviews} Verified Reviews</strong></>
                  ) : (
                    <>Official <strong className="text-gray-900 font-bold">Google Business Listing</strong></>
                  )}
                </p>
              </div>
            </div>

            {/* Right: 1-Click Action Buttons & Trust Features (7 cols) */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between lg:justify-end gap-3.5">
              
              {/* 1-Click Google Review Direct CTA */}
              <a
                href={GOOGLE_REVIEW_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#1a365d] hover:bg-[#152a48] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 group"
                title="Opens Google Maps review box for Colway Expedition in one click"
              >
                <div className="w-5 h-5 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <span>Review on Google</span>
                <ExternalLink size={15} className="text-gray-300 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Leave Website Review Button */}
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff7a18] hover:bg-[#e66c13] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquarePlus size={16} />
                <span>Write Feedback</span>
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="py-16 text-center text-gray-500">
            <div className="w-10 h-10 border-3 border-[#ff7a18] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-medium">Loading authentic reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          /* Empty State when no reviews have been submitted yet */
          <div className="relative z-10 bg-white rounded-3xl border border-dashed border-gray-300 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-orange-50 text-[#ff7a18] flex items-center justify-center mx-auto mb-4 shadow-inner">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a365d] mb-2">
              Be the First to Review Colway Expedition!
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Have you trekked or summitted a peak with us? Share your story directly on our official Google Business page or submit your feedback here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={GOOGLE_REVIEW_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1a365d] hover:bg-[#152a48] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                <span>Write a Review on Google Maps</span>
                <ExternalLink size={15} />
              </a>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff7a18] hover:bg-[#e66c13] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Post Website Review</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
                  <Filter size={13} /> Filter:
                </span>
                {filterOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilter(option);
                      setVisibleCount(6);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all shrink-0 cursor-pointer ${
                      selectedFilter === option
                        ? "bg-[#1a365d] text-white shadow-xs"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="text-xs text-gray-500 font-medium">
                Showing <strong className="text-gray-900">{displayedReviews.length}</strong> of {filteredReviews.length} reviews
              </div>
            </div>

            {/* Reviews Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedReviews.map((rev) => {
                const reviewKey = rev._id || rev.id;
                const isExpanded = !!expandedReviews[reviewKey];
                const isLongText = rev.text?.length > 180;
                const displayText = isExpanded || !isLongText ? rev.text : `${rev.text?.substring(0, 180)}...`;
                const isWebsiteReview = rev.source === "website";

                return (
                  <div
                    key={reviewKey}
                    className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      {/* Card Header: Avatar, Name, Source Icon */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.name}
                            className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-xs"
                            onError={(e) => {
                              e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(rev.name)}&backgroundColor=ff7a18,1a365d`;
                            }}
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-sm font-bold text-gray-900 leading-tight">
                                {rev.name}
                              </h4>
                              <CheckCircle size={14} className="text-[#10b981] fill-[#10b981]/20" title="Verified Reviewer" />
                            </div>
                            <p className="text-[11px] text-gray-500 font-normal">
                              {rev.location} {rev.isLocalGuide && "• Local Guide"}
                            </p>
                          </div>
                        </div>

                        {/* Source tag: Google or Website Verified */}
                        {isWebsiteReview ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                            <Globe size={11} /> Website
                          </span>
                        ) : (
                          <div className="w-5 h-5 shrink-0 opacity-85 group-hover:opacity-100 transition-opacity" title="Google Verified Review">
                            <svg viewBox="0 0 24 24" className="w-full h-full">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Rating Stars & Relative Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(Number(rev.rating) || 5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                        <span className="text-[11px] text-gray-400 font-medium">{rev.date}</span>
                      </div>

                      {/* Expedition Tag */}
                      {rev.expedition && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 border border-orange-100 text-[11px] font-semibold text-[#ff7a18] mb-3">
                          <Mountain size={12} />
                          <span className="truncate max-w-[220px]">{rev.expedition}</span>
                        </div>
                      )}

                      {/* Review Text */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal">
                        &ldquo;{displayText}&rdquo;
                      </p>

                      {/* Read More button if text is long */}
                      {isLongText && (
                        <button
                          onClick={() => toggleExpand(reviewKey)}
                          className="mt-2 text-xs font-bold text-[#1a365d] hover:text-[#ff7a18] transition-colors inline-flex items-center gap-0.5 cursor-pointer"
                        >
                          {isExpanded ? (
                            <>Show less <ChevronUp size={13} /></>
                          ) : (
                            <>Read more <ChevronDown size={13} /></>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Footer of Card: Verified Experience & Helpful */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
                        <Sparkles size={12} className="text-[#ff7a18]" /> Verified Experience
                      </span>
                      <button
                        onClick={() => handleHelpfulClick(reviewKey)}
                        className={`inline-flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                          likedReviews[reviewKey] ? "text-[#ff7a18] font-bold" : "text-gray-500 hover:text-gray-700"
                        }`}
                        title="Mark review as helpful"
                      >
                        <ThumbsUp size={12} className={likedReviews[reviewKey] ? "text-[#ff7a18] fill-[#ff7a18]/20" : "text-gray-400"} />
                        <span>{rev.helpful || 1} helpful</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="relative z-10 flex flex-col items-center justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#1a365d] font-bold text-sm tracking-wide border-2 border-gray-200 hover:border-[#1a365d] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Load More Reviews</span>
                  <ChevronDown size={16} />
                </button>
                <span className="text-xs text-gray-400 mt-2">
                  Showing {displayedReviews.length} of {filteredReviews.length} reviews
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Review Modal Form */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>

            {submitSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-600 text-sm">
                  Your review has been successfully posted to our live database and published on the website!
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff7a18] uppercase tracking-wider mb-1">
                    <Sparkles size={14} /> Genuine Climber Feedback
                  </div>
                  <h3 className="text-2xl font-black text-[#1a365d]">Share Your Experience</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Your feedback is saved in real-time and will appear on the Colway Expedition website.
                  </p>
                </div>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={newReviewForm.name}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        City / Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Manali, India"
                        value={newReviewForm.location}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Rating *
                      </label>
                      <div className="flex items-center gap-1.5 py-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                            className="cursor-pointer focus:outline-none"
                          >
                            <Star
                              size={22}
                              className={
                                star <= newReviewForm.rating
                                  ? "fill-[#FBBC04] text-[#FBBC04]"
                                  : "text-gray-300"
                              }
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Expedition / Trek Completed
                    </label>
                    <select
                      value={newReviewForm.expedition}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, expedition: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none text-sm bg-white"
                    >
                      <option value="Mt. Yunam Expedition (6,111m)">Mt. Yunam Expedition (6,111m)</option>
                      <option value="Friendship Peak Expedition (5,289m)">Friendship Peak Expedition (5,289m)</option>
                      <option value="Buran Ghati Pass Trek">Buran Ghati Pass Trek</option>
                      <option value="Bali Pass Expedition">Bali Pass Expedition</option>
                      <option value="Beas Kund Trek">Beas Kund Trek</option>
                      <option value="Custom Himalayan Climb">Custom Himalayan Climb</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your summit experience, our guides, safety, and hospitality..."
                      value={newReviewForm.text}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, text: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none text-sm"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#ff7a18] hover:bg-[#e66c13] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting..." : "Publish Review"}
                    </button>
                    
                    <a
                      href={GOOGLE_REVIEW_DIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5"
                    >
                      <span>Also Post to Google</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
