import { useTranslation } from 'react-i18next';
import { TableControls } from '@widgets/Table';
import { TableText } from '@entities/components';
import { INews } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

export const useDataFormatHelper = (data: Array<INews>) => {
  const { i18n } = useTranslation();
  return data.map(({ id, title, description, createdAt }) => {
    return {
      id: <TableText text={String(id)} />,
      title: (
        <TableText
          text={title[i18n.language as 'en' | 'ru' | 'be']}
          fontWeight="medium"
        />
      ),
      date: <TableText text={new Date(createdAt).toLocaleDateString()} />,
      text: <TableText text={description[i18n.language as 'en' | 'ru']} />,
      controls: (
        <TableControls
          genDetailsRoute={AppRoutes[AppRoutesEnum.NEWS_CURRENT]}
          genUpdateRoute={AppRoutes[AppRoutesEnum.UPDATE_NEWS]}
          id={id}
        />
      ),
    };
  });
};
