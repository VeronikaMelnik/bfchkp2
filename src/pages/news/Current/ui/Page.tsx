import { ContentWidget } from '@widgets/Content';
import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum, LanguageEnum } from '@shared/constants';
import { useCurrentNews } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { isLoading, news, i18n, t } = useCurrentNews();
  return (
    <PageSkeleton>
      <PageHeader
        hideTitle
        breadcrumbs={[
          { href: AppRoutes[AppRoutesEnum.NEWS](), title: t('sidebar.news') },
          { href: '', title: news?.title[i18n.language as LanguageEnum] || '' },
        ]}
      />
      <img
        src={news?.image?.url || 'https://i.postimg.cc/LXtx1fzJ/sdefrgtbh.jpg'}
        className={styles.newsImage}
      />
      <ContentWidget
        html={news && news.description[i18n.language as LanguageEnum]}
        created_at={news && new Date(news.createdAt)}
        isLoading={isLoading}
        title={news?.title[i18n.language as LanguageEnum]}
      />
    </PageSkeleton>
  );
};
