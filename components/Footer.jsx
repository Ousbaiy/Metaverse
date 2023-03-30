'use client';

// library
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import styles from '../styles/index';

// data
import { socials } from '../data';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h3 className="md:text-[64px] text-[44px] font-bold text-white">
          Enter the Metaverse{' '}
        </h3>
        <button type="button" className="flex items-center gap-3 h-fit py-5 px-8 rounded-[32px] text-white bg-[#25618B]">
          <img src="/headset.svg" alt="headset" />
          <p>ENTER METAVERSE</p>
        </button>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
