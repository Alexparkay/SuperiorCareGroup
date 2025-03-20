import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoWidgetProps {
  src: string;
  className?: string;
  fullScreen?: boolean;
}

const VideoWidget = ({ src, className = '', fullScreen = false }: VideoWidgetProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden ${fullScreen ? 'h-screen w-full' : ''} ${className}`}
      onClick={togglePlayPause}
    >
      <video
        ref={videoRef}
        className={`${fullScreen ? 'w-full h-full object-cover absolute inset-0' : 'w-full h-full object-cover'}`}
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {fullScreen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          {!isPlaying && (
            <div className="relative z-10 p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm pointer-events-auto cursor-pointer hover:bg-opacity-30 transition-all">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default VideoWidget; 