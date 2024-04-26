import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useGetCurrentMeeting,
  useUpdateMeeting,
} from '@features/Admin/Meetings';
import { useUploadImage } from '@features/Image/hooks/useUploadImage';
import { axiosApi } from '@entities/api';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useUpdateMeetingPage = () => {
  const { t } = useTranslation('meetings');
  const { id } = useParams<{ id: string }>();
  const { create, validate } = useUpdateMeeting(id as string);
  const { getData } = useGetCurrentMeeting(id as string);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<0 | 1 | 2>(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { handleUploadImage } = useUploadImage();

  type Values = {
    title_ru: string;
    html_content_ru: string;
    title_en: string;
    html_content_en: string;
    title_be: string;
    html_content_be: string;
    cover: string | null;
    target_date: Date;
    meeting_link: string;
  };

  const initialValues = {
    title_ru: ' ',
    html_content_ru: ' ',
    title_en: ' ',
    html_content_en: ' ',
    title_be: ' ',
    html_content_be: ' ',
    cover: null,
    target_date: new Date(),
    meeting_link: null as unknown as string,
  };

  const { values, errors, setFieldValue, handleSubmit, isValid, setValues } =
    useFormik<Values>({
      initialValues,
      validate: (val) => validate({ ...val, status }),
      onSubmit: async (body) => {
        const data = await create({ ...body, status });
        if (data) {
          navigate(AppRoutes[AppRoutesEnum.ADMIN_MEETINGS]());
        }
      },
    });

  const handleDelete = useCallback(async () => {
    try {
      await axiosApi.delete(`/news/${id}`);
      navigate(AppRoutes[AppRoutesEnum.ADMIN_MEETINGS]());
      toast.success(t('toast.deleteSuccess'));
    } catch (error) {
      console.error(error);
      toast.error(t('toast.deleteError'));
    }
  }, [id, navigate, t]);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((data) => {
        if (data) {
          const newValues = {
            cover: data.cover || null,
            html_content_en: data.html_content.en,
            html_content_ru: data.html_content.ru,
            html_content_be: data.html_content.be,
            meeting_link: data.meeting_link,
            target_date: new Date(data.target_date * 1000),
            title_en: data.title.en,
            title_ru: data.title.ru,
            title_be: data.title.be,
          };
          setValues(newValues);
          setStatus(data.status || 0);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getData, setValues]);

  return {
    handleUploadImage,
    status,
    isLoading,
    errors,
    handleSubmit,
    setFieldValue,
    handleDelete,
    setStatus,
    values,
    isValid,
    open,
    setOpen,
    t,
  };
};