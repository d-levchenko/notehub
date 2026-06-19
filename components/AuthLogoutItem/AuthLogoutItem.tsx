'use client';

import Link from 'next/link';
import useAuthStore from '@/lib/store/authStore';

import css from '../AuthNavigation/AuthNavigation.module.css';

interface AuthLogoutItemProps {
  handleLogout: () => void;
  onClick: () => void;
}

const AuthLogoutItem = ({ handleLogout, onClick }: AuthLogoutItemProps) => {
  const user = useAuthStore(state => state.user);

  const logoutHandlers = () => {
    handleLogout();
    onClick();
  };

  return (
    <>
      <li>
        <Link onClick={onClick} href="/notes/filter/all">
          Notes
        </Link>
      </li>
      <li className={css.navigationItem}>
        <Link
          onClick={onClick}
          href="/profile"
          prefetch={false}
          className={css.navigationLink}>
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}> {user?.email} </p>
        <button onClick={logoutHandlers} className={css.logoutButton}>
          Logout
        </button>
      </li>
    </>
  );
};

export default AuthLogoutItem;
