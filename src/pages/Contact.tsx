import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const contactImages = {
    hero: '/images/hero/contact-hero.jpg',
    consultation: '/images/services/consultation.jpg',
    support: '/images/services/support.jpg',
    team: '/images/team/care-team.jpg',
  };

  const locations = [
    {
      city: 'Milton Keynes',
      address: '17 Presley Way Crownhil MK8 0ES',
      phone: '01908 522245',
      email: 'info@superiorcaregroup.co.uk',
      image: '/images/locations/milton-keynes.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Superior Care Group - Get Care Support</title>
        <meta name="description" content="Get in touch with Superior Care Group for professional care support. Book a free consultation or speak with our care experts about your needs." />
        <meta name="keywords" content="care support, care consultation, care assessment, contact care provider, care services contact, Milton Keynes, Devon, London" />
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={contactImages.hero}
              alt="Caring professional speaking with client"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get Care Support
                <span className="block text-amber-300">We're Here to Help</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-8">
                Speak with our care experts and discover how we can support you or your loved ones
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <a
                  href="#contact-form"
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  Book Free Assessment
                </a>
                <a
                  href="tel:+443302236986"
                  className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
              <p className="text-xl text-gray-600">
                Choose the way that works best for you to connect with our care team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
              >
                <img
                  src={contactImages.consultation}
                  alt="Free care consultation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Book a no-obligation consultation with our care experts to discuss your needs
                  </p>
                  <a
                    href="#contact-form"
                    className="inline-block text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Schedule Now →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
              >
                <img
                  src={contactImages.support}
                  alt="24/7 phone support"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Phone Support</h3>
                  <p className="text-gray-600 mb-4">
                    Our care team is available around the clock to answer your questions
                  </p>
                  <a
                    href="tel:+443302236986"
                    className="inline-block text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Call Now →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
              >
                <img
                  src={contactImages.team}
                  alt="Local care team"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">
                    Meet our team in person at one of our local offices
                  </p>
                  <a
                    href="#locations"
                    className="inline-block text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Find Location →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Assessment</h2>
              <p className="text-xl text-gray-600">
                Tell us about your care needs and we'll be in touch within 24 hours
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select a Location</option>
                    {locations.map((location) => (
                      <option key={location.city} value={location.city}>
                        {location.city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Care Needed
                  </label>
                  <select
                    id="service"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
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
              </div>
            </motion.form>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
              <p className="text-xl text-gray-600">
                Visit us at one of our local offices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
                >
                  <img
                    src={location.image}
                    alt={`${location.city} office`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.city}</h3>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="space-y-2">
                      <a
                        href={`tel:${location.phone}`}
                        className="block text-amber-600 hover:text-amber-700"
                      >
                        {location.phone}
                      </a>
                      <a
                        href={`mailto:${location.email}`}
                        className="block text-amber-600 hover:text-amber-700"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact; 