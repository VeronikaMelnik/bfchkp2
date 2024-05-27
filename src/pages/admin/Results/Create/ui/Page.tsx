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
            href: AppRoutes[AppRoutesEnum.RESULTS](),
            title: t('routes.results'),
          },
          { href: '', title: t('routes.create') },
        ]}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <StyledSelect
            isClearable={false}
            label={t('editor.championship.label')}
            placeholder={t('editor.championship.placeholder')}
            onChange={handleChangeChampionshipSelection}
            options={championshipsOptions}
            isLoading={isChampionshipsLoading}
            className={styles.select}
          />
          <StyledSelect
            isClearable={false}
            label={t('editor.member.label')}
            placeholder={t('editor.member.placeholder')}
            onChange={handleChangeMemberSelection}
            options={membersOptions}
            isLoading={isMembersLoading}
            className={styles.select}
          />
          <TextField
            value={place}
            onChange={handlePlaceChange}
            label={t('editor.place.label')}
          />
        </div>

        <Button type={'submit'} disabled={!isValid}>
          {t('controls.publish')}
        </Button>
      </form>
    </PageSkeleton>
  );
};

export default Page;
