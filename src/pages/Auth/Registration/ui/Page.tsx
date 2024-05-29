import { PageHeader, PageSkeleton, PasswordField } from '@entities/components';
import { Button, Card, TextField } from '@shared/ui';
import { useRegistration } from '../hook';

export default () => {
  const { errors, handleSubmit, setFieldValue, values, t } = useRegistration();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[{ href: '', title: t('sidebar.registration') }]}
      />
      <form onSubmit={handleSubmit}>
        <Card padding={12} gap={20} flexDirection="column">
          <TextField
            value={values.name}
            onChange={(ev) => setFieldValue('name', ev.target.value)}
            label={t('field.name')}
            error={errors.name}
          />
          <TextField
            value={values.lastName}
            onChange={(ev) => setFieldValue('lastName', ev.target.value)}
            label={t('field.lastName')}
            error={errors.lastName}
          />
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
          <Button type="submit">{t('button.register')}</Button>
        </Card>
      </form>
    </PageSkeleton>
  );
};
