import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  INewsFilter,
  INewsSort,
  ListParams,
  PaginationResponse,
} from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

interface Data extends PaginationResponse {
  data: Array<ITeam>;
}

export const useGetUserTeamsList = () => {
  const { t } = useTranslation('teams');
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      setIsLoading(true);
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Data>('/coaches/teams', {
          params,
        });
        setTotal(total);
        return data;
      } catch (error) {
        toast.error(t('toast.listError'));
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
    total,
  };
};
