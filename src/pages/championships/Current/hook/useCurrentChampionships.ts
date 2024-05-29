import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IChampionship } from '@entities/types';

export const useCurrentChampionships = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [championships, setChampionships] = useState<IChampionship>();

  useEffect(() => {
    setIsLoading(true);
    axiosApi
      .get<IChampionship>(`/api/championship/${id}`)
      .then(({ data }) => {
        setChampionships(data);
      })
      .catch((err) => {
        console.error(err);
        toast.error(t('toast.notFound'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, t]);
  return { championships, isLoading, t };
};
