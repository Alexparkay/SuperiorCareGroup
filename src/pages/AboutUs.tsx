import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';
import React from 'react';

const AboutUs = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [familyPortrait, setFamilyPortrait] = useState<number>(0);

  const familyPortraits = [
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      alt: "The Basi Family Leadership",
      caption: "Leadership with vision and compassion"
    },
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80",
      alt: "Multi-generational Family Business",
      caption: "Three generations of exceptional care"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80", 
      alt: "Superior Care Team",
      caption: "A legacy of professional care"
    },
    {
      src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
      alt: "Family-led Care",
      caption: "Care that feels like family"
    }
  ];

  // Add ref for family legacy section
  const familyLegacyRef = React.useRef<HTMLDivElement>(null);

  const scrollToFamilyLegacy = () => {
    familyLegacyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeline = [
    {
      year: "2010",
      title: "Our Beginning",
      description: "Founded by the Basi family after their personal experience with home care needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Opened our first branch office and expanded services across Milton Keynes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      year: "2018",
      title: "CQC Excellence",
      description: "Achieved 'Outstanding' rating from Care Quality Commission.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched our digital care management system for enhanced service delivery.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Recognized for outstanding contribution to community care services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      alt: "Care team meeting",
      caption: "Our dedicated care team"
    },
    {
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
      alt: "Client interaction",
      caption: "Building meaningful relationships"
    },
    {
      src: "https://images.unsplash.com/photo-1585845328103-dca52cbb9a89?auto=format&fit=crop&q=80",
      alt: "Training session",
      caption: "Continuous professional development"
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
      alt: "Community event",
      caption: "Community engagement"
    }
  ];

  const testimonials = [
    {
      quote: "The care and attention my mother receives is exceptional. The team truly treats her like family.",
      author: "Sarah Johnson",
      role: "Daughter of Client",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "Working for Superior Care Group feels like being part of a family. The support and training are outstanding.",
      author: "Michael Chen",
      role: "Care Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      quote: "Their commitment to quality care and family values sets them apart. I couldn't be happier with their service.",
      author: "David Thompson",
      role: "Client",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];

  const values = [
    {
      title: 'Compassion',
      description: 'We provide care with empathy, understanding, and respect for every individual.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in care delivery and service quality.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in all our actions.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Family',
      description: 'We treat our clients and team members as part of our extended family, creating a supportive community built on trust and belonging.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const familyStory = {
    title: "The Basi Family Story",
    content: [
      {
        heading: "A Journey Born from Personal Experience",
        text: "In 2010, when Arjun Basi's grandmother needed care at home, the family discovered firsthand the challenges of finding quality, compassionate care services. They created Superior Care Group to deliver the kind of personalized care they would want for their own family members."
      },
      {
        heading: "Family Values at Our Core",
        text: "Today, the Basi family remains actively involved in day-to-day operations. As Manjit Basi says, 'When you're a family business, your reputation is deeply personal. We put our family name behind every aspect of our service.'"
      },
      {
        heading: "Growing Our Extended Family",
        text: "We've built a team who shares our values. Beant Basi explains: 'We don't just hire employees; we welcome new members into our family. This extends to how we treat our clients too, building relationships that go beyond basic care provision.'"
      }
    ]
  };

  const teamMembers = [
    {
      name: 'Arjun Basi',
      role: 'CEO',
      image: images.team.leadership,
      description: 'Leading Superior Care Group with a vision for excellence in care services. With over 15 years of experience in the healthcare sector, Arjun brings strategic leadership and a passion for transforming care delivery.',
    },
    {
      name: 'Manjit Basi',
      role: 'Registered Manager',
      image: images.team.caregivers,
      description: 'Overseeing care quality and regulatory compliance across all services. Manjit ensures that our care delivery meets and exceeds CQC standards while maintaining our commitment to person-centered care.',
    },
    {
      name: 'Beant Basi',
      role: 'Branch Manager',
      image: images.team.support,
      description: 'Managing day-to-day operations and ensuring service delivery excellence. Beant coordinates our care teams and administrative functions to deliver seamless support to our clients.',
    },
    {
      name: 'Rachel Varney',
      role: 'HR',
      image: images.team.leadership,
      description: 'Responsible for recruitment, staff development, and organizational culture. Rachel ensures we attract and retain the best talent while fostering a supportive and growth-oriented environment.',
    },
    {
      name: 'Magnus Noble',
      role: 'HR',
      image: images.team.caregivers,
      description: 'Supporting team growth and professional development initiatives. Magnus focuses on training programs and career advancement opportunities that empower our care professionals.',
    },
    {
      name: 'Faiza Hussein Shah',
      role: 'Rota Coordinator',
      image: images.team.support,
      description: 'Ensuring optimal care scheduling and resource allocation. Faiza masterfully coordinates our care delivery schedules to ensure consistent, reliable service for all clients.',
    },
    {
      name: 'Carla Cardoso',
      role: 'Rota Coordinator',
      image: images.team.leadership,
      description: "Coordinating care schedules to meet client needs and staff availability. Carla works diligently to match the right care professionals with each client's unique requirements.",
    },
    {
      name: 'Yemisola Adesine',
      role: 'Care Coordinator',
      image: images.team.caregivers,
      description: 'Facilitating seamless care delivery and client-caregiver relationships. Yemisola ensures that our care plans are implemented effectively and adjusted as client needs evolve.',
    },
    {
      name: 'Sarah Rayner',
      role: 'Care Coordinator',
      image: images.team.support,
      description: 'Ensuring high-quality care delivery and client satisfaction. Sarah monitors care quality and gathers feedback to continuously improve our service delivery.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Superior Care Group - Our Family Story, Values & Team</title>
        <meta name="description" content="Discover the Basi family story behind Superior Care Group. Learn how our family values shape our approach to care, meet our dedicated team, and see why we treat every client like family." />
        <meta name="keywords" content="family care provider, family business, family values in care, care team, care mission, professional carers, care management, family-run care, Milton Keynes" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section - Enhanced with Parallax */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={images.hero.aboutUs}
                alt="About Us Hero"
                className="object-cover w-full h-full opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-700/90" />
            </motion.div>
          </div>
          <div className="relative max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <span className="inline-block px-4 py-1 mb-6 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full">FAMILY-RUN CARE SINCE 2010</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] drop-shadow-lg">
                A Family That Cares
                <span className="block text-amber-300 mt-2">For Your Family</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                For over a decade, the Basi family has been dedicated to 
                providing exceptional care services with the warmth that only family can provide.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFamilyLegacy}
                className="mt-8 px-8 py-4 bg-amber-500 text-blue-900 rounded-lg font-semibold shadow-lg hover:bg-amber-400 transition-all flex items-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Read Our Story
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full">OUR HISTORY</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
              <p className="text-xl text-gray-600">
                Milestones in our evolution as a leading care provider
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line with decorative elements */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-300 via-amber-200 to-amber-300"></div>
              
              {/* Small decorative circles along the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[15%] w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[35%] w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[55%] w-3 h-3 bg-amber-400 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[75%] w-3 h-3 bg-amber-400 rounded-full"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-warm border border-amber-100/50 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-amber-500 font-semibold mb-2 flex items-center justify-center sm:justify-start text-lg">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Family Story Section - Enhanced with full content */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white" ref={familyLegacyRef} id="family-legacy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Basi Family Legacy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The heart of Superior Care Group lies in our family values and commitment to exceptional care.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side - Content boxes */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-warm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Beginnings</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Superior Care Group began as a small family operation in 2010, inspired by our founder Raj Basi's personal experience caring for his aging parents. What started as a mission to provide the kind of care his own family members deserved soon grew into a broader vision: to revolutionize home care services with a deeply personal touch.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-warm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Through Values</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Over the years, we've expanded throughout the UK, but we've never lost sight of our founding principles. Every new service line and geographical expansion has been guided by our commitment to personalized care. We've grown not by compromising our values, but by doubling down on them—ensuring that each client receives the same level of attention and compassion that inspired our founding.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-warm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Today, Superior Care Group stands as a testament to what care services can be when they're built on a foundation of genuine empathy and family values. As we continue to innovate and grow, we remain dedicated to our mission: providing exceptional care that enhances the quality of life for all our clients.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="sticky top-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/70 to-gray-900/30 z-10"></div>
                    <img
                      src={familyPortraits[3].src}
                      alt={familyPortraits[3].alt}
                      className="w-full h-[600px] object-cover"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <span className="inline-block px-3 py-1 bg-amber-500/80 text-white text-xs font-bold rounded-full mb-2">EST. 2010</span>
                      <h3 className="text-2xl font-bold text-white mb-2">The Basi Family</h3>
                      <p className="text-white/90 text-lg">{familyPortraits[3].caption}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-blue-900 rounded-xl p-6 text-white shadow-xl">
                    <p className="italic text-blue-100 leading-relaxed mb-4">
                      "We believe that the best care comes from the heart. Our family is committed to ensuring that Superior Care Group continues to provide the kind of care that we would want for our own loved ones."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-amber-300 font-medium">— The Basi Family</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white mt-16">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-amber-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-2xl font-bold">Our Legacy Continues</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                As we look to the future, our mission remains unchanged: to provide the highest quality care with the warmth and compassion that only a family-run business can offer. We invite you to experience the Superior Care Group difference – where care comes from the heart.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-amber-300 mb-1">13+</div>
                  <div className="text-blue-50 text-sm">Years of Family Care</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-amber-300 mb-1">3</div>
                  <div className="text-blue-50 text-sm">Generations Involved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-amber-300 mb-1">500+</div>
                  <div className="text-blue-50 text-sm">Families Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Enhanced aesthetics */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
          
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1 mb-3 bg-amber-100 text-amber-600 text-sm font-medium rounded-full shadow-sm">OUR PURPOSE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              
              <div className="bg-white p-10 rounded-2xl shadow-warm border border-amber-100/50">
                <svg className="w-12 h-12 text-amber-500 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
                <p className="text-2xl text-gray-800 font-light italic leading-relaxed">
                  To enhance the quality of life for our clients through personalized care services that
                  promote independence, dignity, and wellbeing—treating each client as we would our own family members.
                </p>
                <svg className="w-12 h-12 text-amber-500 mx-auto mt-4 opacity-80 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Screen Video with Text Overlay */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <VideoWidget
              src={videos.find(v => v.section === 'about-us')?.src || '/videos/7517080-uhd_3840_2160_25fps.mp4'}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-blue-900/10" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl"
            >
              <h2 className="text-5xl font-bold mb-6">Our Care Philosophy</h2>
              <p className="text-2xl font-light mb-8">
                "Care isn't just a service we provide—it's who we are as a family and as an organization."
              </p>
              <div className="flex justify-center">
                <span className="inline-block px-6 py-3 border-2 border-white/30 rounded-full backdrop-blur-sm">
                  The Basi Family
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Values Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Family Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide our family business and shape our approach to care
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                    onClick={() => setActiveValue(value.title)}
                    className="bg-white rounded-xl p-6 shadow-warm cursor-pointer transform transition-all duration-300 hover:bg-blue-50"
                  >
                    <div className="flex justify-center mb-4 transform transition-all duration-300 hover:scale-110">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{value.title}</h3>
                    <p className="text-gray-600 text-center text-sm">Click to learn more</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Value Detail Display Area */}
              <AnimatePresence>
                {activeValue && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-warm"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        {values.find(v => v.title === activeValue)?.icon}
                        <h3 className="text-2xl font-bold text-gray-900 ml-4">{activeValue}</h3>
                      </div>
                      <button 
                        onClick={() => setActiveValue(null)}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-700 mt-4 text-lg">
                      {values.find(v => v.title === activeValue)?.description}
                    </p>
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                      <p className="text-gray-700 italic">
                        "Our commitment to {activeValue.toLowerCase()} means that we {activeValue === 'Compassion' ? 'always put the emotional wellbeing of our clients first' : 
                          activeValue === 'Excellence' ? 'continuously train and develop our care team to deliver the highest standard of service' : 
                          activeValue === 'Integrity' ? 'are transparent in all our practices and always do what we say we will do' :
                          'treat everyone – clients, staff, and partners – as valued members of our extended family'}."
                      </p>
                      <p className="text-right mt-2 text-amber-700 font-medium">— {activeValue === 'Family' ? 'Arjun' : activeValue === 'Compassion' ? 'Manjit' : activeValue === 'Excellence' ? 'Beant' : 'The Basi Family'} Basi</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Team Section - Simplified */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 mb-2">
                The family and extended family behind Superior Care Group
              </p>
            </motion.div>

            {/* Family Leadership */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">Family Leadership</h3>
              
              <div className="space-y-4 mb-12">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <motion.div 
                    key={member.name} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-300"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-amber-600 font-medium">{member.role}</p>
                      <p className="text-gray-600 mt-1 text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Care Management Team */}
              <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">Care Management Team</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.slice(3).map((member, index) => (
                  <motion.div 
                    key={member.name} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Extended Family</h4>
                <p className="text-gray-600">
                  Beyond our leadership team, Superior Care Group is powered by over 50 dedicated care professionals who share our family values and commitment to exceptional care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Join Our Extended Family
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you're looking for care services or a fulfilling career, we welcome you to become part of the Superior Care Group family.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg"
                  >
                    Inquire About Our Services
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/careers"
                    className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all"
                  >
                    View Career Opportunities
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Family Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setShowStoryModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{familyStory.title}</h3>
                <button 
                  onClick={() => setShowStoryModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-8">
                {familyStory.content.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">{section.heading}</h4>
                    <p className="text-gray-700">{section.text}</p>
                  </div>
                ))}
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-700 italic">
                    "We believe that the best care comes from the heart. Our family is committed to ensuring that Superior Care Group continues to provide the kind of care that we would want for our own loved ones—personal, professional, and delivered with genuine compassion."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-amber-300 font-medium">— The Basi Family</span>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <button 
                    onClick={() => setShowStoryModal(false)}
                    className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-sm font-medium">{galleryImages[activeImage].caption}</p>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                  }}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutUs; 