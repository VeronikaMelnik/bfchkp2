import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserResultsList } from '@features/results';
import { INewsFilter, INewsSort, IResult, ListParams } from '@entities/types';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useResultsListPage = () => {
  const { t } = useTranslation();
  const { getData, isLoading } = useGetUserResultsList();
  const [results, setResult] = useState<Array<IResult>>([]);

  useEffect(() => {
    const teamsParams: Params = {
      page: 1,
      perPage: 50,
      filter: {
        status: 1,
      },
      sort: {
        id: 'asc',
      },
    };
    getData(teamsParams).then((val) => {
      if (val) {
        setResult(val);
      }
    });
  }, [getData]);
  return { results, isLoading, t };
};
