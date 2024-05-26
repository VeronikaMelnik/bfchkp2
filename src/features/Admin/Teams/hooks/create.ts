import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

export const useCreateTeams = () => {
  const { t } = useTranslation();
  const schema = z.object({
    name: z.string().min(1, t('errors.required')).max(256, t('errors.max256')),
    city: z.string().min(1, t('errors.required')).max(256, t('errors.max256')),
    address: z
      .string()
      .min(1, t('errors.required'))
      .max(256, t('errors.max256')),
  });

  type ValuesType = z.infer<typeof schema>;

  const validate = useCallback(
    (news: ValuesType) => {
      const res = schema.safeParse(news) as SafeParseError<ValuesType>;
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [schema],
  );

  const create = useCallback(
    async (teams: ValuesType) => {
      const errors = validate(teams);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.post<BaseResponse<ITeam>>('api/admin/team', teams);
        toast.success(t('toast.createSuccess'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('toast.createError'));
      }
    },
    [t, validate],
  );

  return {
    create,
    validate,
  };
};
