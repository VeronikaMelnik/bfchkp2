import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { ISelectOption } from '@entities/components/editor';
import { ListParams } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

interface Params extends ListParams {}
interface Team {
  data: Array<ITeam>;
  total: number;
}

export const useGetTeams = () => {
  const { t } = useTranslation('teams');
  const [total, setTotal] = useState(0);
  const [options, setOptions] = useState<Array<ISelectOption>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Team>('/coaches/teams', {
          params,
        });
        setTotal(Math.floor(total / params.perPage));
        if (data) {
          const res: Array<ISelectOption> = data.map(({ name, id }) => ({
            label: name,
            value: id,
          }));
          res.unshift({ label: 'Другое', value: 0 });
          setOptions(res);
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
    },
    [t],
  );

  return {
    total,
    getData,
    isLoading,
    options,
    selected,
    setSelected,
  };
};
