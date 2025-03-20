import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

const HomeCare = () => {
  const services = [
    {
      title: 'Personal Care',
      description: 'Assistance with daily activities like bathing, dressing, and personal hygiene.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Medication Management',
      description: 'Ensuring medications are taken correctly and on schedule.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation according to dietary needs.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
  ];

  const benefits = [
    'Personalized care plans tailored to individual needs',
    'Experienced and compassionate caregivers',
    'Regular care plan reviews and updates',
    'Flexible scheduling options',
    '24/7 support available',
    'Comprehensive assessment process',
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
        <section className="relative min-h-[60vh] flex items-center">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] drop-shadow-lg">
                Professional Care
                <span className="block text-amber-300 mt-2">In Your Home</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Experience personalized care that helps you maintain 
                independence and quality of life in the comfort 
                of your own home.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Single Video Integration */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <VideoWidget
            src={videos.find(v => v.section === 'home-care')?.src || '/videos/7517382-uhd_3840_2160_25fps.mp4'}
            className="aspect-video"
          />
        </div>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Home Care Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support tailored to your unique needs and preferences
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
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Families Trust Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Families Trust Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has earned the trust of thousands of families
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Families Supported */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80"
                    alt="Happy family"
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-8 text-center text-white">
                  <div className="text-4xl font-bold mb-2">12,000+</div>
                  <div className="text-lg font-medium">Families Supported</div>
                </div>
              </motion.div>

              {/* Satisfaction Rate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                    alt="Happy client"
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-8 text-center text-white">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-lg font-medium">Satisfaction Rate</div>
                </div>
              </motion.div>

              {/* Years of Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1594357575203-c8d4e16b1cd9?auto=format&fit=crop&q=80"
                    alt="Experienced care"
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-8 text-center text-white">
                  <div className="text-4xl font-bold mb-2">13+</div>
                  <div className="text-lg font-medium">Years of Experience</div>
                </div>
              </motion.div>

              {/* 24/7 Care */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
                    alt="24/7 care"
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-8 text-center text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-lg font-medium">Care Available</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Home Care</h2>
              <p className="text-xl text-gray-600">
                Experience the difference of personalized care that puts your needs first
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
                >
                  <svg
                    className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0"
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
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Learn More About Our Home Care?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Contact us today to schedule a free consultation and discover how we can help you or your
                loved ones maintain independence at home.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  Book Free Assessment
                </Link>
                <a
                  href="tel:+443302236986"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeCare; 