'use client';

import useAuthStore from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const router = useRouter();

  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated,
  );

  useEffect(() => {
    clearIsAuthenticated();
  }, [clearIsAuthenticated]);

  useEffect(() => {
    router.refresh();
  }, [router]);

  return <>{children}</>;
};

export default PublicLayout;
