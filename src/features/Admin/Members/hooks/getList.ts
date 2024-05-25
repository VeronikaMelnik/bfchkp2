import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  BaseResponse,
  IMember,
  INewsFilter,
  INewsSort,
  ListParams,
} from '@entities/types';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useGetMembersList = () => {
  const { t } = useTranslation('members');
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data },
        } = await axiosApi.get<BaseResponse<Array<IMember>>>(
          '/api/admin/members',
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
