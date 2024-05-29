import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserTeamsList } from '@features/teams';
import { INewsFilter, INewsSort, ListParams } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useTeamsListPage = () => {
  const { t } = useTranslation();
  const { getData, isLoading } = useGetUserTeamsList();
  const [teams, setTeam] = useState<Array<ITeam>>([]);

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
        setTeam(val);
      }
    });
  }, [getData]);
  return { teams, isLoading, t };
};
