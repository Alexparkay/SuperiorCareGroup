import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import HomeCare from './pages/HomeCare';
import CommunityCare from './pages/CommunityCare';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import LocalTeam from './pages/LocalTeam';

// ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// FooterWrapper component to conditionally render the Footer
function FooterWrapper() {
  const { pathname } = useLocation();
  
  // Don't show footer on the contact page
  if (pathname === '/contact') {
    return null;
  }
  
  return (
    <ErrorBoundary fallback={<div className="mt-auto"></div>}>
      <Footer />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen bg-gray-50">
        <ErrorBoundary fallback={<div className="p-4 bg-red-100 text-red-800">Navigation error. Please refresh the page.</div>}>
          <Navbar />
        </ErrorBoundary>
        
        {/* ScrollToTop component to ensure page starts at the top */}
        <ScrollToTop />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            } />
            <Route path="/home-care" element={<HomeCare />} />
            <Route path="/community-care" element={<CommunityCare />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/your-local-team" element={<LocalTeam />} />
          </Routes>
        </AnimatePresence>
        
        {/* Conditionally render the Footer */}
        <FooterWrapper />
        
        <ErrorBoundary fallback={null}>
          <ChatWidget />
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App; 