import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserNewsList } from '@features/news';
import { INews, INewsFilter, INewsSort, ListParams } from '@entities/types';
import { LanguageEnum } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useNewsListPage = () => {
  const { t, i18n } = useTranslation();
  const { getData, isLoading } = useGetUserNewsList();
  const [news, setNews] = useState<Array<INews>>([]);

  useEffect(() => {
    const newsParams: Params = {
      page: 1,
      perPage: 50,
      filter: {
        status: 1,
      },
      sort: {
        id: 'asc',
      },
    };
    getData(newsParams).then((val) => {
      if (val) {
        setNews(val);
      }
    });
  }, [getData]);
  return { news, isLoading, t, i18n, lang: i18n.language as LanguageEnum };
};
