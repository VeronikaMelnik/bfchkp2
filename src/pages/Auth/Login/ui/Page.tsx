import { PageHeader, PageSkeleton, PasswordField } from '@entities/components';
import { Button, Card, TextField } from '@shared/ui';
import { useLogin } from '../hook';

export default () => {
  const { errors, handleSubmit, setFieldValue, values, t } = useLogin();
  return (
    <PageSkeleton>
      <PageHeader breadcrumbs={[{ href: '', title: t('sidebar.login') }]} />
      <form onSubmit={handleSubmit}>
        <Card padding={12} gap={20} flexDirection="column">
          <TextField
            value={values.email}
            onChange={(ev) => setFieldValue('email', ev.target.value)}
            label={t('field.email')}
            error={errors.email}
          />
          <PasswordField
            value={values.password}
            onChange={(ev) => setFieldValue('password', ev.target.value)}
            label={t('field.password')}
            error={errors.password}
          />
          <Button type="submit">{t('button.login')}</Button>
        </Card>
      </form>
    </PageSkeleton>
  );
};
