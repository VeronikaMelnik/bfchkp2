import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { axiosApi } from '@entities/api';
import { IRegistrationResponse } from '@entities/types/registration.interface';
import {
  AppRoutes,
  AppRoutesEnum,
  TOKEN_LOCAL_STORAGE_KEY,
} from '@shared/constants';

export const useRegistration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const schema = z
    .object({
      name: z.string(),
      lastName: z.string(),
      email: z.string(),
      password: z.string().min(4),
    })
    .required();

  type ValuesType = z.infer<typeof schema>;
  const initialValues: ValuesType = {
    name: '',
    lastName: '',
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
        } = await axiosApi.post<IRegistrationResponse>(
          'api/auth/registration',
          body,
        );
        const email = body.email;
        let isAdmin = false;

        if (email === 'admin@admin.com') {
          isAdmin = true;
        }
        if (isAdmin) {
          navigate(AppRoutes[AppRoutesEnum.ADMIN_NEWS]());
        } else {
          navigate(AppRoutes[AppRoutesEnum.NEWS]());
        }
        toast.success(`${t('success.register')}`);
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
      } catch (error) {
        console.error(error);
        toast.error(t('error.register'));
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
