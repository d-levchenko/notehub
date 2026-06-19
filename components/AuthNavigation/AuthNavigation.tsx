'use client';

import clientNoteService from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/lib/store/authStore';

import AuthLogoutItem from '../AuthLogoutItem/AuthLogoutItem';
import AuthLoginItem from '../AuthLoginItem/AuthLoginItem';

interface AuthNavigationProps {
  onClick: () => void;
}

const AuthNavigation = ({ onClick }: AuthNavigationProps) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    try {
      await clientNoteService.logout();
    } finally {
      clearIsAuthenticated();
      router.push('/sign-in');
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <AuthLogoutItem handleLogout={handleLogout} onClick={onClick} />
      ) : (
        <AuthLoginItem onClick={onClick} />
      )}
    </>
  );
};

export default AuthNavigation;
