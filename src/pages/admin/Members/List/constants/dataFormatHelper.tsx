import { TableControls } from '@widgets/Table';
import { TableText } from '@entities/components';
import { IMember } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useDataFormatHelper = (data: Array<IMember>) => {
  return data.map(({ id, person, team }) => {
    return {
      id: <TableText text={String(id)} />,
      name: <TableText text={person.name} fontWeight="medium" />,
      lastName: <TableText text={person.lastName} fontWeight="medium" />,
      team: <TableText text={team.name} fontWeight="medium" />,
      controls: (
        <TableControls
          genDetailsRoute={AppRoutes[AppRoutesEnum.TEAMS]}
          genUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_TEAMS]}
          id={id}
        />
      ),
    };
  });
};
