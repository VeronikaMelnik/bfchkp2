import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IDiscipline } from '@entities/types';

export const useGetUserDisciplinesList = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosApi.get<Array<IDiscipline>>(
        '/api/admin/disciplines',
      );
      // toDo: update from server
      return data;
    } catch (error) {
      toast.error(t('error.list'));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  return {
    getData,
    isLoading,
  };
};
