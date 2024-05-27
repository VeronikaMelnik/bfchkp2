import { TableControls, TableText } from '@entities/components';
import { IResult } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

interface Props {
  data: Array<IResult>;
  onDelete: (id: number) => () => Promise<void> | void;
}

export const useTableRows = ({ data, onDelete }: Props) => {
  return data.map(({ id, place, championship, member }) => {
    return {
      id: <TableText>{String(id)}</TableText>,
      place: <TableText>{String(place)}</TableText>,
      name: <TableText>{championship.name}</TableText>,
      personName: <TableText>{member.person.name}</TableText>,
      personLastName: <TableText>{member.person.lastName}</TableText>,
      controls: (
        <TableControls
          getUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_RESULTS]}
          onDelete={onDelete(id)}
          id={id}
        />
      ),
    };
  });
};
