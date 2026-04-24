import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-[60px] md:pt-[80px]"> {/* Responsive offset for fixed navbar */}
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
