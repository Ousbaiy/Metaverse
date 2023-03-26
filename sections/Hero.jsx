'use client';

import Image from 'next/image';

// library
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles/index';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hiddn"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      a
    </motion.div>
  </section>
);

export default Hero;
