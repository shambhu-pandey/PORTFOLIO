import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="btn btn-sm position-fixed bottom-0 end-0 me-3 mb-3 rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00F5A0, #FACC15)', color: '#07111f', zIndex: 1100 }}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
