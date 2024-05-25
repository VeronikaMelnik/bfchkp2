import { useEffect, useState } from 'react';
import { useGetUserDisciplinesList } from '@features/disciplines';
import { IDiscipline } from '@entities/types/discipline.interface';

export const useDisciplinesPage = () => {
  const { getData, isLoading } = useGetUserDisciplinesList();
  const [disciplines, setDisciplines] = useState<Array<IDiscipline>>([]);
  useEffect(() => {
    getData().then((val) => {
      if (val) {
        setDisciplines(val);
      }
    });
  }, [getData]);
  return { disciplines, isLoading };
};
