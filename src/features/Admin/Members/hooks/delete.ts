import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse, IMember } from '@entities/types';

export const useDeleteMembers = () => {
  const { t } = useTranslation();

  const onDelete = useCallback(
    async (id: string | number) => {
      try {
        const {
          data: { data },
        } = await axiosApi.delete<BaseResponse<IMember>>(
          `/api/admin/team/member/${id}`,
        );
        toast.success(t('toast.deleteSuccess'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('toast.deleteError'));
      }
    },
    [t],
  );

  return {
    onDelete,
  };
};
