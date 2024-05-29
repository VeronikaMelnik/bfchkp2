import { isValid } from 'date-fns';
import { PageHeader, PageSkeleton, StyledSelect } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button, TextField } from '@shared/ui';
import { useUpdateResultsPage } from '../hook';
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
    selectedChampionship,
    selectedMember,
    isCurrentResultLoading,
  } = useUpdateResultsPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_RESULTS](),
            title: t('sidebar.results'),
          },
          { href: '', title: t('sidebar.edit') },
        ]}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <StyledSelect
            value={selectedChampionship}
            isClearable={false}
            label={t('field.championshipName')}
            placeholder={t('field.championshipName')}
            onChange={handleChangeChampionshipSelection}
            options={championshipsOptions}
            isLoading={isChampionshipsLoading}
            className={styles.select}
          />
          <StyledSelect
            value={selectedMember}
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

        <Button type={'submit'} disabled={!isValid || isCurrentResultLoading}>
          {t('controls.add')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
