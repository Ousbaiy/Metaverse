'use client';

import Image from 'next/image';

// library
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles/index';

// images
import Search from '../public/search.svg';
import Menu from '../public/menu.svg';

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
        src={Search}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      <h1 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h1>
      <Image
        src={Menu}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
