import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IResult, ListParams } from '@entities/types';

interface Params extends ListParams {}
interface Result {
  data: Array<IResult>;
  total: number;
}

export const useGetResultsList = () => {
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Result>('/judges/results', {
          params,
        });
        setTotal(Math.floor(total / params.perPage));
        return data;
      } catch (error) {
        toast.error(t('error.list'));
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
