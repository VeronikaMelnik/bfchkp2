import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useTeamsListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { teams, t } = useTeamsListPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          { href: AppRoutes[AppRoutesEnum.NEWS](), title: t('sidebar.teams') },
        ]}
      />
      <div className={styles.wrapper}>
        {teams.map((el) => {
          return (
            <CoachesCard
              image={el.logo || 'https://i.postimg.cc/NMqNFbrh/23.jpg'}
              experience={el.city}
              name={el.name}
              lastName={''}
              team={el.address}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
