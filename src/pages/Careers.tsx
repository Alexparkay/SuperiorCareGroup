import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: 'care-assistant',
      title: 'Care Assistant',
      type: 'Full-time / Part-time',
      location: 'Various Locations',
      image: images.careers.benefits,
      description: 'Join our team of dedicated care assistants providing essential support to clients in their homes.',
      responsibilities: [
        'Assist clients with daily activities and personal care',
        'Monitor and record client health and wellbeing',
        'Follow care plans and maintain accurate records',
        'Communicate effectively with clients, families, and healthcare professionals',
        'Promote independence and dignity in all interactions',
      ],
      requirements: [
        'Previous care experience preferred but not essential',
        'Compassionate and patient-centered approach',
        'Excellent communication and interpersonal skills',
        'Reliable and flexible with good time management',
        'Valid driving license and own transport preferred',
      ],
    },
    {
      id: 'community-support-worker',
      title: 'Community Support Worker',
      type: 'Full-time',
      location: 'Regional',
      image: images.careers.training,
      description: 'Support individuals in maintaining their independence and engagement within the community.',
      responsibilities: [
        'Facilitate community activities and social programs',
        'Provide transportation and accompaniment to appointments',
        'Support clients in accessing community services',
        'Develop and maintain community partnerships',
        'Document and report on client progress',
      ],
      requirements: [
        'Experience in community support or related field',
        'Strong organizational and planning skills',
        'Knowledge of local community resources',
        'Excellent interpersonal and communication abilities',
        'Valid driving license required',
      ],
    },
    {
      id: 'care-coordinator',
      title: 'Care Coordinator',
      type: 'Full-time',
      location: 'Office-based',
      image: images.careers.opportunities,
      description: 'Coordinate and oversee the delivery of care services to ensure high-quality support for our clients.',
      responsibilities: [
        'Assess client needs and develop care plans',
        'Schedule and coordinate care visits',
        'Supervise and support care staff',
        'Maintain quality standards and compliance',
        'Liaise with healthcare professionals and families',
      ],
      requirements: [
        'Minimum 2 years experience in care coordination',
        'Relevant healthcare or social care qualification',
        'Strong leadership and problem-solving skills',
        'Excellent organizational and administrative abilities',
        'Computer literacy and experience with care management systems',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Competitive Pay',
      description: 'Attractive salary packages with regular reviews and performance-based increases.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Training & Development',
      description: 'Comprehensive training programs and opportunities for career advancement.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Flexible Schedule',
      description: 'Work patterns that fit around your life and commitments.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Superior Care Group - Join Our Care Team</title>
        <meta name="description" content="Join our team of dedicated care professionals. We offer competitive pay, training opportunities, and a supportive work environment. Make a difference in people's lives." />
        <meta name="keywords" content="care jobs, healthcare careers, care assistant jobs, community support worker, care coordinator, care employment, Milton Keynes, Devon, London" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={images.hero.careers}
              alt="Care team members working together"
              className="w-full h-full object-cover opacity-40"
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
                Join Our Team of
                <span className="block text-amber-300 mt-2">Care Professionals</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Make a meaningful difference in people's lives while 
                building a rewarding career with competitive benefits 
                and continuous growth opportunities.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <a
                  href="#current-openings"
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  View Open Positions
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-amber-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
          
          <div className="max-w-[70%] mx-auto px-8 sm:px-10 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block px-5 py-2 mb-4 bg-amber-100 text-amber-600 text-sm font-medium rounded-full shadow-sm">OUR PROMISE TO YOU</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Work With Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join a supportive team that values your growth, wellbeing, and the meaningful impact you make every day
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-all text-center border border-amber-100/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50/0 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-6 relative group-hover:-translate-y-1 transition-transform">
                    <div className="absolute inset-0 bg-amber-100 rounded-2xl rotate-6 opacity-50"></div>
                    <div className="relative z-10">{benefit.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center text-amber-600 font-medium text-sm">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-2/3 p-10 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Join a Team That Makes a Difference</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    At Superior Care Group, we're more than just colleagues - we're a family of compassionate professionals dedicated to improving lives. Our team enjoys not just competitive benefits, but a workplace culture that celebrates your contributions, supports your wellbeing, and empowers your career growth.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-blue-50">Regular team events and celebrations</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-blue-50">Mental health and wellbeing support</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-blue-50">Recognition programs</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-blue-50">Supportive management team</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Link
                      to="#current-openings"
                      className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Explore Our Openings
                    </Link>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-blue-800 relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/50 to-blue-900/50 z-10"></div>
                  <img 
                    src={images.careers.training} 
                    alt="Team of care professionals" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="text-white text-xl font-bold flex items-center">
                      <svg className="w-6 h-6 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Employee Satisfaction Rate: 96%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="p-6 bg-white rounded-xl shadow-warm text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-gray-500 text-sm">Team Members</div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-warm text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-gray-500 text-sm">UK Locations</div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-warm text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-warm text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-500 text-sm">Clients Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Single Video Integration */}
        <div>
          <VideoWidget
            src={videos.find(v => v.section === 'careers')?.src || '/videos/7522208-uhd_3840_2160_25fps.mp4'}
            fullScreen={true}
          />
        </div>

        {/* Current Openings Section */}
        <section id="current-openings" className="py-24 bg-gradient-to-br from-amber-50 via-amber-50/80 to-white">
          <div className="max-w-[70%] mx-auto px-8 sm:px-10 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block px-5 py-2 mb-4 bg-amber-100 text-amber-600 text-sm font-medium rounded-full shadow-sm">CAREER OPPORTUNITIES</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Role</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join our compassionate team of professionals dedicated to making a real difference in people's lives every day
              </p>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-warm border border-amber-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Salary</h3>
                  <p className="text-gray-600 text-sm">Rewarding compensation packages that value your skills and dedication</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-warm border border-amber-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600 text-sm">Clear pathways for advancement and professional development</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-warm border border-amber-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600 text-sm">Flexible scheduling options that fit your personal needs</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-16">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all border border-amber-100/50"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative group">
                      <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white p-2 shadow-lg border-4 border-white">
                        <div className="w-full h-full rounded-full bg-amber-100 flex items-center justify-center">
                          {job.title === 'Care Assistant' && (
                            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          )}
                          {job.title === 'Community Support Worker' && (
                            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          )}
                          {job.title === 'Care Coordinator' && (
                            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex flex-col space-y-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500 text-white shadow-md">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white shadow-md">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex flex-col mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h3>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="text-amber-500 flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">Top Rated Position</span>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 pt-1">
                              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-700 leading-relaxed">{job.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                              Meaningful Work
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                              Career Growth
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                              Training Provided
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-amber-100 text-amber-800">
                              Supportive Team
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                            className="inline-flex items-center bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-700 hover:text-amber-800 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
                          >
                            {selectedJob === job.id ? 'View Less' : 'View Full Details'}
                            <svg
                              className={`w-5 h-5 ml-2 transform transition-transform ${
                                selectedJob === job.id ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {selectedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                              <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100/70">
                                <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 mr-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                  </span>
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-3 text-gray-600">
                                  {job.responsibilities.map((item) => (
                                    <li key={item} className="flex items-start">
                                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/70">
                                <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                  </span>
                                  Requirements
                                </h4>
                                <ul className="space-y-3 text-gray-600">
                                  {job.requirements.map((item) => (
                                    <li key={item} className="flex items-start">
                                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                              <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Benefits & Perks
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                  <svg className="w-6 h-6 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-sm text-gray-700 text-center">Competitive Pay</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                  <svg className="w-6 h-6 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                  </svg>
                                  <span className="text-sm text-gray-700 text-center">Training</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                  <svg className="w-6 h-6 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-sm text-gray-700 text-center">Flexible Hours</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                  <svg className="w-6 h-6 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                  </svg>
                                  <span className="text-sm text-gray-700 text-center">Career Growth</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex justify-center">
                              <Link
                                to="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-warm"
                              >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                Apply Now
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Don't see a position that fits your skills?</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Us Your Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-24 bg-gradient-to-b from-amber-50 via-white to-blue-50">
          <div className="max-w-[70%] mx-auto px-8 sm:px-10 lg:px-12 relative">
            <div className="absolute -top-10 right-10 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 left-10 w-60 h-60 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-5 py-2 mb-4 bg-amber-100 text-amber-600 text-sm font-medium rounded-full shadow-sm">START YOUR JOURNEY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team Today</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Make a lasting impact on people's lives as part of our compassionate care team
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-16">
                <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-warm">
                  <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Simple Application Process</span>
                </div>
                <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-warm">
                  <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Quick Response Time</span>
                </div>
                <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-warm">
                  <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Personalized Onboarding</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-900/5 transform -skew-y-3 rounded-3xl"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative">
                <div className="lg:col-span-2 hidden lg:block">
                  <div className="relative h-full">
                    <div className="absolute inset-0 overflow-hidden rounded-l-2xl">
                      <img 
                        src={images.careers.opportunities} 
                        alt="Care professional helping client" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/40"></div>
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Why Our Team Loves What They Do</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-blue-50">Build meaningful relationships with clients</p>
                          </div>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-blue-50">Make a real difference in people's lives</p>
                          </div>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-blue-50">Work with a supportive, caring team</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <blockquote className="italic text-sm text-blue-50 border-l-4 border-amber-300 pl-4">
                          "Working at Superior Care Group has been incredibly rewarding. I feel valued as an employee and know I'm making a positive impact every day."
                          <footer className="mt-2 text-amber-200 font-medium not-italic">— Sarah, Care Assistant</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 z-10">
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white p-8 md:p-10 rounded-2xl lg:rounded-l-none rounded-r-2xl shadow-warm border border-amber-100/50 z-10"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Handle form submission
                    }}
                  >
                    <div className="mb-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for Your Ideal Position</h3>
                        <p className="text-gray-600">Complete the form below to start your application</p>
                      </div>
                      
                      <div className="flex justify-center space-x-1 mb-10">
                        <span className="w-8 h-2 rounded-full bg-amber-500"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-200"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-200"></span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 mr-3">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </span>
                            Personal Information
                          </h3>

                          <div className="space-y-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Full Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                placeholder="Enter your email address"
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                placeholder="Enter your phone number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 mr-3">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </span>
                            Career Information
                          </h3>

                          <div className="space-y-6">
                            <div>
                              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Position Applied For
                              </label>
                              <select
                                id="position"
                                name="position"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                              >
                                <option value="">Select a Position</option>
                                {jobs.map((job) => (
                                  <option key={job.id} value={job.id}>
                                    {job.title}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Relevant Experience
                              </label>
                              <textarea
                                id="experience"
                                name="experience"
                                rows={4}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                                placeholder="Briefly describe your relevant experience"
                              />
                            </div>
                            <div>
                              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Upload CV
                              </label>
                              <div className="mt-1 flex items-center">
                                <label htmlFor="cv" className="w-full relative cursor-pointer bg-gray-50 rounded-lg px-4 py-6 border-2 border-gray-300 border-dashed hover:bg-gray-100 transition-colors group">
                                  <input
                                    type="file"
                                    id="cv"
                                    name="cv"
                                    accept=".pdf,.doc,.docx"
                                    required
                                    className="sr-only"
                                  />
                                  <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="mt-1 text-sm text-gray-500">
                                      <span className="font-medium text-amber-600">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX (up to 10MB)</p>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="bg-amber-50 rounded-lg p-4 mb-8">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-amber-700">
                              Our team will review your application and contact you within 2-3 business days.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-10 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-warm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Submit Application
                        </button>
                      </div>

                      <div className="mt-6 text-center text-sm text-gray-500">
                        <p>By submitting this application, you agree to our <a href="#" className="text-amber-600 hover:text-amber-700">Privacy Policy</a> and <a href="#" className="text-amber-600 hover:text-amber-700">Terms of Service</a>.</p>
                      </div>
                    </div>
                  </motion.form>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Have Questions About Joining Our Team?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're here to help you learn more about career opportunities at Superior Care Group
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+443302236986" className="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">Call: 0330 223 6986</span>
                </a>
                <a href="mailto:careers@superiorcare.com" className="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">Email: careers@superiorcare.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers; 