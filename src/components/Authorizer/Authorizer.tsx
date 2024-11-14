import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppInitSkeleton } from '../Skeletons';
import AccessDenied from './AccessDenied';

interface IAuthorizerProps {
  hasAccess?: string[];
  displayName: string | undefined;
  children: React.ReactNode;
}

const Authorizer = ({
  hasAccess = [],
  displayName,
  children,
}: IAuthorizerProps) => {
  const { authLoading, fetchAuthUser, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetchAuthUser();
  }, []);

  if (authLoading) {
    return <AppInitSkeleton />;
  }

  if (!user) {
    router.push(process.env.LOGIN_URL || '/404');
    return null;
  }

  const role = user.role;
  const hasPermission =
    hasAccess[0] === 'all' || (role ? hasAccess.includes(role) : false);

  if (!hasPermission) {
    return <AccessDenied feature={displayName} />;
  }

  return <>{children}</>; // Only control rendering of children
};

export default Authorizer;
