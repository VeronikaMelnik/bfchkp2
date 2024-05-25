import { TableControls } from '@widgets/Table';
import { TableText } from '@entities/components';
import { ITeam } from '@entities/types/team.interface';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useDataFormatHelper = (data: Array<ITeam>) => {
  return data.map(({ id, name, city, address, createdAt }) => {
    return {
      id: <TableText text={String(id)} />,
      name: <TableText text={name} fontWeight="medium" />,
      city: <TableText text={city} fontWeight="medium" />,
      address: <TableText text={address} fontWeight="medium" />,
      date: <TableText text={new Date(createdAt).toLocaleDateString()} />,
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
