import { useTranslation } from 'react-i18next';
import { PageHeader, PageSkeleton } from '@entities/components';
import { TitlesCard } from '@entities/components/cards/titles';
import { useDisciplinesPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { disciplines } = useDisciplinesPage();
  const { t } = useTranslation();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            title: t('sidebar.disciplines'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {disciplines.map((el) => {
          return <TitlesCard nameTitle={el.name} key={`news-card-${el.id}`} />;
        })}
      </div>
    </PageSkeleton>
  );
};
