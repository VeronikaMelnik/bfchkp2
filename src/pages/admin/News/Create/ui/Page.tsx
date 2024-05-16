import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconEyeOpen } from '@shared/icons';
import { Button, TextField } from '@shared/ui';
import { useCreateNewsPage } from '../hook/';

const Page = () => {
  const {
    // handleUploadImage,
    errors,
    handleSubmit,
    setFieldValue,
    values,
    isValid,
    setOpen,
    t,
  } = useCreateNewsPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
            title: t('routes.news'),
          },
          { href: '', title: t('routes.create') },
        ]}
        controls={
          <Button
            variant="white"
            size="small"
            onClick={() => setOpen(true)}
            disabled={!isValid || values.title_ru === ''}
          >
            <IconEyeOpen width={20} height={20} />
            {t('controls.preview')}
          </Button>
        }
      />
      <form onSubmit={handleSubmit}>
        <TextField
          value={values.title_ru}
          onChange={(ev) => {
            setFieldValue('title_ru', ev.target.value);
          }}
          error={errors.title_ru}
          label={'title_ru'}
        />
      </form>
    </PageSkeleton>
  );
};

export default Page;
