import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  INews,
  INewsFilter,
  INewsSort,
  ListParams,
  PaginationResponse,
} from '@entities/types';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

interface Data extends PaginationResponse {
  data: Array<INews>;
}

export const useGetUserNewsList = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      setIsLoading(true);
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Data>('/api/news', {
          params,
        });
        setTotal(Math.floor(total / params.perPage));
        return data;
      } catch (error) {
        toast.error(t('error.list'));
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
