import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCurrentUser } from '@features/User/hook/getCurrent';
import { useUpdateUser } from '@features/User/hook/update';
import { useUploadUserImage } from '@features/User/hook/useUploadUserImage';
import {
  AppRoutes,
  AppRoutesEnum,
  IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from '@shared/constants';

export const useUpdateUserPage = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const { update, validate } = useUpdateUser();
  const { t } = useTranslation('users');
  const [image, setImage] = useState<File>();
  const { handleUploadImage } = useUploadUserImage();
  const navigate = useNavigate();
  const { getData } = useGetCurrentUser();

  const initialValues = {
    email: '',
    name: '',
    lastName: '',
    password: '',
  };

  const { values, errors, setFieldValue, handleSubmit, isValid, setValues } =
    useFormik({
      initialValues,
      validate: ({ email, name, lastName, password }) => {
        return validate({
          email: email,
          name: name,
          lastName: lastName,
          password: password,
        });
      },
      onSubmit: async ({ email, name, lastName, password }) => {
        const data = await update({
          body: {
            email: email,
            name: name,
            lastName: lastName,
            password: password,
          },
          id,
        });
        if (image) {
          await handleUploadImage(image);
        }
        if (data) {
          navigate(AppRoutes[AppRoutesEnum.NEWS]());
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
    const oldData = await getData();
    setValues({
      email: oldData?.email ?? '',
      name: oldData?.person.name ?? '',
      lastName: oldData?.person.lastName ?? '',
      password: '',
    });
  }, [getData, setValues]);

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
