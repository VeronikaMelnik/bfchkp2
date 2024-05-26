import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserChampionshipsList } from '@features/championships';
import {
  IChampionship,
  INewsFilter,
  INewsSort,
  ListParams,
} from '@entities/types';
import { INITIAL_PER_PAGE } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useChampionshipsListPage = () => {
  const { t } = useTranslation('championships');
  const { getData, isLoading } = useGetUserChampionshipsList();
  const [news, setNews] = useState<Array<IChampionship>>([]);

  useEffect(() => {
    const newsParams: Params = {
      page: 1,
      perPage: INITIAL_PER_PAGE,
      filter: {
        status: 1,
      },
      sort: {
        created_at: 'asc',
      },
    };
    getData(newsParams).then((val) => {
      if (val) {
        setNews(val);
      }
    });
  }, [getData]);
  return { news, isLoading, t };
};
