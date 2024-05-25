import { TableControls, TableText } from '@entities/components';
import { IMember } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

interface Props {
  data: Array<IMember>;
  onDelete: (id: number) => () => Promise<void> | void;
}

export const useTableRows = ({ data, onDelete }: Props) => {
  return data.map(({ id, person, team }) => {
    return {
      id: <TableText>{String(id)}</TableText>,
      name: <TableText fontWeight="medium">{person.name}</TableText>,
      lastName: <TableText fontWeight="medium">{person.lastName}</TableText>,
      team: <TableText fontWeight="medium">{team.name}</TableText>,
      controls: (
        <TableControls
          getUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_MEMBERS]}
          onDelete={onDelete(id)}
          id={id}
        />
      ),
    };
  });
};
