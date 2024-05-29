import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button, TextField } from '@shared/ui';
import { useCreateNewsPage } from '../hook/';

const Page = () => {
  const { errors, handleSubmit, setFieldValue, values, isValid, t } =
    useCreateNewsPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
            title: t('sidebar.news'),
          },
          { href: '', title: t('sidebar.create') },
        ]}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          value={values.title_ru}
          onChange={(ev) => {
            setFieldValue('title_ru', ev.target.value);
          }}
          error={errors.title_ru}
          label={t('field.title_ru')}
        />
        <TextField
          value={values.title_be}
          onChange={(ev) => {
            setFieldValue('title_be', ev.target.value);
          }}
          error={errors.title_be}
          label={t('field.title_be')}
        />
        <TextField
          value={values.title_en}
          onChange={(ev) => {
            setFieldValue('title_en', ev.target.value);
          }}
          error={errors.title_en}
          label={t('field.title_en')}
        />
        <TextField
          value={values.description_ru}
          onChange={(ev) => {
            setFieldValue('description_ru', ev.target.value);
          }}
          error={errors.description_ru}
          label={t('field.description_ru')}
        />
        <TextField
          value={values.description_be}
          onChange={(ev) => {
            setFieldValue('description_be', ev.target.value);
          }}
          error={errors.description_be}
          label={t('field.description_be')}
        />
        <TextField
          value={values.description_en}
          onChange={(ev) => {
            setFieldValue('description_en', ev.target.value);
          }}
          error={errors.description_en}
          label={t('field.description_en')}
        />
        <Button type={'submit'} disabled={!isValid}>
          {t('controls.publish')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
