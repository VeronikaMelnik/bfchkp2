import { TableControls, TableText } from '@entities/components';
import { ITeam } from '@entities/types/team.interface';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

interface Props {
  data: Array<ITeam>;
  onDelete: (id: number) => () => Promise<void> | void;
}

export const useTableRows = ({ data, onDelete }: Props) => {
  return data.map(({ id, name, city, address }) => {
    return {
      id: <TableText>{String(id)}</TableText>,
      name: <TableText>{name}</TableText>,
      city: <TableText>{city}</TableText>,
      address: <TableText>{address}</TableText>,
      controls: (
        <TableControls
          getUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_TEAMS]}
          onDelete={onDelete(id)}
          id={id}
        />
      ),
    };
  });
};
