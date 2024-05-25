import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, IUser } from '@entities/types';

export const useUpdateUser = () => {
  const { t } = useTranslation('users');
  const schema = z.object({
    email: z.string().min(1, t('errors.required')).max(256, t('errors.max256')),
    name: z.string().min(1, t('errors.required')).max(256, t('errors.max256')),
    lastName: z
      .string()
      .min(1, t('errors.required'))
      .max(256, t('errors.max256')),
    password: z
      .string()
      .min(1, t('errors.required'))
      .max(256, t('errors.max256')),
  });

  type ValuesType = z.infer<typeof schema>;

  const validate = useCallback(
    (data: unknown) => {
      const res = schema.safeParse(data) as SafeParseError<ValuesType>;
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [schema],
  );

  type Props = {
    body: Partial<ValuesType>;
    id: number | string;
  };
  const update = useCallback(
    async ({ body }: Props) => {
      const errors = validate(body);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.patch<BaseResponse<IUser>>(`api/me`, {
          ...body,
        });
        toast.success(t('toast.updateSuccess'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('toast.updateError'));
      }
    },
    [t, validate],
  );

  return {
    update,
    validate,
  };
};
