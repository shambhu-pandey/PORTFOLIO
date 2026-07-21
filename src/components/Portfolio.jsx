import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { profile } from '../data/profile';
import reactLogo from "/reactjs.png";
import javascriptLogo from "/javascript.png";
import htmlLogo from "/html.png";
import cssLogo from "/css.jpg";

const projectData = profile.projects.map((project) => ({
  ...project,
  logo: project.title === 'Learning Management System' ? reactLogo : project.category === 'JavaScript' ? javascriptLogo : project.category === 'React' ? reactLogo : htmlLogo,
}));

const filters = ["All", "Featured", "React", "JavaScript"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectData;
    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" name="Portfolio" className="py-5 py-lg-6">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Projects</p>
          <h2 className="display-6 fw-semibold text-white">Featured work that reflects my growth as a developer</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 p-lg-5 mb-4"
        >
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <p className="text-[#00F5A0] small fw-semibold mb-2">Top Featured Project</p>
              <h3 className="h3 text-white mb-3">Learning Management System</h3>
              <p className="text-[#94A3B8] mb-3">A modern learning platform with role-based authentication, dashboards, course management, video learning, assignments, quizzes, and certificates.</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['React', 'Node.js', 'Express', 'MongoDB', 'REST API'].map((tech) => (
                  <span key={tech} className="small rounded-pill px-2 py-1" style={{ background: 'rgba(0,245,160,0.12)', color: '#00F5A0' }}>{tech}</span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2">
                <a href="https://lms-learnit-frontend.onrender.com" target="_blank" rel="noreferrer" className="btn btn-accent btn-sm">Live Demo</a>
                <a href="https://github.com/shambhu-pandey" target="_blank" rel="noreferrer" className="btn btn-outline-accent btn-sm">GitHub</a>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="glass-card p-3">
                <ul className="list-unstyled mb-0 text-[#94A3B8] d-flex flex-column gap-2">
                  {['Role Based Authentication', 'Student Dashboard', 'Instructor Dashboard', 'Admin Panel', 'Course Management', 'Video Learning', 'Assignments', 'Quiz', 'Certificates', 'Responsive Design'].map((item) => (
                    <li key={item} className="d-flex align-items-center gap-2"><span className="rounded-circle" style={{ width: 8, height: 8, background: '#00F5A0' }} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`btn btn-sm ${activeFilter === filter ? "btn-accent" : "btn-outline-accent"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="glass-card p-4 h-100 d-flex flex-column hover-lift">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <img src={project.logo} className="rounded-3" alt={project.title} style={{ width: 48, height: 48, objectFit: "cover" }} />
                  <span className="rounded-pill px-3 py-1 small text-[#00F5A0]" style={{ background: "rgba(0,245,160,0.12)" }}>
                    {project.category}
                  </span>
                </div>
                <h3 className="h5 text-white mb-2">{project.title}</h3>
                <p className="text-[#94A3B8] mb-3">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="small rounded-pill px-2 py-1" style={{ background: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto d-flex gap-2 flex-wrap">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-accent btn-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
