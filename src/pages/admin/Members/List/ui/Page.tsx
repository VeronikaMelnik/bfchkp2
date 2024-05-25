import { Link } from 'react-router-dom';
import {
  Modal,
  PageHeader,
  PageSkeleton,
  Pagination,
  PerPage,
} from '@entities/components';
import { ModalDelete } from '@entities/components/ModalDelete';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconPlus } from '@shared/icons';
import { Button, Card } from '@shared/ui';
import { Table } from '@shared/ui/Table';
import { useList } from '../hooks';
import styles from './Page.module.scss';

const Page = () => {
  const {
    location,
    total,
    setPage,
    page,
    tableHeader,
    tableData,
    perPage,
    setPerPage,
    t,
    handleCloseModal,
    handleDelete,
    isModalOpen,
  } = useList();
  return (
    <PageSkeleton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalDelete
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
          text={t('remove.text')}
          title={t('remove.title')}
        />
      </Modal>
      <PageHeader
        breadcrumbs={[{ href: location.pathname, title: t('routes.news') }]}
        controls={
          <Link to={AppRoutes[AppRoutesEnum.CREATE_MEMBERS]()}>
            <Button variant="primary" size="small">
              <IconPlus width={20} height={20} />
              {t('actions.add')}
            </Button>
          </Link>
        }
      />
      <Card className={styles.card} flexDirection="column">
        <Table config={tableHeader} items={tableData} />
        <div className={styles.controls}>
          <PerPage active={perPage} setActive={setPerPage} />
          <Pagination page={page} total={total} onChange={setPage} />
        </div>
      </Card>
    </PageSkeleton>
  );
};

export default Page;
