import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreTheme.css";

export default function ExploreTheme({ items, heading, id }) {
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const resumeTimeoutRef = useRef(null);

    // Calculate step width for 1 card + gap
    const getCardStep = useCallback(() => {
        if (!sliderRef.current) return 324;
        const firstCard = sliderRef.current.querySelector(".theme-link");
        if (firstCard) {
            const style = window.getComputedStyle(sliderRef.current);
            const gap = parseFloat(style.gap) || 24;
            return firstCard.offsetWidth + gap;
        }
        return 324;
    }, []);

    // Scroll to a specific card index
    const scrollToCard = useCallback((index, behavior = "smooth") => {
        if (!sliderRef.current || !items || items.length === 0) return;
        const validIndex = (index + items.length) % items.length;
        const step = getCardStep();
        sliderRef.current.scrollTo({
            left: validIndex * step,
            behavior: behavior
        });
        setCurrentIndex(validIndex);
    }, [items, getCardStep]);

    // Advance 1 card forward every 2 seconds
    useEffect(() => {
        if (!items || items.length <= 1) return;

        const timer = setInterval(() => {
            if (!isHovered && !isInteracting) {
                setCurrentIndex((prev) => {
                    const next = (prev + 1) % items.length;
                    scrollToCard(next, "smooth");
                    return next;
                });
            }
        }, 2000); // 2-second interval per card move

        return () => clearInterval(timer);
    }, [isHovered, isInteracting, items, scrollToCard]);

    // Handle manual sync on user scroll/swipe
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const step = getCardStep();
            if (step > 0) {
                const newIndex = Math.round(slider.scrollLeft / step);
                if (newIndex >= 0 && newIndex < items.length) {
                    setCurrentIndex(newIndex);
                }
            }
        };

        slider.addEventListener("scroll", handleScroll, { passive: true });
        return () => slider.removeEventListener("scroll", handleScroll);
    }, [items, getCardStep]);

    const pauseTemporarily = (duration = 4000) => {
        setIsInteracting(true);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, duration);
    };

    const slide = (direction) => {
        pauseTemporarily(4500);
        const next = direction === "left" 
            ? (currentIndex - 1 + items.length) % items.length 
            : (currentIndex + 1) % items.length;
        scrollToCard(next, "smooth");
    };

    const handleDotClick = (index) => {
        pauseTemporarily(4500);
        scrollToCard(index, "smooth");
    };

    return (
        <section className="explore-theme container" id={id}>
            <div className="theme-header-row">
                <div>
                    <h2>{heading}</h2>
                    <p className="theme-subtitle">Upcoming seasonal departures & expeditions • Book your slot early</p>
                </div>

                {items && items.length > 1 && (
                    <div className="theme-slider-arrows">
                        <button
                            type="button"
                            onClick={() => slide("left")}
                            className="theme-nav-btn"
                            aria-label="Previous card"
                            title="Previous card"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => slide("right")}
                            className="theme-nav-btn"
                            aria-label="Next card"
                            title="Next card"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <div 
                className="theme-slider-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => pauseTemporarily(5000)}
            >
                <div 
                    className="theme-grid theme-slider-track" 
                    ref={sliderRef}
                >
                    {items && items.map((theme, index) => (
                        <div key={`${theme.title}-${index}`} className="theme-link">
                            <div
                                className="theme-card show"
                                onClick={() => theme.link && navigate(theme.link)}
                            >
                                <div className="theme-image-wrapper">
                                    <img src={theme.image} alt={theme.title} loading="lazy" />
                                    {theme.badge && <span className="theme-badge">{theme.badge}</span>}
                                    {theme.status && (
                                        <span className="theme-status-pill">
                                            <span className="theme-pulse-dot"></span>
                                            {theme.status}
                                        </span>
                                    )}
                                </div>
                                <h3>{theme.title}</h3>
                                <p>{theme.description}</p>
                                
                                {(theme.dates || theme.seats) && (
                                    <div className="theme-specs-row">
                                        {theme.dates && <span className="theme-spec-chip">📅 {theme.dates}</span>}
                                        {theme.seats && <span className="theme-spec-chip theme-seats-chip">⚡ {theme.seats}</span>}
                                    </div>
                                )}

                                <div className="theme-actions-row">
                                    {theme.link && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(theme.link);
                                            }}
                                            className="theme-btn-details"
                                        >
                                            <span>Details</span>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    )}

                                    {theme.bookLink && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(theme.bookLink);
                                            }}
                                            className="theme-btn-book"
                                        >
                                            <span>⚡ Direct Book</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {items && items.length > 1 && (
                <div className="theme-dots-container">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleDotClick(index)}
                            className={`theme-dot ${index === currentIndex ? "theme-dot-active" : ""}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}