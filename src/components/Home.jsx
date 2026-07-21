import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { profile } from '../data/profile';

const floatingTech = [
  { icon: <FaReact size={20} />, label: "React", color: "#00F5A0" },
  { icon: <IoLogoJavascript size={20} />, label: "JavaScript", color: "#FACC15" },
  { icon: <FaNodeJs size={20} />, label: "Node", color: "#00F5A0" },
  { icon: <SiBootstrap size={20} />, label: "Bootstrap", color: "#FACC15" },
  { icon: <FaGithub size={20} />, label: "GitHub", color: "#ffffff" },
];

function Home() {
  return (
    <section id="home" name="Home" className="position-relative py-5 py-lg-6">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-12 col-lg-7"
          >
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
              <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 glass-card text-[#00F5A0] small fw-semibold">
                <span className="rounded-circle" style={{ width: 8, height: 8, background: "#00F5A0" }} />
                Available for impactful frontend and fullstack opportunities
              </div>
            </div>

            <div className="d-inline-flex flex-column gap-1 mb-4" style={{ width: 'fit-content' }}>
              <a
                href={profile.codolio}
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 glass-card text-white small fw-semibold text-decoration-none"
              >
                Open Codolio Profile
              </a>
              <span className="small text-[#94A3B8] ps-2">Problem Solving Profile</span>
            </div>

            <h1 className="display-3 fw-bold text-white mb-3">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <div className="display-6 fw-semibold text-[#94A3B8] mb-4">
              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={45}
                backSpeed={35}
                loop
                className="text-[#00F5A0]"
              />
            </div>
            <p className="lead text-[#94A3B8] mb-4" style={{ maxWidth: "680px" }}>
              {profile.heroDescription}
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn btn-accent px-4 py-2">
                View Projects
              </a>
              <a href={profile.resume} download className="btn btn-outline-accent px-4 py-2">
                Download Resume
              </a>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-pill">
                <FaGithub size={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="social-pill">
                <FaEnvelope size={18} /> Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="col-12 col-lg-5"
          >
            <div className="position-relative mx-auto" style={{ maxWidth: "420px" }}>
              <div className="hero-orb" />
              <div className="hero-glow" />
              <div className="glass-card p-3 rounded-4 shadow-lg">
                <img src={profile.photo} alt={profile.name} className="img-fluid rounded-4 w-100" style={{ objectFit: "cover", maxHeight: "520px" }} />
              </div>

              {floatingTech.map((item, index) => (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                  transition={{ duration: 3.2, delay: index * 0.2, repeat: Infinity }}
                  className="position-absolute rounded-pill px-3 py-2 glass-card text-white small fw-semibold"
                  style={{
                    top: `${12 + index * 16}%`,
                    left: `${index % 2 === 0 ? 4 : 72}%`,
                    transform: "translate(-50%, -50%)",
                    border: `1px solid ${item.color}`,
                  }}
                >
                  <span className="me-2" style={{ color: item.color }}>{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;