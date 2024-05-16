import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCreateNews, useUploadNewsImage } from '@features/Admin';
import {
  AppRoutes,
  AppRoutesEnum,
  IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from '@shared/constants';

export const useCreateNewsPage = () => {
  const { create, validate } = useCreateNews();
  const { t } = useTranslation('news');
  const [image, setImage] = useState<File>();
  const navigate = useNavigate();
  const { handleUploadImage } = useUploadNewsImage();

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
    validate: ({
      title_ru,
      title_be,
      title_en,
      description_be,
      description_en,
      description_ru,
    }) => {
      return validate({
        title: {
          ru: title_ru,
          be: title_be,
          en: title_en,
        },
        description: {
          ru: description_ru,
          be: description_be,
          en: description_en,
        },
      });
    },
    onSubmit: async ({
      title_ru,
      title_be,
      title_en,
      description_be,
      description_en,
      description_ru,
    }) => {
      const data = await create({
        title: {
          ru: title_ru,
          be: title_be,
          en: title_en,
        },
        description: {
          ru: description_ru,
          be: description_be,
          en: description_en,
        },
      });
      // if (data && data.id && image) {
      //   await handleUploadImage(image, data.id);
      // }
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.ADMIN_NEWS]());
      }
    },
  });
  const onDrop = useCallback(async (files: File[]) => {
    setImage(files[0]);
  }, []);
  const { getInputProps, open } = useDropzone({
    maxFiles: 1,
    accept: IMAGE_TYPES,
    maxSize: 4 * MAX_IMAGE_SIZE,
    onDrop,
  });

  return {
    handleUploadImage,
    values,
    errors,
    setFieldValue,
    handleSubmit,
    isValid,
    t,
    getInputProps,
    open,
    image,
    // setImage,
  };
};
