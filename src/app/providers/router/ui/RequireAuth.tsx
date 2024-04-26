import { ForbiddenPage } from '@pages/Forbidden';
import { useUser } from '@features/User/hook';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: Array<number>;
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const { user } = useUser();
  const auth = !!user;
  if (!auth || (roles && !roles?.includes(user.id))) {
    return <ForbiddenPage />;
  }

  return children;
}
