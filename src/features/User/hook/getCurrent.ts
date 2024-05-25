import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IUser } from '@entities/types';

export const useGetCurrentUser = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [data] = useState<IUser>();

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosApi.get<IUser>(`/api/me`);
      if (data) {
        return data;
      } else {
        toast.error(t('errors.getError'));
      }
    } catch (error) {
      toast.error(t('errors.getError'));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  return {
    getData,
    isLoading,
    data,
  };
};
