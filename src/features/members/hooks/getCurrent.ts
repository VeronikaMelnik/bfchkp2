import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IMember } from '@entities/types';

export const useGetCurrentMember = (id: string) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [data] = useState<IMember>();

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosApi.get<IMember>(`/api/member/${id}`);
      if (data) {
        return data;
      } else {
        toast.error(t('error.getError'));
      }
    } catch (error) {
      toast.error(t('error.getError'));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id, t]);

  return {
    getData,
    isLoading,
    data,
  };
};
