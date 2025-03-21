import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { images } from '../config/images';

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
      image: images.services.personalCare,
      link: '/home-care',
      features: ['Personal Care', 'Medication Support', 'Meal Preparation', '24/7 Care Available'],
    },
    {
      title: 'Dementia Care',
      description: 'Specialized dementia and Alzheimer\'s care delivered by trained professionals. Person-centered support that maintains dignity and familiar routines.',
      image: images.services.medicationManagement,
      link: '/home-care',
      features: ['Memory Support', 'Familiar Routines', 'Skilled Professionals', 'Family Guidance'],
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
      name: "Sarah Johnson",
      role: "Family Member",
      quote: "Superior Care Group provided exceptional care for my mother. Their staff was compassionate, reliable, and truly made a difference in her quality of life.",
      image: images.testimonials.client1,
      rating: 5,
    },
    {
      name: "Michael Peters",
      role: "Client",
      quote: "The support I've received has been life-changing. The carers are professional and have helped me maintain my independence while providing the assistance I need.",
      image: images.testimonials.client2,
      rating: 5,
    },
    {
      name: "Amanda Wright",
      role: "Healthcare Professional",
      quote: "As a healthcare professional, I've been impressed with the quality of care provided. They maintain high standards and truly put clients at the center of everything they do.",
      image: images.testimonials.client3,
      rating: 5,
    },
    {
      quote: "I wasn't sure about getting outside help at first, but my mum's carer Priya has been amazing! She remembers all the little things mum likes and even brings her favorite biscuits sometimes. It's not just about the care tasks - they've built a real connection.",
      author: "Mei Lin Cheng",
      relation: "Daughter of Home Care Client",
      image: "https://images.unsplash.com/photo-1557053815-9f79f70c7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      location: "Milton Keynes"
    },
    {
      quote: "The carers looking after my dad have been a godsend. There was a mix-up with timing once, but they sorted it quickly and were really apologetic. Dad can be stubborn (!) but they know how to get him to take his meds without any fuss. Worth every penny for the peace of mind.",
      author: "Rajiv Patel",
      relation: "Son of Home Care Client",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      location: "Milton Keynes"
    },
    {
      quote: "My aunt has dementia and gets confused easily. The SCG team has been so patient with her repeated questions and anxieties. They even helped sort out a plumbing issue once when I couldn't get there - totally beyond what they needed to do. Not perfect all the time (who is?), but genuinely caring people.",
      author: "Sophia Nowak",
      relation: "Niece of Dementia Care Client",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      location: "Newport Pagnell"
    },
    {
      quote: "Been using Superior Care for about 8 months now. Had to change carers once as the first one wasn't the right fit, but they listened to my concerns. Current team is brilliant - they don't rush through visits and actually take time to chat. The office sometimes takes a while to get back to you, but the care itself is top-notch.",
      author: "Amir Hassan",
      relation: "Home Care Client",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      location: "Bletchley"
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

  return (
    <>
      <Helmet>
        <title>Superior Care Group | Professional Home Care & Community Support Services</title>
        <meta name="description" content="Superior Care Group provides professional home care and community care services with compassionate, person-centered support for individuals of all needs." />
        <link rel="canonical" href="/" />
        
        {/* Social media meta tags */}
        <meta property="og:title" content="Superior Care Group | Professional Home Care & Community Support" />
        <meta property="og:description" content="Compassionate, professional care services tailored to individual needs. CQC-registered with expert staff." />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Superior Care Group | Home Care Specialists" />
        <meta name="twitter:description" content="Compassionate, professional care services tailored to individual needs." />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white max-w-3xl"
            >
              <div className="inline-block bg-blue-600/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-400/20">
                <span className="text-lg font-medium text-white">CQC Registered Care Provider</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl">
                Trusted Home Care
                <span className="block text-amber-400 mt-2">That Feels Like Family</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Professional, compassionate support for you and your loved ones. 
                Available 24/7 in Milton Keynes.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <a
                  href="#genuine-care"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-2xl"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="flex items-center justify-center relative z-10">
                    <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book Free Care Assessment</span>
                    <svg className="w-6 h-6 ml-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </a>
                <a
                  href="tel:01908522245"
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="flex items-center justify-center relative z-10">
                    <svg className="w-7 h-7 mr-3 animate-pulse text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Us: 01908 522245</span>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            >
              {trustSignals.map((signal, index) => (
                  <motion.div
                    key={signal.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                    className="flex flex-col items-center text-center"
                  >
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <div className="w-16 h-16 text-amber-400">{signal.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{signal.title}</h3>
                  <p className="text-sm text-blue-100">{signal.description}</p>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-100" id="learn-more">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Families Trust Us</h2>
              <p className="mt-4 text-xl text-gray-600">Our commitment to excellence in care</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="text-5xl font-bold mb-2">1,000+</div>
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

              {/* Carers Available */}
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
                    alt="Carers available"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl font-bold mb-2">80+</div>
                  <div className="text-xl font-medium mb-2">Carers Available</div>
                  <p className="text-blue-100 text-sm">Throughout Milton Keynes & Greater Milton Keynes</p>
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
        <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-1 w-12 bg-amber-400 rounded-full"></div>
                <span className="text-amber-600 font-medium uppercase tracking-wide text-sm">Tailored to Your Needs</span>
                <div className="h-1 w-12 bg-amber-400 rounded-full"></div>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Care Services</h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Professional care services personalized for your unique situation and requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col h-full transform hover:-translate-y-3 duration-500 border border-gray-100"
                >
                  <div className="relative h-80 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex items-end">
                      <div className="p-8 w-full">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="h-1 w-8 bg-amber-400 rounded-full"></div>
                          <span className="text-amber-300 text-sm font-medium uppercase tracking-wide">Superior Care</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-8 text-lg flex-grow">{service.description}</p>
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-700">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.link}
                      className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all text-lg"
                    >
                      <span>Learn More</span>
                      <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/7517080-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            </video>
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </div>
          
          {/* Overlaid text positioned to the left */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-1 w-12 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-400 font-medium uppercase tracking-wide text-sm">Care that transforms lives</span>
                </div>
                <h2 className="text-6xl font-bold mb-6 leading-tight text-white">
                  Compassionate Care <br/>
                  <span className="text-amber-400">In Action</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  See the Superior Care Group difference through our personalized, 
                  attentive services that make a real difference every day.
                </p>
                
                {/* Animated FAQ section */}
                <div className="mt-10 w-full max-w-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[200px]" // Increased height for larger text
                  >
                    {/* First FAQ - Shows for 10 seconds (0-10s mark) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 10,
                        times: [0, 0.1, 0.9, 1],
                        repeat: Infinity,
                        repeatDelay: 40,
                      }}
                      className="absolute inset-0"
                    >
                      <div className="mb-3">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
                          <p className="text-amber-300 font-medium text-xl">Can I choose specific times for care visits?</p>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl max-w-lg">
                        <p className="text-white text-xl leading-relaxed">
                          Yes! We work around your schedule to ensure care is delivered when you need it most. 
                          Our team collaborates with you to create a personalized timetable that suits your routine.
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Second FAQ - Shows for 10 seconds (10-20s mark) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0, 0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 60,
                        times: [0, 0.165, 0.166, 0.175, 0.32, 0.33],
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                    >
                      <div className="mb-3">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
                          <p className="text-amber-300 font-medium text-xl">How quickly can care be arranged?</p>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl max-w-lg">
                        <p className="text-white text-xl leading-relaxed">
                          We can often arrange care within 24-48 hours in urgent situations. 
                          Our streamlined assessment process ensures we understand your needs 
                          and match you with the right carer promptly.
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Third FAQ - Shows for 10 seconds (20-30s mark) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0, 0, 0, 0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 60,
                        times: [0, 0.32, 0.33, 0.33, 0.33, 0.34, 0.49, 0.5],
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                    >
                      <div className="mb-3">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
                          <p className="text-amber-300 font-medium text-xl">Will I have the same carer each time?</p>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl max-w-lg">
                        <p className="text-white text-xl leading-relaxed">
                          Continuity of care is one of our priorities. We assign a small, consistent 
                          team of carers to each client, allowing for genuine relationships to develop 
                          while ensuring reliable coverage during holidays and illness.
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Fourth FAQ - Shows for 10 seconds (30-40s mark) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 60,
                        times: [0, 0.49, 0.5, 0.5, 0.5, 0.5, 0.5, 0.51, 0.66, 0.67],
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                    >
                      <div className="mb-3">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
                          <p className="text-amber-300 font-medium text-xl">What if my care needs change over time?</p>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl max-w-lg">
                        <p className="text-white text-xl leading-relaxed">
                          Our care plans are flexible and regularly reviewed. As your needs evolve, 
                          we adapt our services accordingly—whether you need to increase hours, 
                          add specialized care, or reduce support as you regain independence.
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Fifth FAQ - Shows for 10 seconds (40-50s mark) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 60,
                        times: [0, 0.66, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.67, 0.68, 0.83, 0.84],
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                    >
                      <div className="mb-3">
                        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
                          <p className="text-amber-300 font-medium text-xl">Can I meet my carer before service begins?</p>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm px-6 py-5 rounded-xl max-w-lg">
                        <p className="text-white text-xl leading-relaxed">
                          Absolutely. We arrange introductory meetings before care starts so you can get to know 
                          your carer in a relaxed setting. This helps establish comfort and trust 
                          from the very beginning of your care journey.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-1 w-10 bg-amber-400 rounded-full"></div>
                <span className="text-amber-600 font-medium uppercase tracking-wide text-sm">Real Voices, Real Experiences</span>
                <div className="h-1 w-10 bg-amber-400 rounded-full"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Families Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Authentic experiences shared by families who've trusted us with their care needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-8 relative shadow-warm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100 shadow-md"
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-amber-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {testimonial.rating < 5 && [...Array(5 - testimonial.rating)].map((_, i) => (
                          <svg
                            key={i + testimonial.rating}
                            className="w-5 h-5 text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">
                          {testimonial.rating === 5 ? "Excellent" : testimonial.rating === 4 ? "Very Good" : "Good"}
                        </span>
                      </div>
                      <svg className="w-10 h-10 text-amber-200 absolute top-6 right-8" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 mb-4 text-lg italic">{testimonial.quote}</p>
                      <div className="flex justify-between items-end">
                        <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-blue-600">{testimonial.relation}</p>
                        </div>
                        <div className="flex items-center text-amber-600 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <div className="flex -space-x-4">
                {testimonials.map((testimonial, index) => (
                  <img 
                    key={index}
                    src={testimonial.image} 
                    alt="Client" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center border-2 border-white text-blue-900 font-bold text-xs shadow-md">30+</div>
              </div>
              <p className="text-lg text-gray-700">Join the <span className="font-semibold">1,000+ families</span> who trust Superior Care Group</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                <span>Read More Reviews</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="genuine-care" className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="max-w-xl text-center lg:text-left"
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Ready to Experience <span className="text-amber-400">Genuine Care?</span></h2>
                <p className="text-xl text-blue-100 mb-8">
                  Our dedicated team is ready to provide exceptional care tailored to your unique needs. 
                  Let us help you or your loved one live with dignity, comfort, and joy.
                </p>
                
                <div className="mt-12 flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="flex -space-x-4">
                    <img src="https://images.unsplash.com/photo-1557053815-9f79f70c7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Client" className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover" />
                    <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Client" className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover" />
                    <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center border-2 border-blue-600 text-blue-900 font-bold text-xs">15+</div>
                  </div>
                  <p className="text-blue-100">Join over <span className="font-bold text-white">1,000 families</span> who trust Superior Care Group</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl w-full max-w-xl"
              >
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 -mt-16 rounded-xl p-6 shadow-lg">
                  <h3 className="text-blue-900 font-bold text-2xl">Book Your Free Assessment</h3>
                  <p className="text-blue-900/70">Complete this short form to get started with your care journey</p>
                </div>
                
                <form className="mt-8 space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Type of Care Needed</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                      <option value="" className="bg-blue-800">Select care type</option>
                      <option value="home-care" className="bg-blue-800">Home Care</option>
                      <option value="community-care" className="bg-blue-800">Community Care</option>
                      <option value="learning-disabilities" className="bg-blue-800">Learning Disabilities Support</option>
                      <option value="mental-health" className="bg-blue-800">Mental Health Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Additional Information</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      placeholder="Please tell us about your care needs..."
                      rows={3}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-4 px-6 rounded-lg font-bold text-lg hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg mt-4 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                    Book My Free Assessment
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-center text-blue-100 pt-2">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                      <span>Secure & Confidential</span>
              </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>24hr Response</span>
                    </div>
                  </div>
                </form>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-1 w-10 bg-amber-400 rounded-full"></div>
                <span className="text-amber-600 font-medium uppercase tracking-wide text-sm">Industry Leadership</span>
                <div className="h-1 w-10 bg-amber-400 rounded-full"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognized Excellence in Care</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by care professionals, families, and healthcare partners
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-warm border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CQC Regulated</h3>
                <p className="text-gray-600 mb-4">
                  Our services are regularly inspected and regulated by the Care Quality Commission, ensuring we maintain the highest standards of care.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                  View Our CQC Rating
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-warm border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">NHS Approved Provider</h3>
                <p className="text-gray-600 mb-4">
                  We work in partnership with the NHS and local authorities to deliver continuing healthcare and reablement services across Milton Keynes.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                  Our Healthcare Partnerships
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-warm border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Award-Winning Training</h3>
                <p className="text-gray-600 mb-4">
                  Our care professionals undergo industry-leading training programs, including specialized dementia care, end of life care, and medication management.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                  Our Training Standards
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Download Our Free Care Guide
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Get expert advice on choosing the right care service for your loved one.
                    Our comprehensive guide includes:
                  </p>
                  <ul className="space-y-3 text-blue-100 mb-4">
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
                <div className="bg-white text-gray-900 p-5 rounded-xl shadow-lg">
                  <form className="space-y-3">
                    <div>
                      <label htmlFor="guide-name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="guide-name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="guide-email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="guide-email"
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

      </main>
    </>
  );
};

export default Home; 