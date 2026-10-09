import { useState, useEffect } from 'react';

/**
 * Hook to dynamically discover and retrieve images from a Cloudinary folder via backend API
 * @param {string} folderName - e.g. "treks", "banners", "colway_expeditions/treks"
 * @param {number} maxResults - Max items to retrieve
 */
export default function useCloudinaryFolder(folderName = 'colway_expeditions', maxResults = 50) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
    const cleanFolder = folderName || 'Colway treks/Expeditions';

    fetch(`${baseUrl}/api/media?folder=${encodeURIComponent(cleanFolder)}&max_results=${maxResults}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch media from folder: ${folderName}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          if (data.success && Array.isArray(data.resources)) {
            setImages(data.resources);
          } else {
            setImages([]);
          }
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.warn(`Dynamic folder discovery error for ${folderName}:`, err.message);
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [folderName, maxResults]);

  return { images, loading, error };
}
