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
    selectedTeam,
    handleChangeTeamSelection,
    teamsOptions,
    isTeamsLoading,
    selectedMember,
    handleChangeMemberSelection,
    membersOptions,
    isMembersLoading,
  } = useCreateMembersPage();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.MEMBERS](),
            title: t('routes.memberы'),
          },
          { href: '', title: t('routes.create') },
        ]}
      />
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.form}>
          <StyledSelect
            isClearable={false}
            label={t('editor.department.label')}
            placeholder={t('editor.department.placeholder')}
            value={selectedTeam}
            onChange={handleChangeTeamSelection}
            options={teamsOptions}
            isLoading={isTeamsLoading}
            className={styles.select}
          />
          <StyledSelect
            isClearable={false}
            label={t('editor.department.label')}
            placeholder={t('editor.department.placeholder')}
            value={selectedMember}
            onChange={handleChangeMemberSelection}
            options={membersOptions}
            isLoading={isMembersLoading}
            className={styles.select}
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
