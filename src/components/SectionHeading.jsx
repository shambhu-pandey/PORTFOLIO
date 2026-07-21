import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-5"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-[#00F5A0] mb-3">{eyebrow}</p>
      <h2 className="display-6 fw-semibold text-white mb-3">{title}</h2>
      <p className="text-[#94A3B8] lead">{description}</p>
    </motion.div>
  );
};

export default SectionHeading;
