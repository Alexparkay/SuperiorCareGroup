import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';

// Declare the CQCWidget type for TypeScript
declare global {
  interface Window {
    CQCWidget?: {
      init: () => void;
    };
  }
}

const Home = () => {
  // Initialize CQC widget when component mounts
  useEffect(() => {
    // Safer implementation that won't break the page if the widget fails to load
    try {
      const loadWidget = () => {
        if (window.CQCWidget) {
          try {
            window.CQCWidget.init();
          } catch (error) {
            console.error('Error initializing CQC widget:', error);
          }
        }
      };

      // Check if script is already loaded
      if (document.querySelector('script[src="https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js"]')) {
        loadWidget();
      } else {
        // If not loaded, create a script element and append it to the document
        const script = document.createElement('script');
        script.src = 'https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js';
        script.async = true;
        script.onload = loadWidget;
        script.onerror = () => console.error('Failed to load CQC widget script');
        document.body.appendChild(script);
      }
    } catch (error) {
      console.error('Error setting up CQC widget:', error);
    }

    // No cleanup needed - we'll let the script remain on the page
    return () => {};
  }, []);

  const services = [
    {
      title: 'Home Care',
      description: 'Expert 24/7 home care services including personal care, medication management, and companionship. CQC-registered carers supporting independence and dignity.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80',
      link: '/home-care',
      features: ['Personal Care', 'Medication Support', 'Meal Preparation', '24/7 Care Available'],
    },
    {
      title: 'Dementia Care',
      description: 'Specialized dementia and Alzheimer\'s care delivered by trained professionals. Person-centered support that maintains dignity and familiar routines.',
      image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?auto=format&fit=crop&q=80',
      link: '/home-care#dementia',
      features: ['Memory Support', 'Safety Monitoring', 'Family Support', 'Specialist Training'],
    },
    {
      title: 'Supported Living',
      description: 'Empowering support for learning disabilities and mental health. Promoting independence and community integration with compassionate care.',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80',
      link: '/community-care',
      features: ['Skills Development', 'Social Integration', 'Activity Support', 'Personal Growth'],
    },
  ];

  const testimonials = [
    {
      quote: "The compassionate care and genuine warmth shown by Superior Care Group has transformed my mother's life. Their person-centered approach means she's not just receiving care; she's thriving with dignity and independence.",
      author: "Sarah Mitchell",
      relation: "Daughter of Home Care Client",
      image: "/images/testimonials/sarah-m.jpg",
      rating: 5,
      location: "Milton Keynes"
    },
    {
      quote: "Superior Care Group has been exceptional in providing care for my father. Their professional team goes above and beyond to ensure he receives the best possible support while maintaining his independence.",
      author: "David Wilson",
      relation: "Son of Home Care Client",
      image: "/images/testimonials/david-w.jpg",
      rating: 5,
      location: "Milton Keynes"
    }
  ];

  const trustSignals = [
    {
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "CQC Registered",
      description: "Fully compliant with Care Quality Commission standards"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: "DBS Checked Staff",
      description: "All carers undergo enhanced background checks"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Medication Certified",
      description: "Qualified to manage and administer medications"
    }
  ];

  const impactStats = [
    { number: "1,200+", label: "Families Supported", description: "Trusted home care services delivered" },
    { number: "98%", label: "Client Satisfaction", description: "Person-centered care excellence" },
    { number: "15+", label: "Years of Experience", description: "Professional care expertise" },
    { number: "24/7", label: "Care Available", description: "Round-the-clock support" }
  ];

  return (
    <>
      <Helmet>
        <title>Superior Care Group | Professional Home Care & Community Support Services</title>
        <meta name="description" content="Award-winning home care services in Milton Keynes. Specializing in dementia care, elderly support & learning disability care. CQC registered, DBS checked carers. Book a free care assessment today." />
        <meta name="keywords" content="home care services, dementia care, elderly care, learning disability support, live-in care, respite care, personal care, medication management, CQC registered care, Milton Keynes care" />
        <link rel="canonical" href="https://superiorcaregroup.co.uk" />
        <meta property="og:title" content="Superior Care Group | Professional Home Care Services" />
        <meta property="og:description" content="Trusted home care services delivered with compassion in Milton Keynes. CQC registered, experienced carers providing personalized support for elderly care, dementia care & disability support." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://superiorcaregroup.co.uk" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-end justify-start">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/videos/7522362-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="relative w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-xl ml-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1] drop-shadow-lg">
                Trusted Home Care
                <span className="block text-blue-600 mt-2">That Feels Like Family</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed max-w-lg drop-shadow-md">
                CQC registered care services providing professional, 
                compassionate support for you and your loved ones. 
                Available 24/7 in Milton Keynes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#booking-form"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-xl"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="flex items-center justify-center relative z-10">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book Free Care Assessment</span>
                    <svg className="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </a>
                <a
                  href="tel:01908522245"
                  className="bg-white/20 backdrop-blur-sm border border-white text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2 animate-pulse text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now: 01908 522245
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {trustSignals.slice(0, 3).map((signal, index) => (
                  <motion.div
                    key={signal.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    className="flex flex-col items-center text-center"
                  >
                    {signal.icon}
                    <h3 className="text-base font-semibold text-white mt-2">{signal.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-100" id="learn-more">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Families Trust Us</h2>
              <p className="mt-4 text-xl text-gray-600">Our commitment to excellence in care</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Families Supported */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80"
                    alt="Families supported"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl font-bold mb-2">12,000+</div>
                  <div className="text-xl font-medium mb-2">Families Supported</div>
                  <p className="text-blue-100 text-sm">Trusted home care services delivered with compassion</p>
                </div>
              </motion.div>

              {/* Satisfaction Rate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                    alt="Client satisfaction"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-xl font-medium mb-2">Satisfaction Rate</div>
                  <p className="text-blue-100 text-sm">Excellence in person-centered care delivery</p>
                </div>
              </motion.div>

              {/* Years of Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                    alt="Years of experience"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl font-bold mb-2">13+</div>
                  <div className="text-xl font-medium mb-2">Years of Experience</div>
                  <p className="text-blue-100 text-sm">Professional expertise in quality care</p>
                </div>
              </motion.div>

              {/* 24/7 Care */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80"
                    alt="24/7 care availability"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-xl font-medium mb-2">Care Available</div>
                  <p className="text-blue-100 text-sm">Round-the-clock support when you need it</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16 bg-gradient-to-b from-blue-100 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-amber-400 mx-auto"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-warm text-center relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-amber-400 rounded-full p-3 shadow-lg">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-900 italic mt-8 mb-6">
                "To provide exceptional care that enriches lives, preserves dignity, and fosters independence."
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Superior Care Group, we are dedicated to delivering personalized care solutions that prioritize the unique needs of each individual. 
                We believe that quality care extends beyond physical support – it encompasses emotional wellbeing, social connection, and 
                empowering each person to live their life to the fullest.
              </p>
              <div className="flex justify-center space-x-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Trust</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Community</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Dignity</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Care Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional care services tailored to your unique needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all flex flex-col h-full transform hover:-translate-y-2 duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                      <h3 className="text-2xl font-bold text-white p-6">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-700">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                    >
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Full-screen video */}
          <div className="absolute inset-0 w-full h-full">
            <VideoWidget
              src={videos.find(v => v.section === 'home')?.src || '/videos/7522362-uhd_3840_2160_25fps.mp4'}
              className="w-full h-full"
            />
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
          
          {/* Overlaid text positioned to the left */}
          <div className="relative h-full flex items-center">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-white"
              >
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  See Our Care <span className="text-amber-400">in Action</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Experience the Superior Care Group difference through our compassionate, 
                  professional services that transform lives every day.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  Book a Free Assessment
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Download Our Free Care Guide
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Get expert advice on choosing the right care service for your loved one.
                    Our comprehensive guide includes:
                  </p>
                  <ul className="space-y-3 text-blue-100 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Types of care services explained
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Funding options and cost guidance
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Questions to ask care providers
                    </li>
                  </ul>
                </div>
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-2 px-4 rounded-md font-semibold hover:from-amber-300 hover:to-amber-400 transition-all"
                    >
                      Download Free Guide
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Families Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from families who've trusted us with their care needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-8 relative shadow-warm"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-200"
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-blue-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <svg className="w-12 h-12 text-amber-200 absolute top-6 right-8" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 mb-4 text-lg italic">{testimonial.quote}</p>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-blue-600">{testimonial.relation}</p>
                      <p className="text-sm text-amber-600">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Genuine Care?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Book your free care assessment today and discover how we can support you or your loved one
                with professional, compassionate care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="#booking-form"
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Free Assessment
                </a>
                <a
                  href="tel:01908522245"
                  className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 01908 522245
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Widget Section */}
        <section id="booking-form" className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Assessment</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tell us about your care needs and we'll be in touch within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-warm overflow-hidden"
            >
              <div className="p-8">
                <motion.form
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                    alert("Thank you for your inquiry. Our care team will contact you within 24 hours.");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="homeFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="homeFirstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="homeLastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="homeLastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="homeEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="homeEmail"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="homePhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="homePhone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="homeService" className="block text-sm font-medium text-gray-700 mb-1">
                      Type of Care Needed
                    </label>
                    <select
                      id="homeService"
                      name="service"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select Care Type</option>
                      <option value="home-care">Home Care</option>
                      <option value="community-care">Community Care</option>
                      <option value="learning-disabilities">Learning Disabilities Support</option>
                      <option value="mental-health">Mental Health Support</option>
                      <option value="not-sure">Not Sure / Need Advice</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="homeMessage" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="homeMessage"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Please tell us about your care needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-warm"
                  >
                    Submit Request
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    We'll respond to your inquiry within 24 hours
                  </p>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CQC Widget Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CQC Registered Provider</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are fully registered with the Care Quality Commission
              </p>
            </motion.div>
            <div className="flex justify-center">
              <div className="cqc-widget bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <div 
                  id="cqc-widget-placeholder" 
                  data-id="1-392755073" 
                  data-host="https://www.cqc.org.uk" 
      