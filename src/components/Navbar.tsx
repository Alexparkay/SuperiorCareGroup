import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  // Handle scroll behavior: hide at top, show when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show navbar when scrolling down and hide when at the top
      if (currentScrollPos > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Supported Living', href: '/community-care' },
    { name: 'Home Care', href: '/home-care' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          visible ? "bg-black/10 backdrop-blur-sm py-5 shadow-lg translate-y-0" : "py-6 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex-shrink-0"
            >
              <img
                src="/images/logo/SCG-Logo.png"
                alt="Superior Care Group"
                className="h-14 w-auto opacity-90"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-white drop-shadow-md'
                      : 'text-white/95 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/#booking-widget"
                className="ml-4 px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 bg-white text-blue-900 hover:bg-white/90"
              >
                Get Care Support
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-white hover:text-white/80"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <nav className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white/95 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <img
                  src="/images/logo/SCG-Logo.png"
                  alt="Superior Care Group"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/#booking-widget"
                    className="block w-full px-6 py-3 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-warm hover:shadow-warm-lg transition-all transform hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Care Support
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 