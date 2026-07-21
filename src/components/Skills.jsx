import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCode, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaServer, FaBrain, FaGitAlt, FaGithub, FaCodeBranch, FaCloud } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiBootstrap, SiMongodb, SiMysql, SiExpress, SiPostman } from 'react-icons/si';
import { profile } from '../data/profile';

const iconMap = {
  FaReact: <FaReact className="text-[#00F5A0]" size={18} />,
  IoLogoJavascript: <IoLogoJavascript className="text-[#FACC15]" size={18} />,
  FaHtml5: <FaHtml5 className="text-[#00F5A0]" size={18} />,
  FaCss3Alt: <FaCss3Alt className="text-[#FACC15]" size={18} />,
  SiBootstrap: <SiBootstrap className="text-[#00F5A0]" size={18} />,
  FaNodeJs: <FaNodeJs className="text-[#FACC15]" size={18} />,
  SiExpress: <SiExpress className="text-[#00F5A0]" size={18} />,
  FaServer: <FaServer className="text-[#FACC15]" size={18} />,
  SiMongodb: <SiMongodb className="text-[#00F5A0]" size={18} />,
  SiMysql: <SiMysql className="text-[#FACC15]" size={18} />,
  FaCode: <FaCode className="text-[#00F5A0]" size={18} />,
  FaBrain: <FaBrain className="text-[#FACC15]" size={18} />,
  FaGitAlt: <FaGitAlt className="text-[#00F5A0]" size={18} />,
  FaGithub: <FaGithub className="text-[#FACC15]" size={18} />,
  FaTools: <FaTools className="text-[#00F5A0]" size={18} />,
  FaCloud: <FaCloud className="text-[#FACC15]" size={18} />,
};

const skillGroups = profile.skills;

const Skills = () => {
  return (
    <section id="skills" name="Skills" className="py-5 py-lg-6 position-relative">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-[#00F5A0] letter-spacing">Skills</p>
          <h2 className="display-6 fw-semibold text-white">Crafting polished interfaces with modern tools</h2>
        </div>

        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="col-12 col-lg-6"
            >
              <div className="glass-card p-4 h-100 hover-lift">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="rounded-circle p-2 bg-white bg-opacity-10">{group.category === 'Frontend' ? <FaReact className="text-[#00F5A0]" size={18} /> : group.category === 'Backend' ? <FaNodeJs className="text-[#FACC15]" size={18} /> : group.category === 'Database' ? <FaDatabase className="text-[#00F5A0]" size={18} /> : group.category === 'Programming' ? <FaCode className="text-[#FACC15]" size={18} /> : <FaTools className="text-[#00F5A0]" size={18} />}</div>
                  <h3 className="h5 mb-0 text-white">{group.category}</h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {group.items.map((skill) => (
                    <motion.div whileHover={{ y: -2, scale: 1.01 }} key={skill.name} className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className="d-flex align-items-center justify-content-between mb-2 text-sm text-[#94A3B8]">
                        <span className="d-flex align-items-center gap-2 text-white">
                          {iconMap[skill.icon] || <FaCodeBranch className="text-[#00F5A0]" size={16} />}
                          {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px', background: 'rgba(255,255,255,0.08)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.7 }}
                          className="progress-bar"
                          style={{ background: 'linear-gradient(90deg, #00F5A0, #FACC15)' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
