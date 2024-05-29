import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { ListParams } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

interface Params extends ListParams {}
interface Result {
  data: Array<ITeam>;
  total: number;
}

export const useGetTeamsList = () => {
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Result>('/coaches/teams', {
          params,
        });
        setTotal(total);
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
    total,
  };
};
