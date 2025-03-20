import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  
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
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={images.hero.aboutUs}
              alt="About Us Hero"
              className="object-cover w-full h-full opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-700/90" />
          </div>
          <div className="relative max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] drop-shadow-lg">
                A Family That Cares
                <span className="block text-amber-300 mt-2">For Your Family</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                For over a decade, the Basi family has been dedicated to 
                providing exceptional care services with the warmth that only family can provide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Family Story Section - Condensed with Interactive Elements */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
                <div className="lg:w-1/2">
                  <motion.img 
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    src="https://images.unsplash.com/photo-1595954421407-ad5e012b25e5?auto=format&fit=crop&q=80" 
                    alt="Basi Family" 
                    className="rounded-2xl shadow-warm cursor-pointer"
                    onClick={() => setShowStoryModal(true)}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Family Legacy</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Superior Care Group was born from the Basi family's personal experience with caring for their own loved ones. What began as a heartfelt mission has grown into a trusted care provider serving the Milton Keynes community.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowStoryModal(true)}
                    className="mt-4 px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md flex items-center font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    Read Our Full Story
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600">
                To enhance the quality of life for our clients through personalized care services that
                promote independence, dignity, and wellbeing—treating each client as we would our own family members.
              </p>
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
                  <p className="text-right mt-2 text-blue-800 font-medium">— The Basi Family</p>
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
    </>
  );
};

export default AboutUs; 