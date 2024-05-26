import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, IMember } from '@entities/types';

export const useCreateMembers = () => {
  const { t } = useTranslation();
  const schema = z.object({
    teamId: z.number(),
    personId: z.number(),
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
