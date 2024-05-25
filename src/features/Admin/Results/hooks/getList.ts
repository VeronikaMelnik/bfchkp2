import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  BaseResponse,
  INewsFilter,
  INewsSort,
  IResult,
  ListParams,
} from '@entities/types';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useGetResultsList = () => {
  const { t } = useTranslation('results');
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data },
        } = await axiosApi.get<BaseResponse<Array<IResult>>>(
          '/judges/results',
          {
            params,
          },
        );
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
