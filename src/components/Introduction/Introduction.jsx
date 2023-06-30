import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Introduction.css';

const introVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  introLarge: { scale: 5 },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Introduction = () => {
  return (
    <section className="intro-section">
      <AnimatePresence>
        <div className="intro-background">
          <div className="vintage-overlay" />
        </div>
        <div class="intro-heading">
        <h1>
        PIRROX DEV
        </h1>
    </div>
        <motion.p
          className="intro-description"
          variants={introVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.span variants={wordVariants}>&lt;</motion.span>
          <motion.span variants={wordVariants}>&gt;</motion.span>
          <motion.span variants={wordVariants}>Welcome</motion.span>{' '}
          <motion.span variants={wordVariants}>to</motion.span>{' '}
          <motion.span variants={wordVariants}>Pirrox's</motion.span>{' '}
          <motion.span variants={wordVariants}>creative</motion.span>{' '}
          <motion.span variants={wordVariants}>world</motion.span>{' '}
          <motion.span variants={wordVariants}>&lt;</motion.span>
          <motion.span variants={wordVariants}>/&gt;</motion.span>

        </motion.p>
      </AnimatePresence>
    </section>
  );
};

export default Introduction;
