import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { ITeam } from '@entities/types/team.interface';

export const useGetCurrentTeam = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [data] = useState<ITeam>();

  const getData = useCallback(
    async (id: string | number) => {
      setIsLoading(true);
      try {
        const { data } = await axiosApi.get<ITeam>(`/api/team/${id}`);
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
    },
    [t],
  );

  return {
    getData,
    isLoading,
    data,
  };
};
