import { useState } from 'react';
import { buildCloudinaryUrl, buildSrcSet, extractPublicId } from '../utils/cloudinary.js';

/**
 * Production-Grade Cloudinary Image Component
 *
 * Features:
 * - Automatic format (f_auto) and quality (q_auto) optimization
 * - Responsive srcset across standard breakpoints (Mobile -> Tablet -> Desktop -> Retina)
 * - Zero Cumulative Layout Shift (CLS) with aspect-ratio and skeleton shimmer
 * - Lazy loading for below-fold images, eager loading for hero/LCP images
 * - Correct object-fit containment for QR codes/logos, cover for cards/banners
 * - Graceful fallback on error
 */
export default function CloudinaryImage({
  src,
  alt = 'Expedition image',
  className = '',
  width,
  height,
  aspectRatio,
  crop,
  quality = 'auto',
  format = 'auto',
  priority = false,
  objectFit = 'cover',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px',
  customWidths = [360, 640, 768, 1024, 1280, 1600],
  onLoad,
  onError,
  style = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Validate or fallback source
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 text-slate-400 text-xs ${className}`}
        style={{ aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : '16/9'), ...style }}
      >
        No image
      </div>
    );
  }

  const effectiveCrop = crop || (width && height ? 'fill' : 'limit');
  const mainUrl = buildCloudinaryUrl(src, {
    width: width || (priority ? 1600 : 1024),
    height,
    crop: effectiveCrop,
    quality,
    format,
    aspectRatio
  });

  const srcSetString = buildSrcSet(src, customWidths, {
    crop: effectiveCrop,
    quality,
    format,
    aspectRatio
  });

  const handleImageLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleImageError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(width && height && !aspectRatio ? { aspectRatio: `${width} / ${height}` } : {}),
    ...style
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {/* Shimmer skeleton while loading */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Graceful fallback on error */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-500 text-xs p-4 text-center">
          <svg className="w-8 h-8 text-slate-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Image preview unavailable</span>
        </div>
      ) : (
        <img
          src={mainUrl}
          srcSet={srcSetString}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            objectFit,
            width: '100%',
            height: '100%',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: isLoaded ? 1 : 0
          }}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
