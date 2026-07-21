import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-top border-white border-opacity-10 py-4">
      <div className="container py-3 text-center">
        <p className="text-[#94A3B8] mb-2">© {year} Shambhu Pandey. All rights reserved.</p>
        <p className="text-white mb-3">Designed & Developed by Shambhu Pandey</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="https://github.com/shambhu-pandey" className="text-decoration-none text-[#94A3B8] hover-text-accent" target="_blank" rel="noreferrer">
            <FaGithub size={18} className="me-2" /> GitHub
          </a>
          <a href="mailto:shambhupandey1008@gmail.com" className="text-decoration-none text-[#94A3B8] hover-text-accent">
            <MdEmail size={18} className="me-2" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
