import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { sendFormToWebhook } from '../utils/formHandler';

const Contact = () => {
  // Prevent scrolling on this page
  useEffect(() => {
    // Save the current overflow value
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore original overflow on unmount
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Superior Care Group - Get Care Support</title>
        <meta name="description" content="Get in touch with Superior Care Group for professional care support. Speak with our care experts about your needs." />
        <meta name="keywords" content="care support, care consultation, care assessment, contact care provider, care services contact" />
      </Helmet>

      <main className="h-screen w-screen overflow-hidden relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/contact-hero.jpg" 
            alt="Care background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/95 backdrop-blur-sm"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-amber-500/10 blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-40 h-40 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full flex items-center justify-center p-4">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            {/* Left side - Content */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-center backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Get Care Support?
                  <span className="block text-amber-400 mt-2">We're Here to Help</span>
                </h1>
                <p className="text-lg text-blue-50 mb-8">
                  Speak with our care experts and discover how we can support you or your loved ones.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                      <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-white">Free Consultation</h3>
                      <p className="text-sm text-blue-100/80">No-obligation assessment of your care needs</p>
                    </div>
                  </div>
                
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                      <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-white">Quick Response</h3>
                      <p className="text-sm text-blue-100/80">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                      <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-white">Personalized Care</h3>
                      <p className="text-sm text-blue-100/80">Tailored service for your specific needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <a
                    href="tel:+443302236986"
                    className="flex items-center text-amber-300 font-medium hover:text-amber-200 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: 0330 223 6986
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side - Form */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 lg:p-12 border-l border-white/10">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  
                  // Send the form data to the webhook
                  sendFormToWebhook(formData, 'contact')
                    .then(response => {
                      if (response.ok) {
                        // Reset form on success
                        form.reset();
                        // You could add a success message here
                        alert('Thank you for your inquiry. We will contact you soon!');
                      } else {
                        alert('There was an error submitting the form. Please try again later.');
                      }
                    })
                    .catch(error => {
                      console.error('Form submission error:', error);
                      alert('There was an error submitting the form. Please try again later.');
                    });
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-white/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-white/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-1">
                    Type of Care Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white"
                  >
                    <option value="" className="bg-blue-900 text-white">Select Care Type</option>
                    <option value="home-care" className="bg-blue-900 text-white">Home Care</option>
                    <option value="community-care" className="bg-blue-900 text-white">Community Care</option>
                    <option value="learning-disabilities" className="bg-blue-900 text-white">Learning Disabilities Support</option>
                    <option value="mental-health" className="bg-blue-900 text-white">Mental Health Support</option>
                    <option value="not-sure" className="bg-blue-900 text-white">Not Sure / Need Advice</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-white/50"
                    placeholder="Please tell us about your care needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all shadow-lg"
                >
                  Submit Request
                </button>
                <p className="text-sm text-amber-200 text-center font-medium">
                  We'll respond to your inquiry within 24 hours
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact; 