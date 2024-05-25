import { PageHeader, PageSkeleton } from '@entities/components';
import { Button, TextField } from '@shared/ui';
import { useUpdateUserPage } from '../hook';

const Page = () => {
  const { errors, handleSubmit, setFieldValue, values, isValid, t } =
    useUpdateUserPage();
  return (
    <PageSkeleton>
      {/* <input {...getInputProps()} /> */}
      <PageHeader breadcrumbs={[{ href: '', title: t('routes.edit') }]} />
      <form onSubmit={handleSubmit}>
        <TextField
          value={values.email}
          onChange={(ev) => {
            setFieldValue('email', ev.target.value);
          }}
          error={errors.email}
          label={t('editor.content.email')}
        />
        <TextField
          value={values.name}
          onChange={(ev) => {
            setFieldValue('name', ev.target.value);
          }}
          error={errors.name}
          label={t('editor.content.name')}
        />
        <TextField
          value={values.lastName}
          onChange={(ev) => {
            setFieldValue('lastName', ev.target.value);
          }}
          error={errors.lastName}
          label={t('editor.content.lastName')}
        />
        <TextField
          value={values.password}
          onChange={(ev) => {
            setFieldValue('password', ev.target.value);
          }}
          error={errors.password}
          label={t('editor.content.password')}
        />
        <Button type={'submit'} disabled={!isValid}>
          {t('controls.refresh')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
