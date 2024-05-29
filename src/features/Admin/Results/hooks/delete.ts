import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse, IResult } from '@entities/types';

export const useDeleteResults = () => {
  const { t } = useTranslation();

  const onDelete = useCallback(
    async (id: string | number) => {
      try {
        const {
          data: { data },
        } = await axiosApi.delete<BaseResponse<IResult>>(
          `/api/admin/result/${id}`,
        );
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
