import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  contact: {
    email: string;
    phone: string;
  };
}

const LocalTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Arjun Basi',
      role: 'CEO',
      image: '/images/team/arjun-basi.jpg',
      description: 'Leading our team with a vision for exceptional care services.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Manjit Basi',
      role: 'Registered Manager',
      image: '/images/team/manjit-basi.jpg',
      description: 'Ensuring our care services meet the highest standards of quality and compliance.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Beant Basi',
      role: 'Branch Manager',
      image: '/images/team/beant-basi.jpg',
      description: 'Overseeing daily operations and ensuring smooth service delivery.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Rachel Varney',
      role: 'HR',
      image: '/images/team/rachel-varney.jpg',
      description: 'Managing our human resources and supporting our care team.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Magnus Noble',
      role: 'HR',
      image: '/images/team/magnus-noble.jpg',
      description: 'Supporting our team with HR expertise and recruitment.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Faiza Hussein Shah',
      role: 'Rota Coordinator',
      image: '/images/team/faiza-hussein-shah.jpg',
      description: 'Coordinating care schedules to ensure consistent service delivery.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Carla Cardoso',
      role: 'Rota Coordinator',
      image: '/images/team/carla-cardoso.jpg',
      description: 'Managing care rotas and ensuring efficient service allocation.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Yemisola Adesine',
      role: 'Care Coordinator',
      image: '/images/team/yemisola-adesine.jpg',
      description: 'Coordinating care services and supporting our care team.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
    {
      name: 'Sarah Rayner',
      role: 'Care Coordinator',
      image: '/images/team/sarah-rayner.jpg',
      description: 'Ensuring high-quality care delivery and client satisfaction.',
      contact: {
        email: 'info@superiorcaregroup.co.uk',
        phone: '01908 522245',
      },
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Milton Keynes Care Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our dedicated team of care professionals in Milton Keynes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member: TeamMember, index: number) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:h-full md:w-48 object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                      {member.role}
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-gray-900">{member.name}</h2>
                    <p className="mt-3 text-gray-600">{member.description}</p>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {member.contact.email}
                      </a>
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        {member.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Want to Learn More About Our Services?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our Milton Keynes team today to discuss how we can support you or your loved ones
            </p>
            <button className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LocalTeam; 