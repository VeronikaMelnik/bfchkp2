import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IUser } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCurrentUser = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [users, setUsers] = useState<IUser>();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axiosApi
      .get<IUser>(`/api/me`)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
        toast.error(t('error.notFound'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, t]);

  const handleEditClick = useCallback(() => {
    navigate(AppRoutes[AppRoutesEnum.UPDATE_USER]());
  }, [navigate]);

  return { setUsers, users, isLoading, t, handleEditClick };
};
