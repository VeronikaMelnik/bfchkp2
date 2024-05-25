import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useMembersListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { members, t } = useMembersListPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          { href: AppRoutes[AppRoutesEnum.NEWS](), title: t('routes.members') },
        ]}
      />
      <div className={styles.wrapper}>
        {members.map((el) => {
          return (
            <CoachesCard
              experience={el.team.name}
              name={el.person.name}
              lastName={el.person.name}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
