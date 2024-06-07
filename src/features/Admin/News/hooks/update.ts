import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, INews } from '@entities/types';

export const useUpdateNews = () => {
  const { t } = useTranslation();
  const schema = z.object({
    title: z.object({
      ru: z.string().min(1, t('error.required')).max(256, t('error.max256')),
      be: z.string().min(1, t('error.required')).max(256, t('error.max256')),
      en: z.string().min(1, t('error.required')).max(256, t('error.max256')),
    }),
    description: z.object({
      ru: z.string().min(1, t('error.required')),
      be: z.string().min(1, t('error.required')),
      en: z.string().min(1, t('error.required')),
    }),
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
        const { data } = await axiosApi.patch<BaseResponse<INews>>(
          `api/admin/news/${id}`,
          { ...body },
        );
        toast.success(t('success.update'));
        return data;
      } catch (error) {
        console.error(error);
        toast.error(t('error.update'));
      }
    },
    [t, validate],
  );

  return {
    update,
    validate,
  };
};
