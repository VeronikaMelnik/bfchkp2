import { useEffect, useState } from 'react';
import { useGetUserCoachesList } from '@features/coaches';
import { ICoach } from '@entities/types/coach.interface';

export const useCoachesPage = () => {
  const { getData, isLoading } = useGetUserCoachesList();
  const [coaches, setCoaches] = useState<Array<ICoach>>([]);
  useEffect(() => {
    getData().then((val) => {
      if (val) {
        setCoaches(val);
      }
    });
  }, [getData]);
  return { coaches, isLoading };
};
