import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { TableControls, TableText } from '@entities/components';
import { INews } from '@entities/types';
import { AppRoutes, AppRoutesEnum, LanguageEnum } from '@shared/constants';

interface Props {
  data: Array<INews>;
  onDelete: (id: number) => () => Promise<void> | void;
}

export const useTableRows = ({ data, onDelete }: Props) => {
  const { i18n } = useTranslation();
  return data.map(({ id, title, description, createdAt }) => {
    return {
      id: <TableText>{String(id)}</TableText>,
      title: (
        <TableText fontWeight="medium">
          {title[i18n.language as LanguageEnum]}
        </TableText>
      ),
      text: <TableText>{description[i18n.language as LanguageEnum]}</TableText>,
      date: <TableText>{format(new Date(createdAt), 'dd.MM.yy')}</TableText>,
      controls: (
        <TableControls
          getDetailsRoute={AppRoutes[AppRoutesEnum.NEWS_CURRENT]}
          getUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_NEWS]}
          onDelete={onDelete(id)}
          id={id}
        />
      ),
    };
  });
};
