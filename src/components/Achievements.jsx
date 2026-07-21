import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaCertificate, FaTrophy, FaCode, FaExternalLinkAlt, FaBrain } from 'react-icons/fa';
import { profile } from '../data/profile';

const stats = [
  { value: '25+', label: 'Projects Built', icon: <FaProjectDiagram size={24} /> },
  { value: '8+', label: 'Certificates', icon: <FaCertificate size={24} /> },
  { value: '9.15', label: 'MCA CGPA', icon: <FaTrophy size={24} /> },
  { value: '1000+', label: 'Coding Practice Hours', icon: <FaCode size={24} /> },
];

const Achievements = () => {
  return (
    <section id="achievements" name="Achievements" className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Achievements</p>
          <h2 className="display-6 fw-semibold text-white">Consistency, curiosity, and growth in every milestone</h2>
        </div>

        <div className="row g-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="col-12 col-md-6 col-lg-3"
            >
              <div className="glass-card p-4 text-center h-100">
                <div className="d-flex justify-content-center align-items-center rounded-circle mx-auto mb-3" style={{ width: '56px', height: '56px', background: 'rgba(0,245,160,0.14)' }}>
                  <div className="text-[#00F5A0]">{item.icon}</div>
                </div>
                <div className="display-6 fw-semibold text-white">{item.value}</div>
                <p className="text-[#94A3B8] mb-0 mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 p-lg-5 mt-4"
        >
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle p-3" style={{ background: 'rgba(0,245,160,0.14)' }}>
                <FaBrain className="text-[#00F5A0]" size={22} />
              </div>
              <div>
                <h3 className="h5 text-white mb-1">Problem Solving Profile</h3>
                <p className="text-[#94A3B8] mb-0">My Codolio profile highlights my problem solving practice and competitive growth.</p>
              </div>
            </div>
            <a href={profile.codolio} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm align-self-start align-self-md-center">
              Open Codolio Profile <FaExternalLinkAlt className="ms-2" size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
