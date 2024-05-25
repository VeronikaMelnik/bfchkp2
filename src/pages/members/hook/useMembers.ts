import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserMembersList } from '@features/members';
import { IMember, INewsFilter, INewsSort, ListParams } from '@entities/types';
import { INITIAL_PER_PAGE } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useMembersListPage = () => {
  const { t } = useTranslation('members');
  const { getData, isLoading } = useGetUserMembersList();
  const [members, setMember] = useState<Array<IMember>>([]);

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
        setMember(val);
      }
    });
  }, [getData]);
  return { members, isLoading, t };
};
