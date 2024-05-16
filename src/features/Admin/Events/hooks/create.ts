import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SafeParseError, z } from 'zod';
import { axiosApi } from '@entities/api';
import { BaseResponse, INews } from '@entities/types';

export const useCreateEvent = () => {
  const { t } = useTranslation('events');
  const schema = z
    .object({
      title_ru: z
        .string()
        .min(1, t('errors.required'))
        .max(256, t('errors.max256')),
      title_be: z
        .string()
        .min(1, t('errors.required'))
        .max(256, t('errors.max256')),
      title_en: z
        .string()
        .min(1, t('errors.required'))
        .max(256, t('errors.max256')),
      description_ru: z
        .string()
        .min(1, t('errors.required'))
        .refine((val) => val !== '<p><br></p>', t('errors.required')),
      description_be: z
        .string()
        .min(1, t('errors.required'))
        .refine((val) => val !== '<p><br></p>', t('errors.required')),
      description_en: z
        .string()
        .min(1, t('errors.required'))
        .refine((val) => val !== '<p><br></p>', t('errors.required')),
      status: z.number().int().min(0).max(2),
    })
    .required();

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
    async (event: ValuesType) => {
      const errors = validate(event);
      if (errors) {
        Object.entries(errors).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
        return;
      }
      try {
        const {
          data: { data },
        } = await axiosApi.put<BaseResponse<INews>>('/news', {
          ...event,
          is_event: 1,
        });
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
