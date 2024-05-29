import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCreateTeams } from '@features/Admin/Teams/hooks/create';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useCreateTeamsPage = () => {
  const { create, validate } = useCreateTeams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    city: '',
    address: '',
  };

  const { values, errors, setFieldValue, handleSubmit, isValid } = useFormik({
    initialValues,
    validate: ({ name, city, address }) => {
      return validate({
        name: name,
        city: city,
        address: address,
      });
    },
    onSubmit: async ({ name, city, address }) => {
      const data = await create({
        name: name,
        city: city,
        address: address,
      });
      if (data) {
        navigate(AppRoutes[AppRoutesEnum.TEAMS]());
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
