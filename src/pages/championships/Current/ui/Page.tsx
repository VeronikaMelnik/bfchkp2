import { ContentWidget } from '@widgets/Content';
import { PageHeader, PageSkeleton } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useCurrentChampionships } from '../hook';

export default () => {
  const { isLoading, championships, t } = useCurrentChampionships();
  return (
    <PageSkeleton>
      <PageHeader
        hideTitle
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.CHAMPIONSHIPS](),
            title: t('sidebar.championships'),
          },
          { href: '', title: championships?.name || '' },
        ]}
      />
      <ContentWidget
        html={championships && championships.name}
        created_at={championships && new Date(championships.createdAt)}
        isLoading={isLoading}
        title={championships?.name}
      />
    </PageSkeleton>
  );
};
