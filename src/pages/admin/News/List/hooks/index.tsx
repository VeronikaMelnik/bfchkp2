import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useGetNewsList } from '@features/Admin';
import { useDeleteNews } from '@features/Admin/News/hooks/delete';
import { INews } from '@entities/types';
import {
  AppRoutes,
  AppRoutesEnum,
  INITIAL_PER_PAGE,
  NewsStatusEnum,
} from '@shared/constants';
import { useTableHeader, useTableRows } from '../helper';

export const useNewsList = () => {
  const { t } = useTranslation('news');
  const { getData, total } = useGetNewsList();
  const [search, setSearch] = useState('');
  const { onDelete } = useDeleteNews();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [data, setData] = useState<Array<INews>>([]);
  const [status, setStatus] = useState<keyof typeof NewsStatusEnum>();
  const [active, setActive] = useState<string | number>();
  const navigate = useNavigate();
  const location = useLocation();
  const [debounced] = useDebounce(search, 500);

  const handleGetData = useCallback(async () => {
    const newData = await getData({
      page,
      perPage,
      searchValue: debounced,
    });
    if (newData) {
      setData(newData);
    }
  }, [getData, page, perPage, debounced]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const handleCreateClick = useCallback(() => {
    navigate(AppRoutes[AppRoutesEnum.CREATE_NEWS]());
  }, [navigate]);

  const handleSetPage: (selectedItem: { selected: number }) => void =
    useCallback(({ selected }) => {
      setPage(selected + 1);
    }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setActive(undefined);
  }, []);

  const handleOpenModal = useCallback(
    (id: string | number) => () => {
      setIsModalOpen(true);
      setActive(id);
    },
    [],
  );

  const handleDelete = useCallback(() => {
    if (!active) {
      return;
    }
    onDelete(active);
    handleCloseModal();
    handleGetData();
  }, [active, handleCloseModal, handleGetData, onDelete]);

  const tableHeader = useTableHeader();

  const tableData = useTableRows({
    data,
    onDelete: handleOpenModal,
  });

  const handleToggleStatusFilter = useCallback(() => {
    setStatus((val) => (val ? undefined : 2));
  }, []);

  return {
    location,
    data,
    handleCreateClick,
    search,
    setSearch,
    page,
    setPage: handleSetPage,
    perPage,
    setPerPage,
    tableHeader,
    tableData,
    t,
    total,
    status,
    isModalOpen,
    handleDelete,
    handleCloseModal,
    toggleStatusFilter: handleToggleStatusFilter,
  };
};
