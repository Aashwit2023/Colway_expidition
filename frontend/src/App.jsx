import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: '100px',
          right: '20px',
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(255, 255, 255, 0.7)',
            color: '#1b365c',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: "'Lato', sans-serif",
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          },
          success: {
            style: {
              background: 'rgba(34, 197, 94, 0.8)', 
              color: '#fff',
              backdropFilter: 'blur(16px)',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#22c55e',
            },
          },
          error: {
            style: {
              background: 'rgba(239, 68, 68, 0.8)', 
              color: '#fff',
              backdropFilter: 'blur(16px)',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
        }}
      />
      <ScrollToTop />
      <Navbar />
      <main className="pt-[60px] md:pt-[80px]"> {/* Responsive offset for fixed navbar */}
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
