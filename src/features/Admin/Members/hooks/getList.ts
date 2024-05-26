import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { IMember, ListParams } from '@entities/types';

interface Params extends ListParams {}
interface Members {
  data: Array<IMember>;
  total: number;
}

export const useGetMembersList = () => {
  const { t } = useTranslation('members');
  const [total, setTotal] = useState(0);
  const getData = useCallback(
    async (params: Params) => {
      try {
        const {
          data: { data, total },
        } = await axiosApi.get<Members>('/api/admin/members', {
          params,
        });
        setTotal(Math.floor(total / params.perPage));
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
