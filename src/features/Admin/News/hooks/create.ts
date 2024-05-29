import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, INews } from '@entities/types';

export const useCreateNews = () => {
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
    (news: ValuesType) => {
      const res = schema.safeParse(news) as SafeParseError<ValuesType>;
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [schema],
  );

  const create = useCallback(
    async (news: ValuesType) => {
      const errors = validate(news);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.post<BaseResponse<INews>>('api/admin/news', news);
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
