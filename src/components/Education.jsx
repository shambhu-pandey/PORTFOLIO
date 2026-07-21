import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationItems = [
  {
    title: 'Master of Computer Applications',
    institution: 'Vellore Institute of Technology, Chennai',
    period: '2025 - Present',
    details: 'Focused on software development, system design, and modern web technologies.',
  },
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Vellore Institute of Technology',
    period: '2022 - 2025',
    details: 'Built a strong base in programming, databases, web development, and problem solving.',
  },
];

const certificates = [
  'HTML, CSS, and JavaScript — Coursera',
  'Supervised Machine Learning: Regression and Classification — Coursera',
  'React.js — Simplilearn',
  'Data Structures and Algorithms — Simplilearn',
];

const Education = () => {
  return (
    <section id="education" name="Education" className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Education</p>
          <h2 className="display-6 fw-semibold text-white">A disciplined path from fundamentals to modern development</h2>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-7">
            <div className="glass-card p-4 p-lg-5">
              <div className="position-relative">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="d-flex gap-3 mb-4"
                  >
                    <div className="mt-1">
                      <div className="rounded-circle p-2 bg-[#00F5A0] bg-opacity-10 text-[#00F5A0]">
                        <FaGraduationCap size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="h5 text-white mb-1">{item.title}</h3>
                      <p className="text-[#00F5A0] mb-2">{item.period}</p>
                      <p className="text-[#94A3B8] mb-0">{item.institution}</p>
                      <p className="text-[#94A3B8] mt-2">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="glass-card p-4 p-lg-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaCertificate className="text-[#FACC15]" size={18} />
                <h3 className="h5 text-white mb-0">Certificates</h3>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-3">
                {certificates.map((item) => (
                  <li key={item} className="text-[#94A3B8] border-bottom border-white border-opacity-10 pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
