import { formatDate } from 'date-fns';
import { PageHeader, PageSkeleton } from '@entities/components';
import { ChampionshipsCard } from '@entities/components/cards/championships';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useChampionshipsListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { news, t } = useChampionshipsListPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.NEWS](),
            title: t('routes.news'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {news.map((el) => (
          <ChampionshipsCard
            link={''}
            nameTitle={el.name}
            judges={[el.championShipJudges?.judge?.person.name] || undefined}
            key={`news-card-${el.id}`}
            published_date={formatDate(el.date, 'dd.MM.yyyy')}
          />
        ))}
      </div>
    </PageSkeleton>
  );
};
