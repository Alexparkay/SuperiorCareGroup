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
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-600">
                Join a supportive team that values your growth and wellbeing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all text-center"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Single Video Integration */}
        <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 py-20">
          <VideoWidget
            src={videos.find(v => v.section === 'careers')?.src || '/videos/7522208-uhd_3840_2160_25fps.mp4'}
            className="aspect-video"
          />
        </div>

        {/* Current Openings Section */}
        <section id="current-openings" className="py-20 bg-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-xl text-gray-600">
                Explore our available positions and find your perfect role
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                          <div className="mt-2 flex items-center text-gray-600">
                            <span className="mr-4">{job.type}</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                          className="mt-4 md:mt-0 inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                        >
                          {selectedJob === job.id ? 'View Less' : 'View More'}
                          <svg
                            className={`w-5 h-5 ml-1 transform transition-transform ${
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
                      <p className="text-gray-600">{job.description}</p>

                      {selectedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {job.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {job.requirements.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6">
                            <Link
                              to="/contact"
                              className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-warm"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Today</h2>
              <p className="text-xl text-gray-600">
                Take the first step towards a rewarding career in care
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-warm"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applied For
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload CV
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">PDF, DOC, or DOCX files only</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-warm"
                >
                  Submit Application
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers; 