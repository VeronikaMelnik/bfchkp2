import { formatDate } from 'date-fns';
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
            title: t('sidebar.results'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {results.map((el) => {
          return (
            <CoachesCard
              image={
                el.member.person.image?.url ||
                'https://cdn-icons-png.flaticon.com/512/4837/4837857.png'
              }
              experience={el.championship.name}
              name={`${t('table.place')} ${el.place} —   ${el.member.person.name}`}
              lastName={el.member.person.lastName}
              team={formatDate(el.championship.date, 'dd.MM.yyyy')}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
