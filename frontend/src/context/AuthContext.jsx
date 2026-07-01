import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('colway_user');
    const loginTimestamp = localStorage.getItem('colway_login_timestamp');

    if (storedUser) {
      let isExpired = false;
      if (loginTimestamp) {
        const diffTime = Date.now() - parseInt(loginTimestamp, 10);
        const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
        if (diffTime > sevenDaysInMs) {
          isExpired = true;
        }
      } else {
        // Fallback: If no timestamp exists, set it to current time to start a 7-day window.
        localStorage.setItem('colway_login_timestamp', Date.now().toString());
      }

      if (isExpired) {
        localStorage.removeItem('colway_user');
        localStorage.removeItem('colwayAuthEmail');
        localStorage.removeItem('colway_login_timestamp');
        setUser(null);
      } else {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Failed to parse stored user:', error);
          localStorage.removeItem('colway_user');
          localStorage.removeItem('colwayAuthEmail');
          localStorage.removeItem('colway_login_timestamp');
        }
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('colway_user', JSON.stringify(userData));
    localStorage.setItem('colway_login_timestamp', Date.now().toString());
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('colway_user');
    localStorage.removeItem('colwayAuthEmail');
    localStorage.removeItem('colway_login_timestamp');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
