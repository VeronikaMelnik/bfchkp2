import { useEffect, useState } from 'react';
import { useGetUserJudgesList } from '@features/judges';
import { IJudge } from '@entities/types';

export const useJudgesPage = () => {
  const { getData, isLoading } = useGetUserJudgesList();
  const [judges, setJudges] = useState<Array<IJudge>>([]);
  useEffect(() => {
    getData().then((val) => {
      if (val) {
        setJudges(val);
      }
    });
  }, [getData]);
  return { judges, isLoading };
};
