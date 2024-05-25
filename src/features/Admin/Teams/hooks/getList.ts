import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  BaseResponse,
  INewsFilter,
  INewsSort,
  ListParams,
} from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useGetTeamsList = () => {
  const { t } = useTranslation('news');
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data },
        } = await axiosApi.get<BaseResponse<Array<ITeam>>>('/coaches/teams', {
          params,
        });
        return data;
      } catch (error) {
        toast.error(t('toast.listError'));
        console.error(error);
      }
    },
    [t],
  );

  return {
    getData,
  };
};
