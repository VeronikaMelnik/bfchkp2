import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { useMembersListPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { members, t } = useMembersListPage();

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          { href: AppRoutes[AppRoutesEnum.NEWS](), title: t('routes.members') },
        ]}
      />
      <div className={styles.wrapper}>
        {members.map((el) => {
          return (
            <CoachesCard
              image={
                el.person.image?.url ||
                'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg'
              }
              experience={el.team.name}
              name={el.person.name}
              lastName={el.person.lastName}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
