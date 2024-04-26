import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { axiosApi } from '@entities/api';
import { ILoginResponse } from '@entities/types';
import {
  AppRoutes,
  AppRoutesEnum,
  TOKEN_LOCAL_STORAGE_KEY,
} from '@shared/constants';

export const useLogin = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const schema = z
    .object({
      email: z.string(),
      password: z.string().min(4),
    })
    .required();

  type ValuesType = z.infer<typeof schema>;
  const initialValues: ValuesType = {
    email: '',
    password: '',
  };
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    validate: (values) => {
      try {
        schema.parse(values);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
        return error.formErrors.fieldErrors;
      }
    },
    onSubmit: async (body) => {
      try {
        const {
          data: { token },
        } = await axiosApi.post<ILoginResponse>('api/auth/login', body);

        // начало
        const email = body.email;
        let isAdmin = false;

        if (email === 'admin@admin.com') {
          isAdmin = true;
        }
        // конец
        if (isAdmin) {
          navigate(AppRoutes[AppRoutesEnum.ADMIN]());
        } else {
          navigate(AppRoutes[AppRoutesEnum.MAIN]());
        }
        toast.success(`${t('toast.loginSuccess')}`);
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
      } catch (error) {
        console.error(error);
        toast.error(t('toast.loginError'));
      }
    },
  });

  return {
    values,
    errors,
    setFieldValue,
    handleSubmit,
    t,
  };
};
