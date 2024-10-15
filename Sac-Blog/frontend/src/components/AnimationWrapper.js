import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AnimationWrapper = ({ children, animationType, duration = 1000, delay = 0 }) => {
  
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: duration, // Animation duration in milliseconds
      delay: delay,       // Delay before animation starts in milliseconds
    });
  }, [duration, delay]);

  return (
    <div data-aos={animationType}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
