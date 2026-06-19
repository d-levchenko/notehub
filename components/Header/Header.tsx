import Link from 'next/link';

import css from './Header.module.css';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>

      <MobileMenu />
    </header>
  );
};

export default Header;
