import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserResultsList } from '@features/results';
import { INewsFilter, INewsSort, IResult, ListParams } from '@entities/types';
import { INITIAL_PER_PAGE } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useResultsListPage = () => {
  const { t } = useTranslation('results');
  const { getData, isLoading } = useGetUserResultsList();
  const [results, setResult] = useState<Array<IResult>>([]);

  useEffect(() => {
    const teamsParams: Params = {
      page: 1,
      perPage: INITIAL_PER_PAGE,
      filter: {
        status: 1,
      },
      sort: {
        created_at: 'asc',
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
