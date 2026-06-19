'use client';

import clientNoteService from '@/lib/api/clientApi';
import useAuthStore from '@/lib/store/authStore';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore(state => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated,
  );

  const path = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const isAuthenticated = await clientNoteService.checkSession();

        if (!isAuthenticated) {
          clearIsAuthenticated();
          return;
        }

        const user = await clientNoteService.getMe();

        setUser(user);
      } catch {
        clearIsAuthenticated();
      }
    };

    fetchUser();
  }, [path, setUser, clearIsAuthenticated]);

  return <>{children}</>;
};

export default AuthProvider;
