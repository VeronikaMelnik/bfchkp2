import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCreateNews } from '@features/Admin';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCreateNewsPage = () => {
  const { create, validate } = useCreateNews();
  const { t } = useTranslation('news');
  const navigate = useNavigate();

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
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.ADMIN_NEWS]());
      }
    },
  });

  return {
    values,
    errors,
    setFieldValue,
    handleSubmit,
    isValid,
    t,
    open,
  };
};
