import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VideoWidget from '../components/VideoWidget';
import { videos } from '../config/videos';
import { images } from '../config/images';

const CommunityCare = () => {
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
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
                Specialized support services that promote independence, confidence, and wellbeing
                in your local community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Single Video Integration */}
        <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 py-20">
          <VideoWidget
            src={videos.find(v => v.section === 'community-care')?.src || '/videos/7522219-uhd_3840_2160_25fps.mp4'}
            className="aspect-video"
          />
        </div>

        {/* Main Content Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
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
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Programs Section */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Independence</h2>
              <p className="text-xl text-gray-600">
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
                  className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
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
                Start Your Journey Today
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Take the first step towards enhanced independence and wellbeing. Our care experts are ready to create your personalized support plan.
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

export default CommunityCare; 