import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrekSlider({ treks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + custom * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % treks.length);
  }, [treks.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + treks.length) % treks.length);
  }, [treks.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-[#1a365d] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full">
            <img 
              src={treks[currentIndex].image} 
              alt={treks[currentIndex].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <div className="max-w-2xl">
                <motion.div
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-200 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    {treks[currentIndex].location}
                  </span>
                </motion.div>

                <motion.h2
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif"
                >
                  {treks[currentIndex].title}
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-sans max-w-xl opacity-90 line-clamp-3 md:line-clamp-none"
                >
                  {treks[currentIndex].description}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 md:mb-10"
                >
                  <div className="flex items-center space-x-2 text-white/80 bg-white/5 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 text-xs md:text-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{treks[currentIndex].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80 bg-white/5 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 text-xs md:text-sm">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-medium">{treks[currentIndex].grade}</span>
                  </div>
                </motion.div>

                <motion.div
                  custom={4}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    to={treks[currentIndex].link}
                    className="group relative inline-flex items-center px-6 py-3 md:px-10 md:py-4 bg-white text-gray-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-14 hover:bg-blue-600 hover:text-white shadow-2xl text-sm md:text-base"
                  >
                    <span className="relative z-10">Explore Expedition</span>
                    <svg className="absolute right-4 w-5 h-5 md:w-6 md:h-6 transform translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-12 left-6 right-6 md:left-auto md:right-12 flex flex-col md:flex-row items-center justify-between md:justify-end gap-6 z-20">
        <div className="flex space-x-2 w-full md:w-auto justify-center">
          {treks.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-8 md:w-12 h-1 group"
            >
              <div className={`absolute inset-0 bg-white/20 transition-all duration-300 group-hover:bg-white/40 ${index === currentIndex ? 'h-1.5 -top-0.5' : ''}`} />
              {index === currentIndex && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-blue-500 z-10"
                  transition={{ duration: 8, ease: "linear" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-12 right-12 text-white/50 font-serif text-2xl hidden md:block z-20">
        <span className="text-white text-4xl font-bold">0{currentIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>0{treks.length}</span>
      </div>
    </section>
  );
}