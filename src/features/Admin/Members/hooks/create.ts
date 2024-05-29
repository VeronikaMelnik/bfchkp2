import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, IMember } from '@entities/types';

export const useCreateMembers = () => {
  const { t } = useTranslation();
  const schema = z.object({
    teamId: z.number().min(1, t('error.required')).max(256, t('error.max256')),
    personId: z
      .number()
      .min(1, t('error.required'))
      .max(256, t('error.max256')),
  });

  type ValuesType = z.infer<typeof schema>;

  const validate = useCallback(
    (members: ValuesType) => {
      const res = schema.safeParse(members) as SafeParseError<ValuesType>;
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [schema],
  );

  const create = useCallback(
    async (members: ValuesType) => {
      const errors = validate(members);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.post<BaseResponse<IMember>>(
          'api/admin/team/members',
          members,
        );
        toast.success(t('success.create'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('error.create'));
      }
    },
    [t, validate],
  );

  return {
    create,
    validate,
  };
};
