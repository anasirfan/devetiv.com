
import React from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from 'aos';
import { useEffect } from 'react';

const GlobalFadeUp = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div data-aos="fade-up">
      {children}
    </div>
  );
};

export default GlobalFadeUp;
