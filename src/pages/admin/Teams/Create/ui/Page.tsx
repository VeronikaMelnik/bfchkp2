import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button, TextField } from '@shared/ui';
import { useCreateTeamsPage } from '../hook/';

const Page = () => {
  const { errors, handleSubmit, setFieldValue, values, isValid, t } =
    useCreateTeamsPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.TEAMS](),
            title: t('routes.teams'),
          },
          { href: '', title: t('routes.create') },
        ]}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          value={values.name}
          onChange={(ev) => {
            setFieldValue('name', ev.target.value);
          }}
          error={errors.name}
          label={t('editor.content.name')}
        />
        <TextField
          value={values.city}
          onChange={(ev) => {
            setFieldValue('city', ev.target.value);
          }}
          error={errors.city}
          label={t('editor.content.city')}
        />
        <TextField
          value={values.address}
          onChange={(ev) => {
            setFieldValue('address', ev.target.value);
          }}
          error={errors.address}
          label={t('editor.content.address')}
        />
        <Button type={'submit'} disabled={!isValid}>
          {t('controls.publish')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
