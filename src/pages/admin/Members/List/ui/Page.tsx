import { PageHeader, PageSkeleton } from '@entities/components';
import { IconLoupe, IconPlus } from '@shared/icons';
import { Button, Card, TextField } from '@shared/ui';
import { Table } from '@shared/ui/Table';
import { useTableConfig, useDataFormatHelper } from '../constants';
import { useMembersList } from '../hooks';
import styles from './Page.module.scss';

const Page = () => {
  const { location, data, handleCreateClick, search, setSearch, isLoading, t } =
    useMembersList();
  const tableConfig = useTableConfig();
  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[{ href: location.pathname, title: t('routes.members') }]}
      />
      <Card padding={12} gap={20} loading={isLoading} loaderSize={32}>
        <Button onClick={handleCreateClick}>
          <IconPlus width={24} height={24} />
          {t('controls.create')}
        </Button>
        <TextField
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          wrapperClassName={styles.input}
          placeholder={t('controls.find')}
          leftItem={<IconLoupe width={20} height={20} />}
        />
      </Card>
      <Card className={styles.card} flexDirection="column" loading={isLoading}>
        <Table config={tableConfig} items={useDataFormatHelper(data)} />
        <div className={styles.controls}></div>
      </Card>
    </PageSkeleton>
  );
};

export default Page;
