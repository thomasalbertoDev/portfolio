'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex pb-24">
      <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto font-bold text-xl ">
        Thomas Alberto&nbsp;
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none gap-3">
        {/* Linkedin */}
        <Link
          className="pointer-events-none py-8 lg:pointer-events-auto lg:p-0"
          href="https://linkedin.com/in/thomasalberto21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:linkedin" width="2rem" height="2rem" />
        </Link>

        {/* Instagram */}
        <Link
          className="pointer-events-none py-8 lg:pointer-events-auto lg:p-0"
          href="https://www.instagram.com/thomasalberto___/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="ri:instagram-fill" width="2rem" height="2rem" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
