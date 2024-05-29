import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

export const useUpdateTeams = () => {
  const { t } = useTranslation();
  const schema = z.object({
    name: z.string().min(1, t('error.required')).max(256, t('error.max256')),
    city: z.string().min(1, t('error.required')).max(256, t('error.max256')),
    address: z.string().min(1, t('error.required')).max(256, t('error.max256')),
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
    async ({ body, id }: Props) => {
      const errors = validate(body);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const { data } = await axiosApi.patch<BaseResponse<ITeam>>(
          `api/admin/team/${id}`,
          { ...body },
        );
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
