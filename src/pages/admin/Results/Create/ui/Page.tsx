import { isValid } from 'date-fns';
import { PageHeader, PageSkeleton, StyledSelect } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button, TextField } from '@shared/ui';
import { useCreateResultsPage } from '../hook/';
import styles from './Page.module.scss';

const Page = () => {
  const {
    handleSubmit,
    t,
    handleChangeChampionshipSelection,
    championshipsOptions,
    isChampionshipsLoading,
    handleChangeMemberSelection,
    membersOptions,
    isMembersLoading,
    handlePlaceChange,
    place,
  } = useCreateResultsPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_RESULTS](),
            title: t('sidebar.results'),
          },
          { href: '', title: t('sidebar.create') },
        ]}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <StyledSelect
            isClearable={false}
            label={t('field.championshipName')}
            placeholder={t('field.championshipName')}
            onChange={handleChangeChampionshipSelection}
            options={championshipsOptions}
            isLoading={isChampionshipsLoading}
            className={styles.select}
          />
          <StyledSelect
            isClearable={false}
            label={t('field.memberNameLastName')}
            placeholder={t('field.memberNameLastName')}
            onChange={handleChangeMemberSelection}
            options={membersOptions}
            isLoading={isMembersLoading}
            className={styles.select}
          />
          <TextField
            value={place}
            onChange={handlePlaceChange}
            label={t('field.place')}
          />
        </div>
        <div className={styles.button}>
          <Button type={'submit'} disabled={!isValid}>
            {t('controls.publish')}
          </Button>
        </div>
      </form>
    </PageSkeleton>
  );
};

export default Page;
