import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IJudge } from '@entities/types';

export const useGetUserJudgesList = () => {
  const { t } = useTranslation('news');
  const [isLoading, setIsLoading] = useState(false);
  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosApi.get<Array<IJudge>>('/judges');
      // toDo: update from server
      return data;
    } catch (error) {
      toast.error(t('toast.listError'));
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
