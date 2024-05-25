import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useUpdateNews,
  useUploadNewsImage,
  useGetCurrentNews,
} from '@features/Admin';
import {
  AppRoutes,
  AppRoutesEnum,
  IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from '@shared/constants';

export const useUpdateNewsPage = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const { update, validate } = useUpdateNews();
  const { t } = useTranslation('news');
  const [image, setImage] = useState<File>();
  const navigate = useNavigate();
  const { handleUploadImage } = useUploadNewsImage();
  const { getData } = useGetCurrentNews();

  const initialValues = {
    title_ru: '',
    description_ru: '',
    title_be: '',
    description_be: '',
    title_en: '',
    description_en: '',
  };

  const { values, errors, setFieldValue, handleSubmit, isValid, setValues } =
    useFormik({
      initialValues,
      validate: ({
        title_ru,
        title_be,
        title_en,
        description_ru,
        description_be,
        description_en,
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
        description_ru,
        description_be,
        description_en,
      }) => {
        const data = await update({
          body: {
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
          },
          id,
        });
        if (data && data.data && data.data.id && image) {
          await handleUploadImage(image, data.data.id);
        }
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

  const handleGetData = useCallback(async () => {
    const oldData = await getData(id);
    setValues({
      title_ru: oldData?.title.ru ?? '',
      title_be: oldData?.title.be ?? '',
      title_en: oldData?.title.en ?? '',
      description_ru: oldData?.description.ru ?? '',
      description_be: oldData?.description.be ?? '',
      description_en: oldData?.description.en ?? '',
    });
  }, [getData, id, setValues]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
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
    setImage,
  };
};
