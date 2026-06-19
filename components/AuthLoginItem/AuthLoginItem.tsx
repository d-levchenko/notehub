import Link from 'next/link';

import css from '../AuthNavigation/AuthNavigation.module.css';

interface AuthLoginItemProps {
  onClick: () => void;
}

const AuthLoginItem = ({ onClick }: AuthLoginItemProps) => {
  return (
    <>
      <li className={css.navigationItem}>
        <Link
          onClick={onClick}
          href="/sign-in"
          prefetch={false}
          className={css.navigationLink}>
          Login
        </Link>
      </li>

      <li className={css.navigationItem}>
        <Link
          onClick={onClick}
          href="/sign-up"
          prefetch={false}
          className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </>
  );
};

export default AuthLoginItem;
