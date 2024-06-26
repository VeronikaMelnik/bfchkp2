import { PageHeader, PageSkeleton } from '@entities/components';
import { UserCard } from '@entities/components/cards/me';
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
            href: AppRoutes[AppRoutesEnum.USER](),
            title: t('sidebar.user'),
          },
          { href: '', title: users?.person.name || '' },
        ]}
      />
      <Card padding={12} gap={20} loading={isLoading} loaderSize={32}>
        <Button onClick={handleEditClick}>
          <IconPlus width={24} height={24} />
          {t('controls.edit')}
        </Button>
      </Card>
      <UserCard
        image={
          users?.person.image?.url ||
          'https://cdn-icons-png.flaticon.com/512/4837/4837857.png'
        }
        experience={users?.email}
        name={users?.person.name}
        lastName={users?.person.lastName}
        key={`news-card-${users?.id}`}
      />
    </PageSkeleton>
  );
};
