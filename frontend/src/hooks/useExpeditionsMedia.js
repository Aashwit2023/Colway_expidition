import { useState, useEffect } from 'react';

/**
 * Hook to retrieve all expedition photos grouped by specific subfolders
 * (e.g. "Colway treks/Expeditions/friendship-peak")
 */
export default function useExpeditionsMedia() {
  const [data, setData] = useState({
    general: [],
    byExpedition: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

    fetch(`${baseUrl}/api/media/expeditions`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch expeditions media');
        return res.json();
      })
      .then((json) => {
        if (isMounted) {
          setData({
            general: json.general || [],
            byExpedition: json.byExpedition || {},
            loading: false,
            error: null
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.warn('Expeditions media fetch error:', err.message);
          setData((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
