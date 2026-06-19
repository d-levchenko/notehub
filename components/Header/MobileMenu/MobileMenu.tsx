'use client';

import { useState } from 'react';
import Link from 'next/link';

import css from './MobileMenu.module.css';
import AuthNavigation from '@/components/AuthNavigation/AuthNavigation';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleOpenMenu} className={css.mobileMenu}>
        ☰
      </button>

      <nav
        className={`${css.navHeader} ${isOpen ? css.navOpen : css.navClosed}`}
        aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <button
              onClick={handleOpenMenu}
              className={`${css.closeButton} ${css.mobileMenu}`}>
              X
            </button>
          </li>
          <li>
            <Link onClick={handleOpenMenu} href="/">
              Home
            </Link>
          </li>
          <AuthNavigation onClick={handleOpenMenu} />
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
