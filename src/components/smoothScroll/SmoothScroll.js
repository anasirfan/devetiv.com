// SmoothScroll.js
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const SmoothScroll = ({ children }) => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
