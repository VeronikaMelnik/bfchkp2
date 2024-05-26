import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCurrentTeam } from '@features/Admin/Teams/hooks/getCurrent';
import { useUpdateTeams } from '@features/Admin/Teams/hooks/update';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useUpdateTeamsPage = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const { update, validate } = useUpdateTeams();
  const { t } = useTranslation('teams');
  const navigate = useNavigate();
  const { getData } = useGetCurrentTeam();

  const initialValues = {
    name: '',
    city: '',
    address: '',
  };

  const { values, errors, setFieldValue, handleSubmit, isValid, setValues } =
    useFormik({
      initialValues,
      validate: ({ name, city, address }) => {
        return validate({
          name: name,
          city: city,
          address: address,
        });
      },
      onSubmit: async ({ name, city, address }) => {
        const data = await update({
          body: {
            name: name,
            city: city,
            address: address,
          },
          id,
        });
        if (data) {
          navigate(AppRoutes[AppRoutesEnum.NEWS]());
        }
      },
    });

  const handleGetData = useCallback(async () => {
    const oldData = await getData(id);
    setValues({
      name: oldData?.name ?? '',
      city: oldData?.city ?? '',
      address: oldData?.address ?? '',
    });
  }, [getData, id, setValues]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
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
