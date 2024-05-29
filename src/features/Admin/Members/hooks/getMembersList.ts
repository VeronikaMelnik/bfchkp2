import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { ISelectOption } from '@entities/components/editor';
import { IUser, ListParams } from '@entities/types';

interface Params extends ListParams {}
interface User {
  data: Array<IUser>;
  total: number;
}

export const useGetMembers = () => {
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  const [options, setOptions] = useState<Array<ISelectOption>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<User>('/api/admin/users', {
          params,
        });
        setTotal(total);
        if (data) {
          const res: Array<ISelectOption> = data.map(({ person, id }) => ({
            label: person.name + ' ' + person.lastName,
            value: id,
          }));
          res.unshift({ label: 'Другое', value: 0 });
          setOptions(res);
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
    total,
    getData,
    isLoading,
    options,
    selected,
    setSelected,
  };
};
