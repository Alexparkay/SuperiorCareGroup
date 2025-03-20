interface VideoConfig {
  src: string;
  title: string;
  description?: string;
  section: 'home' | 'community-care' | 'home-care' | 'about-us' | 'careers';
}

export const videos: VideoConfig[] = [
  {
    src: '/videos/7522362-uhd_3840_2160_25fps.mp4',
    title: 'Compassionate Care Journey',
    description: 'Experience the warmth and dedication of our care services',
    section: 'home'
  },
  {
    src: '/videos/7517382-uhd_3840_2160_25fps.mp4',
    title: 'Supporting Independence',
    description: 'Empowering individuals to live life to the fullest',
    section: 'home-care'
  },
  {
    src: '/videos/7522219-uhd_3840_2160_25fps.mp4',
    title: 'Community Integration',
    description: 'Building connections and fostering community engagement',
    section: 'community-care'
  },
  {
    src: '/videos/7517080-uhd_3840_2160_25fps.mp4',
    title: 'Professional Care Team',
    description: 'Meet our dedicated team of care professionals',
    section: 'about-us'
  },
  {
    src: '/videos/7522208-uhd_3840_2160_25fps.mp4',
    title: 'Making a Difference',
    description: 'Join our team and transform lives through care',
    section: 'careers'
  },
  {
    src: '/videos/7517066-uhd_3840_2160_25fps.mp4',
    title: 'Person-Centered Support',
    description: 'Tailored care that puts your needs first',
    section: 'home-care'
  },
  {
    src: '/videos/7522210-uhd_3840_2160_25fps.mp4',
    title: 'Community Activities',
    description: 'Engaging social programs and community support',
    section: 'community-care'
  },
  {
    src: '/videos/7522203-uhd_3840_2160_25fps.mp4',
    title: 'Care Excellence',
    description: 'Setting the standard in professional care services',
    section: 'about-us'
  },
  {
    src: '/videos/7517079-uhd_3840_2160_25fps.mp4',
    title: 'Career Growth',
    description: 'Develop your skills in a supportive environment',
    section: 'careers'
  },
  {
    src: '/videos/7517697-uhd_3840_2160_25fps.mp4',
    title: 'Family Support',
    description: 'Supporting families with compassionate care services',
    section: 'home'
  },
  {
    src: '/videos/7516764-uhd_2160_3840_25fps.mp4',
    title: 'Quality of Life',
    description: 'Enhancing daily living through professional care',
    section: 'home-care'
  }
]; 