import { NewsCard, PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useNewsListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { news, t, lang } = useNewsListPage();

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
            <NewsCard
              link={AppRoutes[AppRoutesEnum.NEWS_CURRENT](el.id)}
              title={el.title[lang]}
              text={el.description[lang]}
              image={el.image.url}
              key={`news-card-${el.id}`}
              published_date={new Date(el.createdAt)}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
