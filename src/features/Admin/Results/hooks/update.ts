import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, IResult } from '@entities/types';

export const useUpdateResults = (id: number) => {
  const { t } = useTranslation();
  const schema = z.object({
    place: z.number().min(1, t('error.required')).max(256, t('error.max256')),
    memberId: z
      .number()
      .min(1, t('error.required'))
      .max(256, t('error.max256')),
    championshipId: z
      .number()
      .min(1, t('error.required'))
      .max(256, t('error.max256')),
  });

  type ValuesType = z.infer<typeof schema>;

  const validate = useCallback(
    (results: ValuesType) => {
      const res = schema.safeParse(results) as SafeParseError<ValuesType>;
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [schema],
  );

  const update = useCallback(
    async (results: ValuesType) => {
      const errors = validate(results);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.patch<BaseResponse<IResult>>(
          `api/admin/result/${id}`,
          { ...results },
        );
        toast.success(t('success.update'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('toast.updateError'));
      }
    },
    [t, validate, id],
  );

  return {
    update,
    validate,
  };
};
