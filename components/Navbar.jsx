'use client';

import Image from 'next/image';

// library
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles/index';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <h1 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSE
      </h1>
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;