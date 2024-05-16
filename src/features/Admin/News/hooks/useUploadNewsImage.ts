import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse, IFile } from '@entities/types';

export const useUploadNewsImage = () => {
  const handleUploadImage = useCallback(
    async (file: File, id: string | number) => {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const {
          data: { data },
        } = await axiosApi.post<BaseResponse<IFile>>(
          `api/admin/news/${id}/image`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        return data;
      } catch (error) {
        console.error(error);
        toast.error('Не удалось загрузить файл');
      }
    },
    [],
  );
  return {
    handleUploadImage,
  };
};
