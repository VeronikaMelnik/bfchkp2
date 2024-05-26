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
          { href: AppRoutes[AppRoutesEnum.NEWS](), title: t('routes.news') },
        ]}
      />
      <div className={styles.wrapper}>
        {news.map((el) => {
          return (
            <ChampionshipsCard
              link={AppRoutes[AppRoutesEnum.CHAMPIONSHIPS_CURRENT](el.id)}
              name={`${el.date}`}
              nameTitle={el.name}
              key={`news-card-${el.id}`}
              published_date={new Date(el.createdAt)}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
