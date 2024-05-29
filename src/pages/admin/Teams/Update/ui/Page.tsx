import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button, TextField } from '@shared/ui';
import { useUpdateTeamsPage } from '../hook';

const Page = () => {
  const { errors, handleSubmit, setFieldValue, values, isValid, t } =
    useUpdateTeamsPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_TEAMS](),
            title: t('sidebar.teams'),
          },
          { href: '', title: t('sidebar.edit') },
        ]}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          value={values.name}
          onChange={(ev) => {
            setFieldValue('name', ev.target.value);
          }}
          error={errors.name}
          label={t('field.teamName')}
        />
        <TextField
          value={values.city}
          onChange={(ev) => {
            setFieldValue('city', ev.target.value);
          }}
          error={errors.city}
          label={t('field.city')}
        />
        <TextField
          value={values.address}
          onChange={(ev) => {
            setFieldValue('address', ev.target.value);
          }}
          error={errors.address}
          label={t('field.address')}
        />
        <Button type={'submit'} disabled={!isValid}>
          {t('controls.refresh')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
