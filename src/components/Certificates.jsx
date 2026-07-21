import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';

const Certificates = () => {
  return (
    <section className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Certificates</p>
          <h2 className="display-6 fw-semibold text-white">Professional credentials that support my growth</h2>
        </div>

        <div className="row g-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="col-12 col-md-6 col-lg-3"
            >
              <div className="glass-card p-4 h-100 hover-lift d-flex flex-column">
                <div className="text-[#00F5A0] fw-semibold small mb-2">{item.issuer}</div>
                <h3 className="h6 text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] small mb-1">Issued: {item.issued}</p>
                <p className="text-[#94A3B8] small mb-4">Credential ID: {item.credentialId}</p>
                <a href={item.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-outline-accent btn-sm mt-auto">
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
