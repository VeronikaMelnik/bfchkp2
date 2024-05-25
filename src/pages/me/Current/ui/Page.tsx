import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconPlus } from '@shared/icons';
import { Button, Card } from '@shared/ui';
import { useCurrentUser } from '../hook';

export default () => {
  const { users, t, isLoading } = useCurrentUser();
  const { handleEditClick } = useCurrentUser();
  return (
    <PageSkeleton>
      <PageHeader
        hideTitle
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.UPDATE_USER](),
            title: t('routes.users'),
          },
          { href: '', title: users?.person.name || '' },
        ]}
      />
      <Card padding={12} gap={20} loading={isLoading} loaderSize={32}>
        <Button onClick={handleEditClick}>
          <IconPlus width={24} height={24} />
          {t('controls.edit')}
        </Button>
        <Button onClick={handleEditClick}>
          <IconPlus width={24} height={24} />
          {t('controls.editPhoto')}
        </Button>
      </Card>
      {/* <img src={news?.image.url} className={styles.newsImage} /> */}
      <CoachesCard
        image={users?.person.image?.url}
        experience={users?.email}
        name={users?.person.name}
        lastName={users?.person.lastName}
        key={`news-card-${users?.id}`}
      />
    </PageSkeleton>
  );
};
