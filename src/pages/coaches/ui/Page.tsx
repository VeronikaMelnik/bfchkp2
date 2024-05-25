import { useTranslation } from 'react-i18next';
import { PageHeader, PageSkeleton } from '@entities/components';
import { CoachesCard } from '@entities/components/cards/coaches';
import { useCoachesPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { coaches } = useCoachesPage();
  const { t } = useTranslation();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            title: t('sidebar.coaches'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {coaches.map((el) => {
          return (
            <CoachesCard
              image={el.person.image?.url}
              experience={`${t('coaches.experience')} ${el.experience} ${t('coaches.years')}`}
              name={el.person.name}
              lastName={el.person.lastName}
              team={`${t('coaches.team')} ${el.team.name}`}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
