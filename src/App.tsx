import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <ErrorBoundary fallback={<div className="p-4 bg-red-100 text-red-800">Navigation error. Please refresh the page.</div>}>
          <Navbar />
        </ErrorBoundary>
        
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
        
        <ErrorBoundary fallback={<div className="mt-auto"></div>}>
          <Footer />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={null}>
          <ChatWidget />
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App; 