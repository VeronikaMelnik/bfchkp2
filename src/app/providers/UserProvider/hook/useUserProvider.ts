import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { axiosApi } from '@entities/api';
import { IUser } from '@entities/types';
import { TOKEN_LOCAL_STORAGE_KEY, ROLES_ADMIN } from '@shared/constants';

export const useUserProvider = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCoach, setIsCoach] = useState(false);
  const [isJudge, setIsJudge] = useState(false);

  const handleSetUser = useCallback((user?: IUser) => {
    const isUserAdmin = (user && ROLES_ADMIN.includes(user?.id)) || false;
    const coachesTable = [
      5, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 26, 27, 28, 29, 30,
    ];
    const isUserCoach =
      user && user.person && user.person.id
        ? coachesTable.includes(user.person.id)
        : false;
    const judgesTable = [5, 12, 13, 14, 17, 18, 22, 24, 25, 26];
    const isUserJudge =
      user && user.person && user.person.id
        ? judgesTable.includes(user.person.id)
        : false;
    setIsAdmin(isUserAdmin);
    setIsCoach(isUserCoach);
    setIsJudge(isUserJudge);
    setUser(user);
  }, []);

  useEffect(() => {
    if (!user) {
      if (token) {
        setToken(token);
        setIsLoading(true);
        axiosApi
          .get<IUser>('/api/me')
          .then(({ data }) => {
            handleSetUser(data);
          })
          .catch((err) => {
            console.error(err);
            localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
            setToken(null);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [user, isLoading, token, handleSetUser, t]);

  const value = useMemo(
    () => ({
      isAdmin,
      isCoach,
      isJudge,
      user,
      setUser: handleSetUser,
      isLoading,
      setIsLoading,
      token,
      setToken,
    }),
    [handleSetUser, isAdmin, isCoach, isJudge, isLoading, token, user],
  );

  return {
    value,
  };
};
