import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useResultsListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { results, t } = useResultsListPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.RESULTS](),
            title: t('routes.results'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {results.map((el) => {
          return (
            <CoachesCard
              experience={el.championship.name}
              name={`${t('table.place_place')} ${el.place} —   ${el.member.person.name}`}
              lastName={el.member.person.lastName}
              team={`${el.championship.date}`}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
