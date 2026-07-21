import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeart, FaLightbulb, FaUser, FaCodeBranch } from "react-icons/fa";
import { profile } from '../data/profile';

const aboutCards = [
  {
    title: "Who I am",
    body: "I’m a developer focused on building responsive, scalable, and user-friendly web applications with a strong emphasis on clean architecture and modern UI.",
    icon: <FaUser className="text-[#00F5A0]" size={20} />,
  },
  {
    title: "Career Objective",
    body: "My goal is to build impactful products that blend polished user experiences with strong engineering fundamentals and scalable full-stack solutions.",
    icon: <FaLightbulb className="text-[#FACC15]" size={20} />,
  },
  {
    title: "Current Focus",
    body: "I’m currently pursuing my MCA while deepening my expertise in frontend development, backend development, React, Node.js, Express, MongoDB, JavaScript, C++, DSA, and REST APIs.",
    icon: <FaGraduationCap className="text-[#00F5A0]" size={20} />,
  },
  {
    title: "Interests",
    body: "I’m enthusiastic about responsive UI, database design, REST APIs, performance, problem solving, and turning ideas into polished web products.",
    icon: <FaHeart className="text-[#FACC15]" size={20} />,
  },
];

const timeline = profile.education;

const About = () => {
  return (
    <section id="about" name="About" className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">About</p>
          <h2 className="display-6 fw-semibold text-white">Building experiences that feel premium, thoughtful, and fast</h2>
        </div>

        <div className="row g-4 mb-5">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="col-12 col-md-6"
            >
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle p-2 bg-white bg-opacity-10">{card.icon}</div>
                  <h3 className="h5 mb-0 text-white">{card.title}</h3>
                </div>
                <p className="text-[#94A3B8] mb-0">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-4 p-lg-5">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h3 className="h4 text-white mb-3">Professional journey</h3>
              <p className="text-[#94A3B8]">
                My academic foundation and hands-on practice have shaped a strong base in web development, problem solving, and building applications with a modern technical stack.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="position-relative ps-4">
                <div className="position-absolute start-0 top-0 bottom-0" style={{ width: '2px', background: 'linear-gradient(180deg, #00F5A0, rgba(255,255,255,0.2))' }} />
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="position-relative mb-4"
                  >
                    <div className="position-absolute" style={{ left: '-1.2rem', top: '0.35rem', width: '12px', height: '12px', borderRadius: '50%', background: item.type === 'MCA' ? '#00F5A0' : item.type === 'BCA' ? '#FACC15' : '#94A3B8' }} />
                    <div className="glass-card p-3">
                      <div className="d-flex align-items-center gap-2 text-[#00F5A0] mb-2">
                        <FaCodeBranch size={14} />
                        <span className="small fw-semibold">{item.period}</span>
                      </div>
                      <h4 className="h6 text-white mb-1">{item.degree}</h4>
                      <p className="text-[#94A3B8] mb-1">{item.institution}</p>
                      {item.cgpa ? <p className="text-[#FACC15] mb-0">CGPA: {item.cgpa}</p> : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
