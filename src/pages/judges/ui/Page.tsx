import { useTranslation } from 'react-i18next';
import { JudgesCard, PageHeader, PageSkeleton } from '@entities/components';
import { useJudgesPage } from '../hook';
import styles from './Page.module.scss';

export default () => {
  const { judges } = useJudgesPage();
  const { t } = useTranslation();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          {
            title: t('sidebar.judges'),
          },
        ]}
      />
      <div className={styles.wrapper}>
        {judges.map((el) => {
          return (
            <JudgesCard
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
