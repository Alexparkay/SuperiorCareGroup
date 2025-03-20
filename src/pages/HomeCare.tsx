import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

const HomeCare = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const services = [
    {
      id: 'personal-care',
      title: 'Personal Care',
      description: 'Compassionate assistance with daily activities to help maintain dignity, independence, and wellbeing.',
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: [
        'Bathing and personal hygiene assistance',
        'Dressing and grooming support',
        'Toileting and continence care',
        'Mobility and transfer assistance',
        'Morning and evening routines'
      ],
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80'
    },
    {
      id: 'medication-management',
      title: 'Medication Management',
      description: 'Professional oversight to ensure medications are taken safely, correctly, and on schedule, providing peace of mind for families.',
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        'Medication reminders and supervision',
        'Prescription refill management',
        'Medication organization systems',
        'Side effect monitoring',
        'Coordination with healthcare providers'
      ],
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80'
    },
    {
      id: 'meal-preparation',
      title: 'Meal Preparation',
      description: 'Customized nutritional support from grocery shopping to preparing delicious meals that accommodate dietary needs and preferences.',
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        'Grocery shopping and meal planning',
        'Special diet accommodation',
        'Meal preparation and cooking',
        'Assistance with eating when needed',
        'Kitchen cleanliness and organization'
      ],
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80'
    },
    {
      id: 'companionship',
      title: 'Companionship Care',
      description: 'Meaningful social connection and emotional support to reduce isolation and enhance quality of life through engaging activities and conversation.',
      icon: (
        <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        'Meaningful conversation and companionship',
        'Cognitive stimulation through games and activities',
        'Assistance with hobbies and interests',
        'Accompaniment to social events and appointments',
        'Regular social interaction and emotional support'
      ],
      image: 'https://images.unsplash.com/photo-1516641293893-6abb248367ed?auto=format&fit=crop&q=80'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Care Plans',
      description: 'Every care plan is custom-designed around your unique needs, preferences, and goals, ensuring care that perfectly matches your lifestyle.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Exceptional Caregivers',
      description: 'Our rigorous selection process and ongoing training ensure you receive care from compassionate, skilled professionals who treat you like family.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Scheduling',
      description: 'From a few hours per week to round-the-clock support, our flexible scheduling adapts to your changing needs and preferences.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Continuity of Care',
      description: 'Experience consistent, reliable care with matched caregivers who understand your preferences and become trusted companions.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      description: 'Our support team is available around the clock to respond to your needs, questions, or concerns—whenever you need assistance.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs—our clear, simple pricing structure ensures you understand exactly what you are paying for.',
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // FAQ Section data with objection handling
  const faqs = [
    {
      question: "How much does home care cost?",
      answer: "Our care services start from £22 per hour, with the exact cost depending on your specific needs and the level of care required. Many clients qualify for financial assistance through local authorities or NHS funding. During your free assessment, we'll discuss all pricing details and help identify any funding options you may be eligible for."
    },
    {
      question: "How quickly can care services start?",
      answer: "We understand that care needs can arise unexpectedly. In most cases, we can start providing care within 24-48 hours after completing your assessment. For complex care needs, we might need a few days to ensure we match you with the right caregivers and create a comprehensive care plan."
    },
    {
      question: "What if I don't like my caregiver?",
      answer: "Your comfort and satisfaction are our top priorities. If you're not completely happy with your caregiver for any reason, simply let us know, and we'll find a more suitable match immediately. We carefully consider personality, interests, and preferences when matching caregivers to ensure a positive relationship."
    },
    {
      question: "What qualifications do your caregivers have?",
      answer: "All our caregivers undergo thorough background checks, have relevant certifications (such as NVQ Level 2 or higher in Health and Social Care), and receive ongoing training in specialized care techniques. Many have additional qualifications in areas like dementia care, medication management, and mobility assistance."
    },
    {
      question: "What if my care needs change over time?",
      answer: "Our care plans are designed to be flexible and adaptable. We conduct regular reviews to ensure your care continues to meet your changing needs. Whether you need to increase, decrease, or modify your services, we can quickly adjust your care plan accordingly with no minimum contract period."
    },
    {
      question: "Is there a minimum number of hours required?",
      answer: "We understand that everyone's care needs are different. While we typically recommend a minimum of 1 hour per visit to ensure quality care delivery, we offer flexible scheduling without long-term commitments. We can provide anything from a few hours of support weekly to 24/7 live-in care."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Care Services | Superior Care Group - Professional In-Home Care</title>
        <meta name="description" content="Expert home care services delivered with compassion. From personal care to medication management, we provide professional support that helps you maintain independence at home." />
        <meta name="keywords" content="home care, personal care, medication management, meal preparation, elderly care, home support, care at home, professional carers, Milton Keynes, Devon, London" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={images.hero.homeCare}
              alt="Home Care Hero"
              className="object-cover w-full h-full opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-700/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <span className="inline-block px-4 py-1 mb-6 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full">SUPERIOR CARE IN YOUR HOME</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] drop-shadow-lg">
                Professional Care
                <span className="block text-amber-300 mt-2">In Your Home</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-8">
                Experience personalized care that helps you maintain 
                independence and quality of life in the comfort 
                of your own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  Book Free Assessment
                </Link>
                <a
                  href="tel:+441908522245"
                  className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Call: 01908 522245
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">COMPREHENSIVE SUPPORT</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Home Care Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide a wide range of personalized care services designed to support your 
                independence and enhance your quality of life in the comfort of your own home.
              </p>
            </motion.div>

            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id === activeService ? null : service.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-3 rounded-full font-medium text-sm transition-colors ${
                    activeService === service.id 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  } shadow-sm`}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all ${
                    activeService === service.id ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                        CARE SERVICE
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center -mt-16 mb-4">
                      <div className="rounded-full p-4 bg-gradient-to-br from-blue-50 to-white shadow-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        to="/contact"
                        className="inline-block py-2 px-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg text-sm font-medium transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Service Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-white rounded-xl p-8 shadow-warm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Care Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Initial Assessment</h4>
                  <p className="text-gray-600">We conduct a thorough needs assessment to understand your unique requirements and preferences.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Care Plan Development</h4>
                  <p className="text-gray-600">We create a personalized care plan tailored to your specific needs, goals, and lifestyle.</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Ongoing Support</h4>
                  <p className="text-gray-600">We provide continuous care and regularly review and adapt your care plan as your needs evolve.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full-screen Video Section */}
        <div className="relative">
          <VideoWidget
            src={videos.find(v => v.section === 'home-care')?.src || '/videos/7517382-uhd_3840_2160_25fps.mp4'}
            fullScreen={true}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Personalized Home Care</h2>
                <p className="text-xl text-white mb-8 drop-shadow-md">
                  We tailor our services to meet your unique needs, ensuring you receive the right care at the right time.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl"
                >
                  Start Your Care Journey Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Section */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Home Care</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience exceptional care built on family values, professional expertise, and a genuine commitment to enhancing your quality of life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-500"></div>
                </motion.div>
              ))}
            </div>

            {/* Additional Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 bg-white rounded-xl overflow-hidden shadow-warm"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">CQC Regulated</h4>
                  <p className="text-gray-600">Fully compliant with Care Quality Commission standards for safe, effective care</p>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsive Support</h4>
                  <p className="text-gray-600">Immediate assistance and coordination whenever you need it</p>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center">
                  <svg className="w-12 h-12 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Family-Run Values</h4>
                  <p className="text-gray-600">Care delivered with the compassion and integrity that only a family business can provide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">COMMON QUESTIONS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to your questions about our home care services and how we can support you or your loved one
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-6">
                Have more questions? We're here to help you understand our services better.
              </p>
              <a
                href="tel:+441908522245"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us today at 01908 522245
              </a>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute top-[40%] right-[15%] w-72 h-72 rounded-full bg-amber-500/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl"
            >
              <span className="inline-block px-4 py-1 mb-6 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full">START YOUR CARE JOURNEY</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Exceptional Care Starts with a Conversation
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Take the first step toward peace of mind. Our care experts are ready to create your personalized care plan with a free, no-obligation assessment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/"
                  className="group relative bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Free Assessment
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <a
                  href="tel:+441908522245"
                  className="group relative bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: 01908 522245
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
              <p className="text-blue-200 mt-8 text-sm">
                No obligation, no pressure—just expert guidance to help you make informed decisions about your care needs.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeCare; 