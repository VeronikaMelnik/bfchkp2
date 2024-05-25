import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserTeamsList } from '@features/teams';
import { INewsFilter, INewsSort, ListParams } from '@entities/types';
import { ITeam } from '@entities/types/team.interface';
import { INITIAL_PER_PAGE, LanguageEnum } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useTeamsListPage = () => {
  const { t, i18n } = useTranslation('teams');
  const { getData, isLoading } = useGetUserTeamsList();
  const [teams, setTeam] = useState<Array<ITeam>>([]);

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
        setTeam(val);
      }
    });
  }, [getData]);
  return { teams, isLoading, t, i18n, lang: i18n.language as LanguageEnum };
};
