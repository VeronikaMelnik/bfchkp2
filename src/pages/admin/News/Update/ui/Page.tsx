import { Cover, PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconStaple } from '@shared/icons';
import { Button, TextField } from '@shared/ui';
import { useUpdateNewsPage } from '../hook';

const Page = () => {
  const {
    errors,
    handleSubmit,
    setFieldValue,
    values,
    isValid,
    t,
    getInputProps,
    open,
    image,
    setImage,
  } = useUpdateNewsPage();
  return (
    <PageSkeleton>
      <input {...getInputProps()} />
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
            title: t('sidebar.news'),
          },
          { href: '', title: t('sidebar.edit') },
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
        <div>
          {!image ? (
            <Button variant={'light'} type="button" onClick={open}>
              <IconStaple width={24} height={24} />
              {t('controls.image')}
            </Button>
          ) : (
            <Cover src={''} onRemove={() => setImage(undefined)} />
          )}
        </div>
        <Button type={'submit'} disabled={!isValid}>
          {t('controls.refresh')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
