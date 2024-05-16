import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCreateNews } from '@features/Admin';
import { useUploadImage } from '@features/Image/hooks/useUploadImage';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCreateNewsPage = () => {
  const { create, validate } = useCreateNews();
  const { t } = useTranslation('news');
  const [status, setStatus] = useState<0 | 1 | 2>(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { handleUploadImage } = useUploadImage();

  const initialValues = {
    title_ru: '',
    description_ru: '',
    title_be: '',
    description_be: '',
    title_en: '',
    description_en: '',
  };

  const { values, errors, setFieldValue, handleSubmit, isValid } = useFormik({
    initialValues,
    validate: (values) => validate({ ...values, status }),
    onSubmit: async (body) => {
      const data = await create({ ...body, status });
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.ADMIN_NEWS]());
      }
    },
  });

  return {
    handleUploadImage,
    setIsDraft: setStatus,
    values,
    errors,
    setFieldValue,
    handleSubmit,
    isValid,
    open,
    setOpen,
    t,
  };
};
