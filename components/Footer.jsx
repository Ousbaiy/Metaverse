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
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex items-center justify-between flex-wrap gap-5 mb-[80px]">
        <h3 className="md:text-[64px] text-[44px] font-bold text-white">
          Enter the Metaverse{' '}
        </h3>
        <button
          type="button"
          className="flex items-center gap-3 h-fit py-5 px-8 rounded-[32px] bg-[#25618B]"
        >
          <img src="/headset.svg" alt="headset" />
          <span className="font-normal text-[16px] text-white">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h3 className="font-extrabold text-[24px] text-white">METAVERSE</h3>
          <p className="font-normal text-[14px] text-white opacity-80">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
