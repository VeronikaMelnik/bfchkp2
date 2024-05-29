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
          {
            href: AppRoutes[AppRoutesEnum.NEWS](),
            title: t('sidebar.members'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {members.map((el) => {
          return (
            <CoachesCard
              image={
                el.person.image?.url ||
                'https://cdn-icons-png.flaticon.com/512/4837/4837857.png'
              }
              experience={el.team.name}
              name={el.person.name}
              lastName={el.person.lastName}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
