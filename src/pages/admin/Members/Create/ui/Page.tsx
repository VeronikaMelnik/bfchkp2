import { isValid } from 'date-fns';
import { PageHeader, PageSkeleton, StyledSelect } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { Button } from '@shared/ui';
import { useCreateMembersPage } from '../hook/';
import styles from './Page.module.scss';

const Page = () => {
  const {
    handleSubmit,
    t,
    handleChangeTeamSelection,
    teamsOptions,
    isTeamsLoading,
    handleChangeMemberSelection,
    membersOptions,
    isMembersLoading,
  } = useCreateMembersPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ADMIN_MEMBERS](),
            title: t('sidebar.members'),
          },
          { href: '', title: t('sidebar.create') },
        ]}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <StyledSelect
            isClearable={false}
            label={t('field.teamName')}
            placeholder={t('field.teamName')}
            onChange={handleChangeTeamSelection}
            options={teamsOptions}
            isLoading={isTeamsLoading}
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
