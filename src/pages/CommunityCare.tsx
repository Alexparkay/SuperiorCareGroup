import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

type TabContentKey = 'independence' | 'community' | 'wellbeing';

interface TabContent {
  title: string;
  content: string;
  image: string;
  features: string[];
}

const CommunityCare = () => {
  const [activeTab, setActiveTab] = useState<TabContentKey>('independence');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const services = [
    {
      title: 'Learning Disabilities Support',
      description: 'Specialized support services that promote independence and skill development for individuals with learning disabilities.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Mental Health Support',
      description: 'Compassionate care and support for individuals managing mental health challenges, focusing on wellbeing and recovery.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Domiciliary Care',
      description: 'Personalized care services delivered in your own home, supporting your independence and quality of life.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  const communitySupport = [
    {
      title: 'Personalized Support Plans',
      description: 'Tailored care programs designed around your unique needs and goals, ensuring you receive the right support at the right time.',
      image: images.communitySupport.personalizedSupport,
    },
    {
      title: 'Skills Development',
      description: 'Practical support and guidance to help you build confidence and independence in daily activities.',
      image: images.communitySupport.skillsDevelopment,
    },
    {
      title: 'Social Integration',
      description: 'Regular community activities and programs that promote connection, engagement, and personal growth.',
      image: images.communitySupport.socialIntegration,
    },
  ];

  const journeySteps = [
    {
      title: "Free Initial Assessment",
      description: "We start with a comprehensive assessment of your needs, preferences, and goals to create a personalized support plan.",
      icon: (
        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Personalized Care Plan",
      description: "Based on your assessment, we design a care plan that addresses your specific needs and empowers your independence.",
      icon: (
        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Matching with Support Team",
      description: "We carefully match you with support workers who have the right skills, experience, and personality to meet your needs.",
      icon: (
        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Support & Review",
      description: "We provide ongoing support, regular reviews, and adapt your care plan as your needs evolve to ensure the best outcomes.",
      icon: (
        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: "What is supported living?",
      answer: "Supported living provides personalized assistance to help individuals live independently in their own homes or in supported accommodation. Our services are tailored to each person's unique needs, focusing on building skills, confidence, and community connections."
    },
    {
      question: "Who is eligible for supported living services?",
      answer: "Our supported living services are available to adults with learning disabilities, mental health conditions, or those who need assistance to live independently. We conduct a free assessment to determine specific needs and create a personalized support plan."
    },
    {
      question: "How do you match support workers with clients?",
      answer: "We carefully match support workers based on skills, experience, personality, and shared interests. This ensures a positive relationship and effective support. Our team undergoes comprehensive training and background checks to provide the highest quality care."
    },
    {
      question: "How much does supported living cost?",
      answer: "Costs vary depending on individual needs and the level of support required. Many clients qualify for funding through local authorities or personal budgets. We offer a free assessment and can provide guidance on available funding options."
    },
    {
      question: "Can support hours be adjusted as needs change?",
      answer: "Absolutely. We regularly review care plans and adjust support hours as needs evolve. Our focus is on providing the right level of support to maximize independence while ensuring safety and wellbeing."
    }
  ];

  const tabContent: Record<TabContentKey, TabContent> = {
    independence: {
      title: "Building Independence",
      content: "Our supported living services focus on developing your skills and confidence to live as independently as possible. From daily living skills to community engagement, we provide the right balance of support and encouragement.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
      features: [
        "Personalized skill development programs",
        "Practical life skills training",
        "Confidence building activities",
        "Gradual support reduction as independence grows"
      ]
    },
    community: {
      title: "Community Integration",
      content: "Being part of a vibrant community is essential for wellbeing. We help you build meaningful connections in your local area through social activities, community events, and volunteer opportunities.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
      features: [
        "Community-based activities and events",
        "Social skills development",
        "Local volunteer opportunities",
        "Building sustainable community connections"
      ]
    },
    wellbeing: {
      title: "Holistic Wellbeing",
      content: "Your overall wellbeing is our priority. Our approach addresses physical, emotional, and mental health needs through comprehensive support services designed to enhance quality of life.",
      image: "https://images.unsplash.com/photo-1585845328103-dca52cbb9a89?auto=format&fit=crop&q=80",
      features: [
        "Physical health and activity support",
        "Emotional and mental wellbeing services",
        "Medication management assistance",
        "Regular wellbeing check-ins and reviews"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Supported Living | Superior Care Group</title>
        <meta name="description" content="Our Supported Living services provide personalized support to help individuals live independently in their own homes or in supported accommodation." />
        <meta name="keywords" content="supported living, independent living support, learning disability support, mental health support, care services" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={images.hero.supportedLiving}
              alt="Person receiving supported living care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Supported Living
                <span className="block text-amber-300">Independence with Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-8">
                Specialized support services that promote independence, confidence, and wellbeing
                in your local community.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transform hover:scale-105 transition-all shadow-lg"
              >
                Book Free Assessment
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Support You</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our holistic approach focuses on three key areas to help you thrive in your community
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('independence')}
                className={`px-5 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'independence' 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-gray-500 hover:text-amber-500'
                }`}
              >
                Building Independence
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`px-5 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'community' 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-gray-500 hover:text-amber-500'
                }`}
              >
                Community Integration
              </button>
              <button
                onClick={() => setActiveTab('wellbeing')}
                className={`px-5 py-3 font-medium text-lg transition-colors ${
                  activeTab === 'wellbeing' 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-gray-500 hover:text-amber-500'
                }`}
              >
                Holistic Wellbeing
              </button>
            </div>

            <div className="mt-8">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{tabContent[activeTab].content}</p>
                  <ul className="space-y-3">
                    {tabContent[activeTab].features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={tabContent[activeTab].image} 
                    alt={tabContent[activeTab].title} 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Narrative Section - Removing blue background, making more aesthetic */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">YOUR CARE PATHWAY</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Support Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the moment you contact us, we're committed to understanding your unique needs and providing personalized support every step of the way.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:flex justify-center mt-6">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section with Overlay Text - Removing box, making more aesthetic */}
        <div className="relative">
          <VideoWidget
            src={videos.find(v => v.section === 'community-care')?.src || '/videos/7522219-uhd_3840_2160_25fps.mp4'}
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Transforming Lives Through Support</h2>
                <p className="text-xl text-white mb-8 drop-shadow-md">
                  At Superior Care Group, we believe everyone deserves to live with dignity, independence, and purpose.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl"
                >
                  Start Your Journey Today
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content Section - Making more aesthetic like home page */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">TAILORED TO YOUR NEEDS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Support Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored care solutions that adapt to your needs and help you achieve your personal goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Programs Section - Making more aesthetic like home page */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">SUPPORT PROGRAMS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Independence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Supporting you every step of the way with programs that build confidence and capability
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communitySupport.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full mb-2">SUPERIOR CARE</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Keep similar style but improve aesthetics */}
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
                Everything you need to know about our supported living services
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
          </div>
        </section>

        {/* CTA Section - Enhanced with more aesthetics */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
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
              <span className="inline-block px-4 py-1 mb-6 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full">GET STARTED TODAY</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Take the first step towards enhanced independence and wellbeing. Our care experts are ready to create your personalized support plan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/contact"
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
                  href="tel:+443302236986"
                  className="group relative bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: 0330 223 6986
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CommunityCare; 