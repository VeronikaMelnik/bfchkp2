import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  INewsFilter,
  INewsSort,
  IResult,
  ListParams,
  PaginationResponse,
} from '@entities/types';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

interface Data extends PaginationResponse {
  data: Array<IResult>;
}

export const useGetUserResultsList = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      setIsLoading(true);
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Data>('/judges/results', {
          params,
        });
        setTotal(Math.floor(total / params.perPage));
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
