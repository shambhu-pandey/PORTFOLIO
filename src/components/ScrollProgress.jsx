import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="position-fixed top-0 start-0 w-100" style={{ zIndex: 1200, height: '3px' }}>
      <div
        className="h-100"
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #00F5A0, #FACC15)' }}
      />
    </div>
  );
};

export default ScrollProgress;
