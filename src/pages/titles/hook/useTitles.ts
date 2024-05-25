import { useEffect, useState } from 'react';
import { useGetUserTitlesList } from '@features/titles';
import { ITitle } from '@entities/types';

export const useTitlesPage = () => {
  const { getData, isLoading } = useGetUserTitlesList();
  const [titles, setTitles] = useState<Array<ITitle>>([]);
  useEffect(() => {
    getData().then((val) => {
      if (val) {
        setTitles(val);
      }
    });
  }, [getData]);
  return { titles, isLoading };
};
