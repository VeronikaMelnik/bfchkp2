import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

export const useDeleteTeam = () => {
  const { t } = useTranslation();

  const onDelete = useCallback(
    async (id: string | number) => {
      try {
        const {
          data: { data },
        } = await axiosApi.delete<BaseResponse<ITeam>>(`/api/admin/team/${id}`);
        toast.success(t('success.delete'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('error.delete'));
      }
    },
    [t],
  );

  return {
    onDelete,
  };
};
