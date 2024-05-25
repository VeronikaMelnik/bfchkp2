import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

export const useTableHeader: () => Array<ConfigItemType> = () => {
  const { t } = useTranslation('table');
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('table.index')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'descipription',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.newsTitle')}
        </Text>
      ),
      width: 230,
    },
    {
      name: 'text',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.newsText')}
        </Text>
      ),
      width: 350,
    },
    {
      name: 'date',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.newsDate')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
