import { useTranslation } from 'react-i18next';
import { PageHeader, PageSkeleton } from '@entities/components';
import { TitlesCard } from '@entities/components/cards/titles';
import { useTitlesPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { titles } = useTitlesPage();
  const { t } = useTranslation();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            title: t('sidebar.titles'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {titles.map((el) => {
          return (
            <TitlesCard
              nameTitle={el.name}
              name={`${t('titles.member')} ${el.member.person.name}`}
              lastName={el.member.person.lastName}
              key={`news-card-${el.id}`}
            />
          );
        })}
      </div>
    </PageSkeleton>
  );
};
