import { useState, useEffect } from 'react';

/**
 * Hook to retrieve all trek photos dynamically grouped by trek subfolders
 * (e.g. "Colway treks/Treks/kedarkantha")
 */
export default function useTreksMedia() {
  const [data, setData] = useState({
    general: [],
    byTrek: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

    fetch(`${baseUrl}/api/media/treks`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch treks media');
        return res.json();
      })
      .then((json) => {
        if (isMounted) {
          setData({
            general: json.general || [],
            byTrek: json.byTrek || {},
            loading: false,
            error: null
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.warn('Treks media fetch error:', err.message);
          setData((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
