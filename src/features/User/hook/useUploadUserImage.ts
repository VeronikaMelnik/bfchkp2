import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse, IFile } from '@entities/types';

export const useUploadUserImage = () => {
  const handleUploadImage = useCallback(async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const { data } = await axiosApi.post<BaseResponse<IFile>>(
        `api/me/avatar`,
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
  }, []);
  return {
    handleUploadImage,
  };
};
