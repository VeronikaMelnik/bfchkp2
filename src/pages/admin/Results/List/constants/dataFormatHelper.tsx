import { TableControls } from '@widgets/Table';
import { TableText } from '@entities/components';
import { IResult } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useDataFormatHelper = (data: Array<IResult>) => {
  return data.map(({ id, place, member, championship }) => {
    return {
      id: <TableText text={String(id)} />,
      place: <TableText text={String(place)} />,
      name: <TableText text={member.person.name} fontWeight="medium" />,
      lastName: <TableText text={member.person.lastName} fontWeight="medium" />,
      championship: <TableText text={championship.name} fontWeight="medium" />,
      date: (
        <TableText text={new Date(championship.date).toLocaleDateString()} />
      ),
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
